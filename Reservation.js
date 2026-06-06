const mongoose = require("mongoose");

const ReservationSchema = new mongoose.Schema({

    name:{
        type:String,
        required:true
    },

    email:{
        type:String,
        required:true
    },

    phone:{
        type:String,
        required:true
    },

    date:{
        type:String,
        required:true
    },

    time:{
        type:String,
        required:true
    },

    guests:{
        type:Number,
        required:true
    },

    request:String

},{
    timestamps:true
});

module.exports =
mongoose.model(
    "Reservation",
    ReservationSchema
);