const express= require("express");
const app= express();
const mongoose = require("mongoose");
const listing= require("./models/listing.js");
const path = require("path");

const MONGO_URL ="mongodb://127.0.0.1:27017/wanderlust";

main().then(() => {
    console.log("connected to DB");
}).catch((err) => {
    console.log(err);
});

async function main(){
    await mongoose.connect(MONGO_URL);
}

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
app.use(express.urlencoded({extended: true}));


// app.get("/testListing", async (req,res) => {
//     let sampleListing = new listing({
//         title: "My new villa",
//         description: "By the beech",
//         price: 1200,
//         location: "Calangute, Goa",
//         country: "India",
//     });
//     await sampleListing.save();
//     console.log("sample was saved");
//     res.send("sucessful testing");
// });

app.get("/", (req,res) =>{
    res.send("Hi, I am root");
});

// index route
app.get("/listings", async (req,res) => {
    const allListings= await listing.find({});
    res.render("listings/index.ejs", {allListings});
});

// New route
app.get("/listtings/new", (req,res) =>{
    res.render("listings/new.ejs");
});


// show route
app.get("/listings/:id", async (req,res) => {
    let {id} =req.params;
    const h_listing= await listing.findById(id);
    res.render("listings/show.ejs", {h_listing});
});


app.listen(8080, ()=>{
    console.log("port is listening to port 8080");
});