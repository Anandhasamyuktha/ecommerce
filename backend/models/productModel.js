const mongoose=require('mongoose');
const productSchema=new mongoose.Schema(
    {
        name:String,
        price:String,
        description:String,
        ratings:String,
        images:[
            {
                images:String
            }
        ],
        category:String,
        seller:String,
        stock:String,
        numofReviews:String,
        createdAt:Date

    }
);

const productModel=mongoose.model('Product',productSchema) //the name of the model should be only in singular

module.exports=productModel;