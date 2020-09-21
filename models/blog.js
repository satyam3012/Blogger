const mongoose=require("mongoose");
var blogSchema = new mongoose.Schema({
  title: String,
  image: String,
  body: String,
  category: String,
  created: { type: Date, default: Date.now },
  comment:[{
    type:mongoose.Schema.Types.ObjectId,
    ref:"Comment"
  }]
});
module.exports=mongoose.model("Blog", blogSchema);
