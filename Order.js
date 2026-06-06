const mongoose = require("mongoose");

const OrderSchema = new mongoose.Schema({

    customerName:{
        type:String,
        required:true
    },

    item:{
        type:String,
        required:true
    },

    price:{
        type:Number,
        required:true
    },

    quantity:{
        type:Number,
        default:1
    },

    status:{
        type:String,
        default:"Pending"
    }

},{
    timestamps:true
});

module.exports =
mongoose.model(
    "Order",
    OrderSchema
);