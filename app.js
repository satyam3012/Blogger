const express = require("express");
const bodyParser = require("body-parser");
const methodOverride = require("method-override");
const expressSanitizer = require("express-sanitizer");
const passport=require("passport");
const LocalStrategy=require("passport-local");
const app = express();
const mongoose = require("mongoose");
const Blog=require("./models/blog");
const Comment=require("./models/comment");
const User=require("./models/user");
const commentRoutes=require("./routes/comments");
const indexRoutes=require("./routes/index");
const postRoutes=require("./routes/postRoutes");
const port=process.env.PORT || 4000;
var uristring=process.env.MONGOLAB_URI ||
    process.env.MONGOHQ_URL || 'mongodb://localhost/Blogger';
mongoose.connect(uristring, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
//PASSPORT CONFIG
app.use(require("express-session")({
  secret:"Once again",
  resave:false,
  saveUninitialized:false
}));

app.use(passport.initialize());
app.use(passport.session());
passport.use(new LocalStrategy(User.authenticate()));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }));
app.set("view engine", "ejs");
app.use(expressSanitizer());
app.use(methodOverride("_method"));
app.use(function(req,res,next){
  res.locals.currentUser=req.user;
  next();
});
app.use(indexRoutes);
app.use(commentRoutes);
app.use(postRoutes);
app.listen(port, function () {
  console.log("server running on port 4000");
});
