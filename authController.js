

const users = [
    { id: 1, username: 'user1',email:"ayhan@gmail.com", password: '$2b$10$0qyc9bvR9.LTB1g2Z/F6X.8aVPrq7gsQvFL1qFh9wOWvn7pSS1Kw2' } // Şifre: password1
];

class UserController {
    constructor() {

    }

    async login(req, res) {
        try {
            const {email,password} = req.body

            const result =await User.find(user =>user.email == email)
            if(!result){
                throw new Error("User not found")
            }

            const hashPassword = await hashPassword(password,User.salt)
            if(!hashPassword) throw new Error("")
            


            
        } catch (error) {

        }
    }

    async register(req, res) {
        try {

        } catch (error) {

        }
    }



}