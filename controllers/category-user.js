const Categorys = require("../models/category");

const addcategory = async (req, res) => {
    const { username } = req.body;
    try {
        const categoris = new Categorys({
            username           
        });
        await categoris.save();
      console.log(categoris);
        res.redirect("/category")
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

const deletecategory = async (req, res) => {
    const { id } = req.body;
    try {
        await Categorys.findByIdAndDelete(id);
        res.redirect("/getCategory");
    } catch (error) {
        console.log(error);
        res.redirect("/getCategory");
    }
}
const updatecategory=async(req,res)=>{
    const {id,username} = req.body;
    try {
        await Categorys.findByIdAndUpdate(id,{
            username,
            
        })
        return res.redirect('getcategory');
    } catch (error) {
        
    }
}
module.exports={
    addcategory,
    deletecategory,
    updatecategory
}