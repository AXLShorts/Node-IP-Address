const allowedIpAddresses = ["103.12.43.80"];

const checkIpAddress = (req, res, next) => {
  try {
    const ip = req.headers["x-forwarded-for"];
    if (!ip || !allowedIpAddresses.includes(ip)) {
        return res.status(403).json({
          success: false,
          error: { code: 403, message: "Access Denied." },
        });
      }
  
      next();
    } catch (err) {
      return res.status(500).json({
        success: false,
        error: { code: 500, message: err.message },
      });
    }
  };
  
  module.exports = checkIpAddress;
