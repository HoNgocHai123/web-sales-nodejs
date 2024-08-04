const Users = require("../models/user");
const bcrypt = require("bcryptjs");

const addUser = async (req, res) => {
    const { username, email, password, date, phone, address } = req.body;
    try {
        const users = new Users({
            username,
            email,
            password,
            date,
            phone,
            address
        });
        await users.save();
      
        res.redirect("/signin")
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};
const login= async (req,res)=>{
    const{email,password}=req.body;
    try {
        const user=await Users.findOne({email});
        if(user){
            const isValid=user.isValidPassword(password);
          if(isValid){
            req.session.user=user;
            if(user.role === 'admin') {
                return res.redirect("/product");
            } else {
                return res.redirect("/");
            }
          }
    } else {
      return res.redirect("/");
    }
    } catch (error) {   
    console.log(error);    
    }
    }
    const logout=(req,res)=>{
        req.session.destroy();
        return res.redirect("/signin");
    }

module.exports = {
    addUser,
    login,
    logout,
    
};
