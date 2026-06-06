const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const bcrypt = require("bcryptjs");

const User = require("./models/User");
const Contact = require("./models/Contact");
const Reservation = require("./models/Reservation");
const Order = require("./models/Order");

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.static("public"));

mongoose.connect(
"YOUR_MONGODB_CONNECTION_STRING"
)
.then(()=>{

    console.log("MongoDB Connected");

})
.catch((err)=>{

    console.log(err);

});


// SIGNUP

app.post("/signup", async(req,res)=>{

try{

const {name,email,password}=req.body;

const existingUser =
await User.findOne({email});

if(existingUser){

return res.json({
message:"User already exists"
});

}

const hashedPassword =
await bcrypt.hash(password,10);

const user = new User({

name,
email,
password:hashedPassword

});

await user.save();

res.json({
message:"Account Created Successfully"
});

}

catch(error){

res.status(500).json({
message:"Error"
});

}

});


// LOGIN

app.post("/login", async(req,res)=>{

try{

const {email,password}=req.body;

const user =
await User.findOne({email});

if(!user){

return res.json({
message:"User Not Found"
});

}

const valid =
await bcrypt.compare(
password,
user.password
);

if(!valid){

return res.json({
message:"Invalid Password"
});

}

res.json({
message:"Login Successful"
});

}

catch(error){

res.status(500).json({
message:"Error"
});

}

});


// CONTACT

app.post("/contact", async(req,res)=>{

try{

const contact =
new Contact(req.body);

await contact.save();

res.json({
message:"Message Sent"
});

}

catch(error){

res.status(500).json({
message:"Error"
});

}

});


// RESERVATION

app.post("/reservation", async(req,res)=>{

try{

const reservation =
new Reservation(req.body);

await reservation.save();

res.json({
message:"Table Reserved Successfully"
});

}

catch(error){

res.status(500).json({
message:"Error"
});

}

});


// ORDER

app.post("/order", async(req,res)=>{

try{

const order =
new Order(req.body);

await order.save();

res.json({
message:"Order Placed Successfully"
});

}

catch(error){

res.status(500).json({
message:"Error"
});

}

});


// ADMIN APIs

app.get("/users", async(req,res)=>{

const users =
await User.find();

res.json(users);

});

app.get("/contacts", async(req,res)=>{

const contacts =
await Contact.find();

res.json(contacts);

});

app.get("/reservations", async(req,res)=>{

const reservations =
await Reservation.find();

res.json(reservations);

});

app.get("/orders", async(req,res)=>{

const orders =
await Order.find();

res.json(orders);

});


app.listen(5000,()=>{

console.log(
"Server Running On Port 5000"
);

});