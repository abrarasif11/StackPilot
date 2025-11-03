import { clerkClient } from "@clerk/express";

export const auth = async (req, res, next) => {
  try {
    const { userId, sessionId } = req.auth || {};

    if (!userId) {
      return res
        .status(401)
        .json({ success: false, message: "Unauthorized: No user ID found." });
    }

    // ✅ Get full user data from Clerk
    const user = await clerkClient.users.getUser(userId);

    // ✅ Try both: Billing subscription info and private metadata
    const activePlan =
      user.privateMetadata?.plan?.toLowerCase() ||
      user.publicMetadata?.plan?.toLowerCase() ||
      user.primaryEmailAddress?.emailAddress?.includes("premium") // fallback
        ? "premium"
        : "free";

    const hasPremiumPlan = activePlan === "premium";
    const freeUserCount = user.privateMetadata?.free_user || 0;

    // ✅ Debugging logs (remove in production)
    console.log("👤 User:", userId);
    console.log("💳 Active Plan:", activePlan);
    console.log("🎟️ Free User Count:", freeUserCount);

    // ✅ If the user has a premium subscription:
    if (hasPremiumPlan) {
      // Reset free_user count if not 0 (cleanup)
      if (freeUserCount !== 0) {
        await clerkClient.users.updateUserMetadata(userId, {
          privateMetadata: {
            ...user.privateMetadata,
            free_user: 0,
            plan: "premium", // ensure plan stays synced
          },
        });
      }

      req.plan = "premium";
      req.free_user = 0;
      return next();
    }

    // ✅ If user is free
    req.plan = "free";
    req.free_user = freeUserCount;

    next();
  } catch (err) {
    console.error("❌ Clerk Auth Error:", err);
    return res
      .status(500)
      .json({ success: false, message: "Authentication failed." });
  }
};
