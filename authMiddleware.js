class Auth{
    constructor(){

    }

    async getToken(req){
        let authHeader = req.header('Authorization');
        if (!authHeader) return res.status(401).send("Access Denied");
        return authHeader
    }

    async authentication (authHeader){
       
        if(!authHeader || !authHeader.startsWith("Bearer")){
            next("Authentication==false");
        }
    
        const token = authHeader.split(" ")[1];
    
        try {
            const userToken = JWT.verify(token,process.env.JWT_SECRET_KEY)
            req.body.user={
                userId:userToken.userId
            }
            next()
        } catch (error) {
            console.log(error)
            next("Authendication failed")
        }
    }

    async authorization(){

    }
}