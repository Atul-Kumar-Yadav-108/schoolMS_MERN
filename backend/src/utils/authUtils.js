import bcrypt from 'bcrypt';

export const hashPassword = async function(password){
    try {
        const saltRounds = 10;
        return await bcrypt.hash(password, saltRounds);
    } catch (error) {
        console.log(error)
    }
}


export const comparePassword = async function(password, hashedPassword){
    try {
        return await bcrypt.compare(password, hashedPassword);
    } catch (error) {
        console.log(error)
    }
}