import { clerkClient } from "@clerk/express";

export const auth = async (req, res, next) => {
  try {
    const { userId, has } = await req.auth();
    const hasPremiumPlan = await has({ plan: "premium" });

    const user = await clerkClient.users.getUser(userId);

    if (!hasPremiumPlan && user.privateMetadata.free_user) {
      req.free_user = user.privateMetadata.free_user;
    } else {
      await clerkClient.users.updateUserMetadata(userId, {
        privateMetadata: {
          free_user: 0,
        },
      });
      req.free_user = 0;
    }
    req.plan = hasPremiumPlan ? "premium" : "free";
    next();
  } catch (err) {
    res.json({ success: false, message: err.message });
  }
};
