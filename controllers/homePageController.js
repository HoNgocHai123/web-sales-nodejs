const Products = require("../models/products");
const Categorys=require("../models/category")
const User = require("../models/user")
const getSignupPage=(req,res)=>{
    res.render("index.ejs",{
        data:{page:"signup",title:"đây là trang đăng kí"}
    })
}
const getSigninPage=(req,res)=>{
    res.render("index.ejs",{
        data:{page:"signin",title:"đây là trang đăng nhập"}
    })
}
// 
const getHomePage=async(req,res)=>{
    const products = await Products.find({});
    res.render("index.ejs",{
        data:{page:"homepage",title:"đây là trang Home",products}
    })
}
const getproductNew=async(req,res)=>{
    const products = await Products.find({});
    res.render("index.ejs",{
        data:{page:"product",title:"đây là trang product",products}
    })
}

// 
const getproductsp=async(req,res)=>{
    const productsp = await Products.find({});
    res.render("index.ejs",{
        data:{page:"product",title:"đây là trang Home",productsp}
    })
}

const getProductPage=async(req,res)=>{
    const category=await Categorys.find({})
    res.render("admin/admin.ejs",{
        data:{pageAdmin:"addProduct",title:"trang product admin",category}
    })
}
const getProductApi= async(req,res)=>{
    const products = await Products.find({});
    res.render("admin/admin.ejs",{
        data:{pageAdmin:"getProduct.ejs",title:"load api product",products}
    })
}
// getUser 
const getUserApi= async(req,res)=>{
    const users = await User.find({});
    res.render("admin/admin.ejs",{
        data:{pageAdmin:"getUser",title:"load api product",users}
    })
}
const getUpdateProduct=async(req,res)=>{
    const {id}=req.params;
    const product=await Products.findById(id);
    return res.render("admin/admin.ejs",{
        data:{pageAdmin:"editProduct",title:"đây là trang cập nhật sản phẩm",product}
    })
}

// category
const getcategoryPage=(req,res)=>{
    res.render("admin/admin.ejs",{
        data:{pageAdmin:"addCategory",title:"đây là trang cate"}
    })
}
const getCategory=async(req,res) =>{
    const category=await Categorys.find({})
    res.render("admin/admin.ejs",{
        data:{pageAdmin:"getCategory",title:"đây là trang cate",category}
    })
}
const getUpdatecategory=async(req,res)=>{
    const {id}=req.params;
    const category=await Categorys.findById(id);
    return res.render("admin/admin.ejs",{
        data:{pageAdmin:"editcategory",title:"đây là trang cập nhật sản phẩm",category}
    })
}
const getProductDetail=async(req,res)=>{
    const {id}=req.params;
    const products=await Products.findById(id);
    return res.render("index.ejs",{
        data:{page:"productDetail",title:"đây là trang cập nhật sản phẩm",products}
    })
}
module.exports={
    getSignupPage,
    getSigninPage,
    getHomePage,
    getProductPage,
    getProductApi,
    getUpdateProduct,
    getcategoryPage,
    getCategory,
    getproductsp,
    getUpdatecategory,
    getproductNew,
    getProductDetail,
    getUserApi


}