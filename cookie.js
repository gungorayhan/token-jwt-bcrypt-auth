class Cookie {
    constructor() {

    }
async setCookieToken(res,token){
    res.cookie("jwt", token, {
        maxAge: 15 * 24 * 60 * 60 * 1000,
        httpOnly:true, // prevent XSS attacks cross-site scripting attacks
        sameSite:"strict", //CSRF attacks cross-site request forgery attacks
        secure:process.env.NODE_ENV !== "development"
    })
}

async getCookieToken(req){
    return req.cookies.jwt
}

}
