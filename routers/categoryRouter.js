const express = require('express');
const router = express.Router();
const getcategory=require('../controllers/homePageController');
const caegoryAdd=require('../controllers/category-user')

const categoryRouter=(app)=>{
// thêm post,sửa put,xóa delete
router.get('/category',getcategory.getcategoryPage);
router.post('/addcategory',caegoryAdd.addcategory);
router.get('/getCategory',getcategory.getCategory)
router.post("/deletecategory",caegoryAdd.deletecategory);
router.get("/geteditcategory/:id",getcategory.getUpdatecategory);
router.post('/update-category',caegoryAdd.updatecategory)
    return app.use("/",router);
}

module.exports=categoryRouter;