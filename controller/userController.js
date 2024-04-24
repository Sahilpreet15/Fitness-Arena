
const bcrypt = require("bcrypt")
const User=require("../Modal/UserModal")


async function signup(req){
    return new Promise((resolve, reject)=>{
    const { firstName, lastName,userName, email, password,phone} = req.body;
    console.log(req.body)
    let hashPassword =   bcrypt.hashSync(password, 10);
    console.log(hashPassword+"hashPassword")
    const newUser = new User({
        firstName,
        lastName,
        userName,
        email,
        password: hashPassword,
        phone
    });
    console.log(newUser)
    
    //const User
    User.findOne({email}).then((d)=>{
        if(d)
        {
            console.log(d,'iiuhihhi')
            resolve("User already exist")
        }
        else{
            newUser.save()
            .then((savedUser) => {
                console.log('User saved:', savedUser);
                resolve(newUser)
            })
            .catch((error) => {
                console.error('Error saving user:', error);
                reject(false)
            });
        }
       
    })   
    })
}

module.exports={signup}