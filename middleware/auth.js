const jwt = require('jsonwebtoken')

function auth (req, res, next) {
    const authHeader = req.header('authorization')
    if(!authHeader) {
        return res.status(401).json({message: `No authorization-token recived from header`})
    }
    const authToken = authHeader.split(' ')[1];
    try {
        const decodedUserID = jwt.verify(authToken, process.env.JWT_SECRET)
        req.user = decodedUserID.id
        next()
    } catch (error) {
        return res.status(401).json({message: `Authorization-token is not valid`})
    }
}

module.exports = auth