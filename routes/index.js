const express=require("express");
const router=express.Router();
const passport=require("passport");
const User=require("../models/user");
const Blog=require("../models/blog");
router.get("/categories", function (req, res) {
    res.render("categories");
  });

router.get("/categories/technical", function (req, res) {
    res.render("technical");
  });

router.get("/categories/other", function (req, res) {
    res.render("other");
  });
router.get("/register",function(req,res){
    res.render("register");
  })
router.post("/register",function(req,res){
    var newUser=new User({username:req.body.username});
    User.register(newUser,req.body.password,function(err,user){
      if(err)
      {
        console.log(err);
        return res.render("register");
      }
      passport.authenticate("local")(req,res,function(){
        res.redirect("/");
      });
    });
  });

  router.get("/login",function(req,res){
    res.render("login");
  });
  router.post("/login",passport.authenticate("local",
  {
    successRedirect:"/",
    failureRedirect:"/login"
  }),function(req,res){
  });
  //Logout
  router.get("/logout",function(req,res){
    req.logout();
    res.redirect("/");
  });
  function isLoggedIn(req,res,next){
    if(req.isAuthenticated())
    {
      return next();
    }
    res.redirect("/login");
  }
  module.exports=router;
