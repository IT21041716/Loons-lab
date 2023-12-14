import jwt  from 'jsonwebtoken';
import dotenv from 'dotenv'
dotenv.config()

const requireSignin = async (req, res, next) => {
    if (req.headers.authorization && req.headers.authorization.startsWith('Bearer')) {
        const token = req.headers.authorization.split(' ')[1];
        if (token == null) {
            res.status(401).json({
                message: "Unotherized..!"
            })
        }
        else {
            jwt.verify(token, process.env.JWT_TOKEN_KEY, (err, user) => {
                if (err) {
                    res.status(403).json({
                        messsage: "Forbidden..!"
                    })

                }
                else{
                        req.user = user,
                        next();
                }
            });
        }
    } else {
        res.status(401).json({
            message: "Session Expired..!",
            error: error
        })
    }

}

export default requireSignin