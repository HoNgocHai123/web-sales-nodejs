const Products = require("../models/products");
const addProduct = async (req, res) => {
    const image=req.file.path;
    const { username, price, category, description } = req.body;
    try {
        const products = new Products({
           username,
           price,
           category,
           description,
           image
        });
     await products.save();
     res.redirect("/getproduct");
    } catch (error) {
        console.log(error);
    }
};
// Trong mã JavaScript của bạn
const deleteProduct = async (req, res) => {
    const { id } = req.body;
    try {
        await Products.findByIdAndDelete(id);
        res.redirect("/getproduct");
    } catch (error) {
        console.log(error);
        
    
        res.redirect("/getproduct");
    }
}

const updateProduct=async(req,res)=>{
    const image=req.file.path;
    const {id,username, price, category, description } = req.body;
    try {
        await Products.findByIdAndUpdate(id,{
            username,
            price,
            category,
            description,
            image
        })
        return res.redirect('getproduct');
    } catch (error) {        
    }
}
const searchProduct=async(req,res)=>{
    const searchTerm = req.query.search;
    const searchResults = await Products.find({
        username: { $regex: new RegExp(searchTerm, 'i') }})
    try {
        res.render("index.ejs",{
            data:{page:"searchResults",title:"đây là trang Home",searchResults}
        })
    } catch (error) {
        console.log(error)
    }
}
module.exports={
    addProduct,
    deleteProduct,
    updateProduct,
    searchProduct
}