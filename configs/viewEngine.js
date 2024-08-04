const configViewEngine=(app)=>{
    app.set("view engine","ejs");
    app.set("views", "views")
    app.set("views_admin", "views/admin");
}
module.exports=configViewEngine;