
const bcrypt = require("bcrypt")
const User=require("../Modal/UserModal")
const jwt = require('jsonwebtoken');

async function signup(req){``
    return new Promise((resolve, reject)=>{
    const { firstName, lastName,userName, email, password,phone,gender} = req.body;
    console.log(req.body)
    let hashPassword =   bcrypt.hashSync(password, 10);
    console.log(hashPassword+"hashPassword")
    const newUser = new User({
        firstName,
        lastName,
        userName,
        email,
        password: hashPassword,
        phone,
        gender
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

// login
async function login(req){
    return new Promise((resolve, reject)=>{
        const {email ,password}=req.body;
       User.findOne({ email }).then((doc)=>{
        if(!doc){
            resolve("User not exist")
        }
        //compare password 
        bcrypt.compare(password,doc.password, function(req,res) {
             if(res)
             {
                // resolve( "login successfull")
                let data = {
                    id : doc._id,
                    name: doc.name,
                }             
                const token = jwt.sign(data, '34567890-87654344gbngyumn78k78');
                resolve(token)
             }
             else{
                resolve("password incorrect")
             }
          });

       })
       .catch((err)=>{
        console.log(err)
       })

    })
}

module.exports={signup,login}