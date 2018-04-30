var express = require("express")
var app     = express()
var bodyParser  = require("body-parser")

app.use(express.static("public"))
app.use(bodyParser.urlencoded({extended: true}))

app.set("view engine", "ejs")


var awesomes = [
  {image: "https://i.pinimg.com/originals/51/22/64/512264ee84d0f738a4056badb27eb775.jpg", title: "Dusky's Wonders", detail: "Too grumpy to meditate"},
  {image: "http://www.thisiscolossal.com/wp-content/uploads/2016/06/fish-1.jpg", title: "Overwhelming Goldfish", detail: "Too many things to learn in one class."},
  {image: "https://images.pexels.com/photos/157465/pexels-photo-157465.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=350", title: "Misery ducklings", detail: "The future of awesome down pillows."}
]



app.get("/", function(req, res){
  res.render("landing")
})

app.get("/awesomes", function(req, res){


  res.render("awesomes",{awesomes:awesomes})
})

app.post("/awesomes", function(req, res){
  // res.send("YOU HIT THE POST ROUTE!")
  //get data from form and add to awesomes array
  var image = req.body.image
  var title = req.body.title
  var detail = req.body.detail

  var newAwesomes = {image: image, title: title, detail: detail}
  awesomes.push(newAwesomes)

  //redirect back to awesomes page
  res.redirect("/awesomes")
})

app.get("/awesomes/new", function(req, res){
  res.render("new")
})
//======================================
app.listen(3000, function(){
  console.log('Sever is listening!!!');
});
