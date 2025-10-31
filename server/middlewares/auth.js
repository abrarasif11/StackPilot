const { clerkClient } = require("@clerk/express");

const auth = async (req, res, next) => {
  try {
    const { userId } = req.auth;
    const user = await clerkClient.users.getUser(userId);

    const hasPremiumPlan = user.privateMetadata.plan === "premium";
    const free_usage = user.privateMetadata.free_usage || 0;

    req.plan = hasPremiumPlan ? "premium" : "free";
    req.free_usage = free_usage;

    if (!hasPremiumPlan && free_usage === undefined) {
      await clerkClient.users.updateUserMetadata(userId, {
        privateMetadata: { free_usage: 0 },
      });
      req.free_usage = 0;
    }

    next();
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
};

module.exports = { auth };
