function buyItem(item){

alert(item + " Added To Cart!");

}

document
.getElementById("bookingForm")
.addEventListener("submit",function(e){

e.preventDefault();

alert("Table Reserved Successfully");

});

document
.getElementById("contactForm")
.addEventListener("submit",function(e){

e.preventDefault();

alert("Message Sent Successfully");

});