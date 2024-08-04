const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const bcrypt = require("bcrypt");
const userSchema = new Schema({
    username:{
        type:String,
        required : true
    },
    email:{
        type:String,
        required:true, //bắt buộc
        unique: true
    },
    phone:{
        type:Number,
        required:true
    },
    password:{
        type:String,
        required:true
    },
    address:{
        type:String,
        required:true
    },
    date:{
        type:String,
        required:true
    },
    avatar: {
        type: String,
      },
      role: {
        type: String,
        required: true,
        default: "user",
      },
},
    {
        timestamps: true,
      }

)
userSchema.pre("save", async function (next) {
    try {
      const salt = await bcrypt.genSalt(10);
      if (!this.isModified("password")) {
        return next();
      }
      this.password = await bcrypt.hash(this.password, salt);
      next();
    } catch (error) {
      next(error);
    }
  });
//   so sánh pass
userSchema.methods = {
    isValidPassword: async function (password) {
      try {
        return await bcrypt.compare(password, this.password);
      } catch (error) {
        throw error;
      }
    },
}
const Users = mongoose.model("Users", userSchema);

module.exports=Users;