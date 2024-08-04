const express = require('express');
const router = express.Router();
const getProduct=require('../controllers/homePageController');
const productAdd =require('../controllers/products-user');
const fileUploader = require('../middleware/cloudinary');
const productRouter=(app)=>{
// thêm post,sửa put,xóa delete
router.get("/product",getProduct.getProductPage);
router.post("/addproduct",fileUploader.single("image"),productAdd.addProduct);
router.get("/getproduct",getProduct.getProductApi);
router.post("/deleteproduct",productAdd.deleteProduct);
router.get("/geteditproduct/:id",getProduct.getUpdateProduct);
router.post('/update-product',fileUploader.single("image"),productAdd.updateProduct);
router.get('/getnewproduct',getProduct.getproductNew);
router.get('/getproductDetail/:id',getProduct.getProductDetail);
router.get('/search',productAdd.searchProduct);


    return app.use("/",router);
}   

module.exports=productRouter;