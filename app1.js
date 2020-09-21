const express = require("express");
const bodyParser = require("body-parser");
const methodOverride = require("method-override");
const expressSanitizer = require("express-sanitizer");
const app = express();
const mongoose = require("mongoose");
mongoose.connect("mongodb://localhost/Blogger", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }));
app.set("view engine", "ejs");
app.use(expressSanitizer());
app.use(methodOverride("_method"));

//Schema Setup
var blogSchema = new mongoose.Schema({
  title: String,
  image: String,
  body: String,
  category: String,
  created: { type: Date, default: Date.now },
});
var Blog = mongoose.model("Blog", blogSchema);

//Home Route
app.get("/", function (req, res) {
  res.render("landing");
});

//Index Route
app.get("/categories", function (req, res) {
  res.render("categories");
});

app.get("/categories/technical", function (req, res) {
  res.render("technical");
});

app.get("/categories/other", function (req, res) {
  res.render("other");
});
app.get("/contact", function (req, res) {
  res.render("contact");
});

//category wise routes:
//Technical routes
//Algorithm
//REST Routes
//{{{{{{{{{{{{
app.get("/categories/technical/algorithms", function (req, res)
{
  Blog.find({'category':"Algorithm"}, function (err, blogs)
  {
    if (err)
    {
      console.log(err);
    } else
    {
      res.render("technical/algorithms/algo", { blogs: blogs });
    }
  });
});
app.get("/categories/technical/algorithms/new", function (req, res)
{
  res.render("technical/algorithms/newalgo");
});
//create Algorithm
app.post("/categories/technical/algorithms", function (req, res)
{
  req.body.blog.body = req.sanitize(req.body.blog.body);
  console.log("===============");
  console.log(req.body);
  Blog.create(req.body.blog, function (err, newBlog)
  {
    if (err)
    {
      res.render("technical/algorithms/newalgo");
    }
     else
     {
      res.redirect("/categories/technical/algorithms");
     }
  });
});
//show route Algorithm
app.get("/categories/technical/algorithms/:id", function (req, res)
{
  Blog.findById(req.params.id, function (err, foundBlog)
  {
    if (err)
    {
      res.redirect("/categories/technical/algorithms");
    }
    else
    {
      res.render("technical/algorithms/showalgo", { blog: foundBlog });
    }
  });
});
//Edit Route Algorithm
app.get("/categories/technical/algorithms/:id/edit", function (req, res)
{
  Blog.findById(req.params.id, function (err, foundBlog) {
    if (err) {
      res.redirect("/categories/technical/algorithms");
    } else {
      res.render("technical/algorithms/editalgo", { blog: foundBlog });
    }
  });
});
//Update route Algorithm
app.put("/categories/technical/algorithms/:id", function (req, res)
 {
  req.body.blog.body = req.sanitize(req.body.blog.body);
  Blog.findByIdAndUpdate(req.params.id, req.body.blog, function (err,updatedBlog)
  {
    if (err) {
      res.redirect("/categories/technical/algorithms");
    } else {
      res.redirect("/categories/technical/algorithms/" + req.params.id);
    }
  });
});

// Delete Blog
app.delete("/categories/technical/algorithms/:id",function(req,res){
  Blog.findByIdAndRemove(req.params.id,function(err){
    if(err)
    {
      res.redirect("/categories/technical/algorithms");
    }
    else
    {
      res.redirect("/categories/technical/algorithms");
    }
  });
});
//}}}}}}}}}}}}

//Architecture
//REST Routes
//{{{{{{{{{{{{
app.get("/categories/technical/architecture", function (req, res)
{
  Blog.find({'category':"Architecture"}, function (err, blogs)
  {
    if (err)
    {
      console.log(err);
    } else
    {
      res.render("technical/architecture/arch", { blogs: blogs });
    }
  });
});
app.get("/categories/technical/architecture/new", function (req, res)
{
  res.render("technical/architecture/newarch");
});
//create Architecture
app.post("/categories/technical/architecture", function (req, res)
{
  req.body.blog.body = req.sanitize(req.body.blog.body);
  console.log("===============");
  console.log(req.body);
  Blog.create(req.body.blog, function (err, newBlog)
  {
    if (err)
    {
      res.render("technical/architecture/newarch");
    }
     else
     {
      res.redirect("/categories/technical/architecture");
     }
  });
});
//show route Architecture
app.get("/categories/technical/architecture/:id", function (req, res)
{
  Blog.findById(req.params.id, function (err, foundBlog)
  {
    if (err)
    {
      res.redirect("/categories/technical/architecture");
    }
    else
    {
      res.render("technical/architecture/showarch", { blog: foundBlog });
    }
  });
});
//Edit Route Architecture
app.get("/categories/technical/architecture/:id/edit", function (req, res)
{
  Blog.findById(req.params.id, function (err, foundBlog) {
    if (err) {
      res.redirect("/categories/technical/architecture");
    } else {
      res.render("technical/architecture/editarch", { blog: foundBlog });
    }
  });
});
//Update route Architecture
app.put("/categories/technical/architecture/:id", function (req, res)
 {
  req.body.blog.body = req.sanitize(req.body.blog.body);
  Blog.findByIdAndUpdate(req.params.id, req.body.blog, function (err,updatedBlog)
  {
    if (err) {
      res.redirect("/categories/technical/architecture");
    } else {
      res.redirect("/categories/technical/architecture/" + req.params.id);
    }
  });
});

// Delete Blog
app.delete("/categories/technical/architecture/:id",function(req,res){
  Blog.findByIdAndRemove(req.params.id,function(err){
    if(err)
    {
      res.redirect("/categories/technical/architecture");
    }
    else
    {
      res.redirect("/categories/technical/architecture");
    }
  });
});
//}}}}}}}}}}}}

//DBMS
//REST Routes
//{{{{{{{{{{{{
app.get("/categories/technical/dbms", function (req, res)
{
  Blog.find({'category':"Dbms"}, function (err, blogs)
  {
    if (err)
    {
      console.log(err);
    } else
    {
      res.render("technical/DBMS/dbms", { blogs: blogs });
    }
  });
});
app.get("/categories/technical/dbms/new", function (req, res)
{
  res.render("technical/DBMS/newdbms");
});
//create Algorithm
app.post("/categories/technical/dbms", function (req, res)
{
  req.body.blog.body = req.sanitize(req.body.blog.body);
  console.log("===============");
  console.log(req.body);
  Blog.create(req.body.blog, function (err, newBlog)
  {
    if (err)
    {
      res.render("technical/DBMS/newdbms");
    }
     else
     {
      res.redirect("/categories/technical/dbms");
     }
  });
});
//show route Algorithm
app.get("/categories/technical/dbms/:id", function (req, res)
{
  Blog.findById(req.params.id, function (err, foundBlog)
  {
    if (err)
    {
      res.redirect("/categories/technical/dbms");
    }
    else
    {
      res.render("technical/DBMS/showdbms", { blog: foundBlog });
    }
  });
});
//Edit Route Algorithm
app.get("/categories/technical/dbms/:id/edit", function (req, res)
{
  Blog.findById(req.params.id, function (err, foundBlog) {
    if (err) {
      res.redirect("/categories/technical/dbms");
    } else {
      res.render("technical/DBMS/editdbms", { blog: foundBlog });
    }
  });
});
//Update route Algorithm
app.put("/categories/technical/dbms/:id", function (req, res)
 {
  req.body.blog.body = req.sanitize(req.body.blog.body);
  Blog.findByIdAndUpdate(req.params.id, req.body.blog, function (err,updatedBlog)
  {
    if (err) {
      res.redirect("/categories/technical/dbms");
    } else {
      res.redirect("/categories/technical/dbms/" + req.params.id);
    }
  });
});

// Delete Blog
app.delete("/categories/technical/dbms/:id",function(req,res){
  Blog.findByIdAndRemove(req.params.id,function(err){
    if(err)
    {
      res.redirect("/categories/technical/dbms");
    }
    else
    {
      res.redirect("/categories/technical/dbms");
    }
  });
});
//}}}}}}}}}}}}

//Machine Learning
//REST Routes
//{{{{{{{{{{{{
app.get("/categories/technical/ml", function (req, res)
{
  Blog.find({'category':"Machine Learning"}, function (err, blogs)
  {
    if (err)
    {
      console.log(err);
    } else
    {
      res.render("technical/machine-learning/ml", { blogs: blogs });
    }
  });
});
app.get("/categories/technical/ml/new", function (req, res)
{
  res.render("technical/machine-learning/mlnew");
});
//create Blog
app.post("/categories/technical/ml", function (req, res)
{
  req.body.blog.body = req.sanitize(req.body.blog.body);
  Blog.create(req.body.blog, function (err, newBlog)
  {
    if (err)
    {
      res.render("technical/machine-learning/mlnew");
    }
     else
     {
      res.redirect("/categories/technical/ml");
     }
  });
});
//show route
app.get("/categories/technical/ml/:id", function (req, res)
{
  Blog.findById(req.params.id, function (err, foundBlog)
  {
    if (err)
    {
      res.redirect("/categories/technical/ml");
    }
    else
    {
      res.render("technical/machine-learning/mlshow", { blog: foundBlog });
    }
  });
});
//Edit Route
app.get("/categories/technical/ml/:id/edit", function (req, res)
{
  Blog.findById(req.params.id, function (err, foundBlog) {
    if (err) {
      res.redirect("/categories/technical/ml");
    } else {
      res.render("technical/machine-learning/mledit", { blog: foundBlog });
    }
  });
});
//Update route
app.put("/categories/technical/ml/:id", function (req, res)
 {
  req.body.blog.body = req.sanitize(req.body.blog.body);
  Blog.findByIdAndUpdate(req.params.id, req.body.blog, function (err,updatedBlog)
  {
    if (err) {
      res.redirect("/categories/technical/ml");
    } else {
      res.redirect("/categories/technical/ml/" + req.params.id);
    }
  });
});

// Delete Blog
app.delete("/categories/technical/ml/:id",function(req,res){
  Blog.findByIdAndRemove(req.params.id,function(err){
    if(err)
    {
      res.redirect("/categories/technical/ml");
    }
    else
    {
      res.redirect("/categories/technical/ml");
    }
  });
});
//}}}}}}}}}}}}

//Computer Networking
//REST Routes
//{{{{{{{{{{{{
app.get("/categories/technical/net", function (req, res)
{
  Blog.find({'category':"Computer Networking"}, function (err, blogs)
  {
    if (err)
    {
      console.log(err);
    } else
    {
      res.render("technical/networking/net", { blogs: blogs });
    }
  });
});
app.get("/categories/technical/net/new", function (req, res)
{
  res.render("technical/networking/newnet");
});
//create Blog
app.post("/categories/technical/net", function (req, res)
{
  req.body.blog.body = req.sanitize(req.body.blog.body);
  Blog.create(req.body.blog, function (err, newBlog)
  {
    if (err)
    {
      res.render("technical/networking/newnet");
    }
     else
     {
      res.redirect("/categories/technical/net");
     }
  });
});
//show route
app.get("/categories/technical/net/:id", function (req, res)
{
  Blog.findById(req.params.id, function (err, foundBlog)
  {
    if (err)
    {
      res.redirect("/categories/technical/net");
    }
    else
    {
      res.render("technical/networking/shownet", { blog: foundBlog });
    }
  });
});
//Edit Route
app.get("/categories/technical/net/:id/edit", function (req, res)
{
  Blog.findById(req.params.id, function (err, foundBlog) {
    if (err) {
      res.redirect("/categories/technical/net");
    } else {
      res.render("technical/networking/editnet", { blog: foundBlog });
    }
  });
});
//Update route
app.put("/categories/technical/net/:id", function (req, res)
 {
  req.body.blog.body = req.sanitize(req.body.blog.body);
  Blog.findByIdAndUpdate(req.params.id, req.body.blog, function (err,updatedBlog)
  {
    if (err) {
      res.redirect("/categories/technical/net");
    } else {
      res.redirect("/categories/technical/net/" + req.params.id);
    }
  });
});

// Delete Blog
app.delete("/categories/technical/net/:id",function(req,res){
  Blog.findByIdAndRemove(req.params.id,function(err){
    if(err)
    {
      res.redirect("/categories/technical/net");
    }
    else
    {
      res.redirect("/categories/technical/net");
    }
  });
});
//}}}}}}}}}}}}

//Software Engineering
//REST Routes
//{{{{{{{{{{{{
app.get("/categories/technical/soft", function (req, res)
{
  Blog.find({'category':"Software Engineering"}, function (err, blogs)
  {
    if (err)
    {
      console.log(err);
    } else
    {
      res.render("technical/software-engineering/soft", { blogs: blogs });
    }
  });
});
app.get("/categories/technical/soft/new", function (req, res)
{
  res.render("technical/software-engineering/newsoft");
});
//create Blog
app.post("/categories/technical/soft", function (req, res)
{
  req.body.blog.body = req.sanitize(req.body.blog.body);
  Blog.create(req.body.blog, function (err, newBlog)
  {
    if (err)
    {
      res.render("technical/software-engineering/newsoft");
    }
     else
     {
      res.redirect("/categories/technical/soft");
     }
  });
});
//show route
app.get("/categories/technical/soft/:id", function (req, res)
{
  Blog.findById(req.params.id, function (err, foundBlog)
  {
    if (err)
    {
      res.redirect("/categories/technical/soft");
    }
    else
    {
      res.render("technical/software-engineering/showsoft", { blog: foundBlog });
    }
  });
});
//Edit Route
app.get("/categories/technical/soft/:id/edit", function (req, res)
{
  Blog.findById(req.params.id, function (err, foundBlog) {
    if (err) {
      res.redirect("/categories/technical/soft");
    } else {
      res.render("technical/software-engineering/editsoft", { blog: foundBlog });
    }
  });
});
//Update route
app.put("/categories/technical/soft/:id", function (req, res)
 {
  req.body.blog.body = req.sanitize(req.body.blog.body);
  Blog.findByIdAndUpdate(req.params.id, req.body.blog, function (err,updatedBlog)
  {
    if (err) {
      res.redirect("/categories/technical/soft");
    } else {
      res.redirect("/categories/technical/soft/" + req.params.id);
    }
  });
});

// Delete Blog
app.delete("/categories/technical/soft/:id",function(req,res){
  Blog.findByIdAndRemove(req.params.id,function(err){
    if(err)
    {
      res.redirect("/categories/technical/soft");
    }
    else
    {
      res.redirect("/categories/technical/soft");
    }
  });
});
//}}}}}}}}}}}}

// ::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::

//Other Blogs:::::::::::::
//Travel
//REST Routes
//{{{{{{{{{{{{
app.get("/categories/other/travel", function (req, res)
{
  Blog.find({'category':"Travel"}, function (err, blogs)
  {
    if (err)
    {
      console.log(err);
    } else
    {
      res.render("other/travel/travel", { blogs: blogs });
    }
  });
});
app.get("/categories/other/travel/new", function (req, res)
{
  res.render("other/travel/newtravel");
});
//create Blog
app.post("/categories/other/travel", function (req, res)
{
  req.body.blog.body = req.sanitize(req.body.blog.body);
  Blog.create(req.body.blog, function (err, newBlog)
  {
    if (err)
    {
      res.render("other/travel/newtravel");
    }
     else
     {
      res.redirect("/categories/other/travel");
     }
  });
});
//show route
app.get("/categories/other/travel/:id", function (req, res)
{
  Blog.findById(req.params.id, function (err, foundBlog)
  {
    if (err)
    {
      res.redirect("/categories/other/travel");
    }
    else
    {
      res.render("other/travel/showtravel", { blog: foundBlog });
    }
  });
});
//Edit Route
app.get("/categories/other/travel/:id/edit", function (req, res)
{
  Blog.findById(req.params.id, function (err, foundBlog) {
    if (err) {
      res.redirect("/categories/other/travel");
    } else {
      res.render("other/travel/edittravel", { blog: foundBlog });
    }
  });
});
//Update route
app.put("/categories/other/travel/:id", function (req, res)
 {
  req.body.blog.body = req.sanitize(req.body.blog.body);
  Blog.findByIdAndUpdate(req.params.id, req.body.blog, function (err,updatedBlog)
  {
    if (err) {
      res.redirect("/categories/other/travel");
    } else {
      res.redirect("/categories/other/travel/" + req.params.id);
    }
  });
});

// Delete Blog
app.delete("/categories/other/travel/:id",function(req,res){
  Blog.findByIdAndRemove(req.params.id,function(err){
    if(err)
    {
      res.redirect("/categories/other/travel");
    }
    else
    {
      res.redirect("/categories/other/travel");
    }
  });
});
//}}}}}}}}}}}}

//Food
//REST Routes
//{{{{{{{{{{{{
app.get("/categories/other/food", function (req, res)
{
  Blog.find({'category':"Food"}, function (err, blogs)
  {
    if (err)
    {
      console.log(err);
    } else
    {
      res.render("other/food/food", { blogs: blogs });
    }
  });
});
app.get("/categories/other/food/new", function (req, res)
{
  res.render("other/food/newfood");
});
//create Blog
app.post("/categories/other/food", function (req, res)
{
  req.body.blog.body = req.sanitize(req.body.blog.body);
  Blog.create(req.body.blog, function (err, newBlog)
  {
    if (err)
    {
      res.render("other/food/newfood");
    }
     else
     {
      res.redirect("/categories/other/food");
     }
  });
});
//show route
app.get("/categories/other/food/:id", function (req, res)
{
  Blog.findById(req.params.id, function (err, foundBlog)
  {
    if (err)
    {
      res.redirect("/categories/other/food");
    }
    else
    {
      res.render("other/food/showfood", { blog: foundBlog });
    }
  });
});
//Edit Route
app.get("/categories/other/food/:id/edit", function (req, res)
{
  Blog.findById(req.params.id, function (err, foundBlog) {
    if (err) {
      res.redirect("/categories/other/food");
    } else {
      res.render("other/food/editfood", { blog: foundBlog });
    }
  });
});
//Update route
app.put("/categories/other/food/:id", function (req, res)
 {
  req.body.blog.body = req.sanitize(req.body.blog.body);
  Blog.findByIdAndUpdate(req.params.id, req.body.blog, function (err,updatedBlog)
  {
    if (err) {
      res.redirect("/categories/other/food");
    } else {
      res.redirect("/categories/other/food/" + req.params.id);
    }
  });
});

// Delete Blog
app.delete("/categories/other/food/:id",function(req,res){
  Blog.findByIdAndRemove(req.params.id,function(err){
    if(err)
    {
      res.redirect("/categories/other/food");
    }
    else
    {
      res.redirect("/categories/other/food");
    }
  });
});
//}}}}}}}}}}}}

//Science
//REST Routes
//{{{{{{{{{{{{
app.get("/categories/other/science", function (req, res)
{
  Blog.find({'category':"Science"}, function (err, blogs)
  {
    if (err)
    {
      console.log(err);
    } else
    {
      res.render("other/science/science", { blogs: blogs });
    }
  });
});
app.get("/categories/other/science/new", function (req, res)
{
  res.render("other/science/newsci");
});
//create Blog
app.post("/categories/other/science", function (req, res)
{
  req.body.blog.body = req.sanitize(req.body.blog.body);
  Blog.create(req.body.blog, function (err, newBlog)
  {
    if (err)
    {
      res.render("other/science/newsci");
    }
     else
     {
      res.redirect("/categories/other/science");
     }
  });
});
//show route
app.get("/categories/other/science/:id", function (req, res)
{
  Blog.findById(req.params.id, function (err, foundBlog)
  {
    if (err)
    {
      res.redirect("/categories/other/science");
    }
    else
    {
      res.render("other/science/showsci", { blog: foundBlog });
    }
  });
});
//Edit Route
app.get("/categories/other/science/:id/edit", function (req, res)
{
  Blog.findById(req.params.id, function (err, foundBlog) {
    if (err) {
      res.redirect("/categories/other/science");
    } else {
      res.render("other/science/editsci", { blog: foundBlog });
    }
  });
});
//Update route
app.put("/categories/other/science/:id", function (req, res)
 {
  req.body.blog.body = req.sanitize(req.body.blog.body);
  Blog.findByIdAndUpdate(req.params.id, req.body.blog, function (err,updatedBlog)
  {
    if (err) {
      res.redirect("/categories/other/science");
    } else {
      res.redirect("/categories/other/science/" + req.params.id);
    }
  });
});

// Delete Blog
app.delete("/categories/other/science/:id",function(req,res){
  Blog.findByIdAndRemove(req.params.id,function(err){
    if(err)
    {
      res.redirect("/categories/other/science");
    }
    else
    {
      res.redirect("/categories/other/science");
    }
  });
});
//}}}}}}}}}}}}

//Medical Science
//REST Routes
//{{{{{{{{{{{{
app.get("/categories/other/medical", function (req, res)
{
  Blog.find({'category':"Medical Science"}, function (err, blogs)
  {
    if (err)
    {
      console.log(err);
    } else
    {
      res.render("other/medical/medical", { blogs: blogs });
    }
  });
});
app.get("/categories/other/medical/new", function (req, res)
{
  res.render("other/medical/newmed");
});
//create Blog
app.post("/categories/other/medical", function (req, res)
{
  req.body.blog.body = req.sanitize(req.body.blog.body);
  Blog.create(req.body.blog, function (err, newBlog)
  {
    if (err)
    {
      res.render("other/medical/newmed");
    }
     else
     {
      res.redirect("/categories/other/medical");
     }
  });
});
//show route
app.get("/categories/other/medical/:id", function (req, res)
{
  Blog.findById(req.params.id, function (err, foundBlog)
  {
    if (err)
    {
      res.redirect("/categories/other/medical");
    }
    else
    {
      res.render("other/medical/showmed", { blog: foundBlog });
    }
  });
});
//Edit Route
app.get("/categories/other/medical/:id/edit", function (req, res)
{
  Blog.findById(req.params.id, function (err, foundBlog) {
    if (err) {
      res.redirect("/categories/other/medical");
    } else {
      res.render("other/medical/editmed", { blog: foundBlog });
    }
  });
});
//Update route
app.put("/categories/other/medical/:id", function (req, res)
 {
  req.body.blog.body = req.sanitize(req.body.blog.body);
  Blog.findByIdAndUpdate(req.params.id, req.body.blog, function (err,updatedBlog)
  {
    if (err) {
      res.redirect("/categories/other/medical");
    } else {
      res.redirect("/categories/other/medical/" + req.params.id);
    }
  });
});

// Delete Blog
app.delete("/categories/other/medical/:id",function(req,res){
  Blog.findByIdAndRemove(req.params.id,function(err){
    if(err)
    {
      res.redirect("/categories/other/medical");
    }
    else
    {
      res.redirect("/categories/other/medical");
    }
  });
});
//}}}}}}}}}}}}

//Music
//REST Routes
//{{{{{{{{{{{{
app.get("/categories/other/music", function (req, res)
{
  Blog.find({'category':"Music"}, function (err, blogs)
  {
    if (err)
    {
      console.log(err);
    } else
    {
      res.render("other/music/music", { blogs: blogs });
    }
  });
});
app.get("/categories/other/music/new", function (req, res)
{
  res.render("other/music/newmusic");
});
//create Blog
app.post("/categories/other/music", function (req, res)
{
  req.body.blog.body = req.sanitize(req.body.blog.body);
  Blog.create(req.body.blog, function (err, newBlog)
  {
    if (err)
    {
      res.render("other/music/newmusic");
    }
     else
     {
      res.redirect("/categories/other/music");
     }
  });
});
//show route
app.get("/categories/other/music/:id", function (req, res)
{
  Blog.findById(req.params.id, function (err, foundBlog)
  {
    if (err)
    {
      res.redirect("/categories/other/music");
    }
    else
    {
      res.render("other/music/showmusic", { blog: foundBlog });
    }
  });
});
//Edit Route
app.get("/categories/other/music/:id/edit", function (req, res)
{
  Blog.findById(req.params.id, function (err, foundBlog) {
    if (err) {
      res.redirect("/categories/other/music");
    } else {
      res.render("other/music/editmusic", { blog: foundBlog });
    }
  });
});
//Update route
app.put("/categories/other/music/:id", function (req, res)
 {
  req.body.blog.body = req.sanitize(req.body.blog.body);
  Blog.findByIdAndUpdate(req.params.id, req.body.blog, function (err,updatedBlog)
  {
    if (err) {
      res.redirect("/categories/other/music");
    } else {
      res.redirect("/categories/other/music/" + req.params.id);
    }
  });
});

// Delete Blog
app.delete("/categories/other/music/:id",function(req,res){
  Blog.findByIdAndRemove(req.params.id,function(err){
    if(err)
    {
      res.redirect("/categories/other/music");
    }
    else
    {
      res.redirect("/categories/other/music");
    }
  });
});
//}}}}}}}}}}}}


app.listen(3000, function () {
  console.log("server running on port 3000");
});
