const mongoose= require("mongoose");
const Schema = mongoose.Schema;

const listingSchema= new Schema({
   title: {
      type: String,
      rquired: true,
   },
   description: String,
   image: {
      type: String,
      default: "C:\Users\heday\Desktop\Hijab\web mega project\images",
      set: (v) => v=== "" ? "C:\Users\heday\Desktop\Hijab\web mega project\images" : v,
   },
   price: Number,
   location: String,
   country: String,
});

const listing = mongoose.model("listing", listingSchema);
module.exports = listing;