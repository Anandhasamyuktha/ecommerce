const ProductModel = require('../models/productModel');
//Get Products API - /api/v1/products
exports.getProducts= async (req,res,next)=>
{
    const query=req.query.keyword?{name:{
        $regex:req.query.keyword,
        $options:'i'
    }}:{}
   const products= await ProductModel.find(query);
   res.json({
    success:true,
    products
})
   
   
}


//Get Products API - /api/v1/products/:id

exports.getSingleProduct=async(req,res,next)=>
{


    
    try{
    console.log(req.params.id,'ID');
    const product=await ProductModel.findById(req.params.id)

    res.json({
        success:true,
        product
    })
}
catch(err)
{
    res.status(404).json({
        success:false,
        message: err.message
    })
}
}