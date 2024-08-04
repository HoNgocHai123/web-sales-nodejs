const express = require('express');
const router = express.Router();
const homePage=require("../controllers/homePageController");
const userPage=require("../controllers/userController")
const initWebRoute=(app)=>{
// thêm post,sửa put,xóa delete
router.get('/signup',homePage.getSignupPage)
router.post("/adduser",userPage.addUser)
router.get("/signin",homePage.getSigninPage)
router.post("/login",userPage.login)
router.get("/logout",userPage.logout)
router.get("/",homePage.getHomePage);
router.get("/productsp",homePage.getproductsp)
router.get('/getUser',homePage.getUserApi);

    return app.use("/",router);
}

module.exports=initWebRoute;