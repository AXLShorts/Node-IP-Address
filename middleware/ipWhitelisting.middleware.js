const allowedIpAddresses = [
    "103.12.43.80"
];

export const checkIpAddress = async (
  req,
  res,
  next
) => {
  try {
    const ip = req.headers["x-forwarded-for"];
    if (!ip) {
      return res.status(403).send({
        success: false,
        error: { code: 403, message: "Access Denied." },
      });
    }

    if (!allowedIpAddresses.includes(ip)) {
      return res.status(403).send({
        success: false,
        error: { code: 403, message: "Access Denied." },
      });
    }
    next();
  } catch (err) {
    return res.status(500).send({
      success: false,
      error: { code: 500, message: (err).message },
    });
  }
};
