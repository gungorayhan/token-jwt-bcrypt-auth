class Hash {
    constructor(){

    }

    async genSalt(){
         const salt = await bcrypt.genSalt();
         return salt
    }

    async hashPassword(enteredPassword,salt){
        const result = await bcrypt.hash(password,salt);
        if(result){
           return result
        }

        throw new Error("password could not hash")
    }

    async comparePassword(hashPassword,hash){
        const result = await bcryp.compare(hashPassword,hash)
        return result
    }

    async validatePassword(enteredPAssword,savedPassword,salt){
        return await this.hashPassword(enteredPAssword,salt) === savedPassword
    }

}