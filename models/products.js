    const mongoose = require('mongoose');
    const Schema = mongoose.Schema;
    const productSchema = new Schema({
        username:{
            type:String,
            required : true
        },
        price:{
            type:Number,
            required:true
        },
        category: {
            type: Schema.Types.ObjectId,
            ref: "Categorys",
        },
        image:{
            type:String,
            required:true
        },
        
        description:{
            type:String,
            required:true, //bắt buộc
        },
    },
        {
            timestamps: true,
        }

    )
    const Products = mongoose.model("Products", productSchema);

    module.exports=Products;