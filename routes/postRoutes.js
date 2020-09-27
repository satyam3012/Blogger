const express=require("express");
const router=express.Router();
const Blog=require("../models/blog");
router.get("/", function (req, res) {
    // res.render("landing",{currentUser:req.user});
    Blog.find({}, function (err, blogs)
    {
      if (err)
      {
        console.log(err);
      } else
      {
        res.render("landing", { blogs: blogs,currentUser:req.user });
      }
    });
  });
  //show route Algorithm
  router.get("/:id", function (req, res)
  {
    Blog.findById(req.params.id).populate("comment").exec(function (err, foundBlog)
    {
      if (err)
      {
        res.redirect("/");
      }
      else
      {
        res.render("viewlan", { blog: foundBlog });
      }
    });
  });
  router.delete("/:id",isLoggedIn,function(req,res){
    Blog.findByIdAndRemove(req.params.id,function(err){
      if(err)
      {
        res.redirect("/");
      }
      else
      {
        res.redirect("/");
      }
    });
  });
//category wise routes:
//Technical routes
//Algorithm
//REST Routes
//{{{{{{{{{{{{
    router.get("/categories/technical/algorithms", function (req, res)
    {
      Blog.find({'category':"algorithms"}, function (err, blogs)
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
    router.get("/categories/technical/algorithms/new",isLoggedIn,function (req, res)
    {
      res.render("technical/algorithms/newalgo");
    });
    //create Algorithm
    router.post("/categories/technical/algorithms", function (req, res)
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
    router.get("/categories/technical/algorithms/:id", function (req, res)
    {
      Blog.findById(req.params.id).populate("comment").exec(function (err, foundBlog)
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
    router.get("/categories/technical/algorithms/:id/edit",isLoggedIn,function (req, res)
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
    router.put("/categories/technical/algorithms/:id", function (req, res)
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
    router.delete("/categories/technical/algorithms/:id",isLoggedIn,function(req,res){
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

    router.get("/categories/technical/architecture", function (req, res)
    {
      Blog.find({'category':"architecture"}, function (err, blogs)
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
    router.get("/categories/technical/architecture/new",isLoggedIn,function (req, res)
    {
      res.render("technical/architecture/newarch");
    });
    //create Architecture
    router.post("/categories/technical/architecture", function (req, res)
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
    router.get("/categories/technical/architecture/:id", function (req, res)
    {
      Blog.findById(req.params.id).populate("comment").exec(function (err, foundBlog)
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
    router.get("/categories/technical/architecture/:id/edit",isLoggedIn,function (req, res)
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
    router.put("/categories/technical/architecture/:id", function (req, res)
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
    router.delete("/categories/technical/architecture/:id",isLoggedIn,function(req,res){
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



    //DBMS
    //REST Routes
    //{{{{{{{{{{{{
    router.get("/categories/technical/dbms", function (req, res)
    {
      Blog.find({'category':"dbms"}, function (err, blogs)
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
    router.get("/categories/technical/dbms/new",isLoggedIn,function (req, res)
    {
      res.render("technical/DBMS/newdbms");
    });
    //create Algorithm
    router.post("/categories/technical/dbms", function (req, res)
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
    router.get("/categories/technical/dbms/:id", function (req, res)
    {
      Blog.findById(req.params.id).populate("comment").exec(function (err, foundBlog)
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
    router.get("/categories/technical/dbms/:id/edit",isLoggedIn,function (req, res)
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
    router.put("/categories/technical/dbms/:id", function (req, res)
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
    router.delete("/categories/technical/dbms/:id",isLoggedIn,function(req,res){
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

    // =======================================================
    //comments
    //========================================================


    //}}}}}}}}}}}}

    //Machine Learning
    //REST Routes
    //{{{{{{{{{{{{
    router.get("/categories/technical/ml", function (req, res)
    {
      Blog.find({'category':"machine learning"}, function (err, blogs)
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
    router.get("/categories/technical/ml/new",isLoggedIn,function (req, res)
    {
      res.render("technical/machine-learning/mlnew");
    });
    //create Blog
    router.post("/categories/technical/ml", function (req, res)
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
    router.get("/categories/technical/ml/:id", function (req, res)
    {
      Blog.findById(req.params.id).populate("comment").exec( function (err, foundBlog)
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
    router.get("/categories/technical/ml/:id/edit",isLoggedIn,function (req, res)
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
    router.put("/categories/technical/ml/:id", function (req, res)
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
    router.delete("/categories/technical/ml/:id",isLoggedIn,function(req,res){
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

    // =======================================================
    //comments
    //========================================================



    //}}}}}}}}}}}}

    //Computer Networking
    //REST Routes
    //{{{{{{{{{{{{
    router.get("/categories/technical/net", function (req, res)
    {
      Blog.find({'category':"computer networking"}, function (err, blogs)
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
    router.get("/categories/technical/net/new",isLoggedIn,function (req, res)
    {
      res.render("technical/networking/newnet");
    });
    //create Blog
    router.post("/categories/technical/net", function (req, res)
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
    router.get("/categories/technical/net/:id", function (req, res)
    {
      Blog.findById(req.params.id).populate("comment").exec(function (err, foundBlog)
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
    router.get("/categories/technical/net/:id/edit",isLoggedIn,function (req, res)
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
    router.put("/categories/technical/net/:id", function (req, res)
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
    router.delete("/categories/technical/net/:id",isLoggedIn,function(req,res){
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

    // =======================================================
    //comments
    //========================================================



    //}}}}}}}}}}}}

    //Software Engineering
    //REST Routes
    //{{{{{{{{{{{{
    router.get("/categories/technical/soft", function (req, res)
    {
      Blog.find({'category':"software engineering"}, function (err, blogs)
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
    router.get("/categories/technical/soft/new",isLoggedIn,function (req, res)
    {
      res.render("technical/software-engineering/newsoft");
    });
    //create Blog
    router.post("/categories/technical/soft", function (req, res)
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
    router.get("/categories/technical/soft/:id", function (req, res)
    {
      Blog.findById(req.params.id).populate("comment").exec(function (err, foundBlog)
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
    router.get("/categories/technical/soft/:id/edit",isLoggedIn,function (req, res)
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
    router.put("/categories/technical/soft/:id", function (req, res)
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
    router.delete("/categories/technical/soft/:id",isLoggedIn,function(req,res){
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

    // =======================================================
    //comments
    //========================================================



    //}}}}}}}}}}}}

    // ::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::

    //Other Blogs:::::::::::::
    //Travel
    //REST Routes
    //{{{{{{{{{{{{
    router.get("/categories/other/travel", function (req, res)
    {
      Blog.find({'category':"travel"}, function (err, blogs)
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
    router.get("/categories/other/travel/new",isLoggedIn,function (req, res)
    {
      res.render("other/travel/newtravel");
    });
    //create Blog
    router.post("/categories/other/travel", function (req, res)
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
    router.get("/categories/other/travel/:id", function (req, res)
    {
      Blog.findById(req.params.id).populate("comment").exec(function (err, foundBlog)
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
    router.get("/categories/other/travel/:id/edit",isLoggedIn,function (req, res)
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
    router.put("/categories/other/travel/:id", function (req, res)
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
    router.delete("/categories/other/travel/:id",isLoggedIn,function(req,res){
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

    // =======================================================
    //comments
    //========================================================



    //}}}}}}}}}}}}

    //Food
    //REST Routes
    //{{{{{{{{{{{{
    router.get("/categories/other/food", function (req, res)
    {
      Blog.find({'category':"food"}, function (err, blogs)
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
    router.get("/categories/other/food/new",isLoggedIn,function (req, res)
    {
      res.render("other/food/newfood");
    });
    //create Blog
    router.post("/categories/other/food", function (req, res)
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
    router.get("/categories/other/food/:id", function (req, res)
    {
      Blog.findById(req.params.id).populate("comment").exec(function (err, foundBlog)
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
    router.get("/categories/other/food/:id/edit",isLoggedIn,function (req, res)
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
    router.put("/categories/other/food/:id", function (req, res)
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
    router.delete("/categories/other/food/:id",isLoggedIn,function(req,res){
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

    // =======================================================
    //comments
    //========================================================



    //}}}}}}}}}}}}

    //Science
    //REST Routes
    //{{{{{{{{{{{{
    router.get("/categories/other/science", function (req, res)
    {
      Blog.find({'category':"science"}, function (err, blogs)
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
    router.get("/categories/other/science/new",isLoggedIn,function (req, res)
    {
      res.render("other/science/newsci");
    });
    //create Blog
    router.post("/categories/other/science", function (req, res)
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
    router.get("/categories/other/science/:id", function (req, res)
    {
      Blog.findById(req.params.id).populate("comment").exec(function (err, foundBlog)
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
    router.get("/categories/other/science/:id/edit",isLoggedIn,function (req, res)
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
    router.put("/categories/other/science/:id", function (req, res)
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
    router.delete("/categories/other/science/:id",isLoggedIn,function(req,res){
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

    // =======================================================
    //comments
    //========================================================



    //}}}}}}}}}}}}

    //Medical Science
    //REST Routes
    //{{{{{{{{{{{{
    router.get("/categories/other/medical", function (req, res)
    {
      Blog.find({'category':"medical"}, function (err, blogs)
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
    router.get("/categories/other/medical/new",isLoggedIn,function (req, res)
    {
      res.render("other/medical/newmed");
    });
    //create Blog
    router.post("/categories/other/medical", function (req, res)
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
    router.get("/categories/other/medical/:id", function (req, res)
    {
      Blog.findById(req.params.id).populate("comment").exec(function (err, foundBlog)
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
    router.get("/categories/other/medical/:id/edit", isLoggedIn,function (req, res)
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
    router.put("/categories/other/medical/:id", function (req, res)
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
    router.delete("/categories/other/medical/:id",isLoggedIn,function(req,res){
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

    // =======================================================
    //comments
    //========================================================



    //}}}}}}}}}}}}

    //Music
    //REST Routes
    //{{{{{{{{{{{{
    router.get("/categories/other/music", function (req, res)
    {
      Blog.find({'category':"music"}, function (err, blogs)
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
    router.get("/categories/other/music/new",isLoggedIn,function (req, res)
    {
      res.render("other/music/newmusic");
    });
    //create Blog
    router.post("/categories/other/music",function (req, res)
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
    router.get("/categories/other/music/:id", function (req, res)
    {
      Blog.findById(req.params.id).populate("comment").exec(function (err, foundBlog)
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
    router.get("/categories/other/music/:id/edit",isLoggedIn,function (req, res)
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
    router.put("/categories/other/music/:id",function (req, res)
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
    router.delete("/categories/other/music/:id",isLoggedIn,function(req,res){
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
    function isLoggedIn(req,res,next){
        if(req.isAuthenticated())
        {
          return next();
        }
        res.redirect("/login");
      };
    module.exports=router;
