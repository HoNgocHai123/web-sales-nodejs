const express=require('express');
const mongoose = require("mongoose");
const app=express();
const http =require('http');
const initWebRoute = require('./routers/userRouter');
const configViewEngine=require("./configs/viewEngine");
const productRouter=require("./routers/productRouter");
const categoryRouter = require("./routers/categoryRouter");
const session = require('express-session')
require("dotenv").config();
const port =process.env.PORT
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(express.static(__dirname+'/public'));
app.use(session({
  secret: 'keyboard cat',
  resave: false,
  saveUninitialized: true
}));
const getUser = async (req, res, next) => {
  res.locals.user = req.session.user;
  console.log(res.locals);
  next();
};
app.use(getUser);
const server = http.createServer(app);
mongoose.set("strictQuery", true);
const conectDB = async () => {
  try {
    await mongoose.connect(process.env.DB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      dbName: "nodejs",
    });
  } catch (error) {
    console.log("mongoconet faild : ", error);
  }
};
conectDB();

mongoose.connection.once("open", () => {
  console.log("db kết nối thành công");
});
configViewEngine(app);
initWebRoute(app);
productRouter(app);
categoryRouter(app)
server.listen(port, () => {
    console.log(`listening on port ${port}`);
  });
