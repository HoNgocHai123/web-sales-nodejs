const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const categorySchema = new Schema({
    username:{
        type: String,
        required:true
    },     
},
    {
        timestamps: true,
      }
)
const Categorys = mongoose.model("Categorys", categorySchema);

module.exports = Categorys;