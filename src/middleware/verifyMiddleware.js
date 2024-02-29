const AppError = require("../misc/AppError");
const commonErrors = require("../misc/commonErrors");
const jwt = require('jsonwebtoken');

function verifyToken(req, res, next) {
   const token = req.headers['authorization'];

   if (!token) {
     next(
      new AppError(
        commonErrors.inputError,
        `토큰이 제공되지 않았습니다.`,
        403,
      ),
    );
   }
 
   jwt.verify(token, config.jwtSecret, (err, decoded) => {
      if (err) {
         next(
            new AppError(
               commonErrors.inputError,
               `토큰이 제공되지 않았습니다.`,
               403,
            ),
         )
      }
     req.user = decoded;
     next();
   });
 }
 
 module.exports = {
   verifyToken,
};