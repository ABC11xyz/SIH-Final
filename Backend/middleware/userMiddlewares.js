import jwt from 'jsonwebtoken';

export const checkAuth = (req, res, next) => {

  console.log('Middleware reached');


  const token = req.cookies.jwtToken;

  console.log(token)

    if (!token) {
      return res.status(403).json({
        success: false,
        message: "Token Not Found !!!"
      });
    }

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        if (!decoded) {
            return res.status(401).json({ success: false, message: "Invalid token!" });
        }

        console.log(decoded)
        req.user = decoded; 
        next();
    } catch (error) {
        return res.status(401).json({ success: false, message: "Invalid or expired token!" });
    }
};
