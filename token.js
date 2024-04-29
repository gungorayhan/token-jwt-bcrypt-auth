class Token {
    constructor(){
        
    }
    
    async generateToken(data){
        const token = await jwt.sign({data},'secretKey',{
            expiresIn:"1h"
        })

        return token;
    }

    async verifyToken(token){
        const data = await jwt.verify(token,'secretKey')
        return data;
    }

}