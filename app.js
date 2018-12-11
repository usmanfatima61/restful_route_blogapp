var express     = require("express"),
         app    = express(),
    mongoose    = require("mongoose"),
    bodyParser = require("body-parser");
    
mongoose.connect("mongodb://localhost:27017/restful_route_blogapp",{ useNewUrlParser: true });
// App Config
app.set("view engine","ejs");
app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }));

// Mongoose Schema/model config
// title, image ,body,created
var blogSchema = new mongoose.Schema({
    title:String,
    image:String,
    body:String,
    created:{type:Date, default:Date.now}
});
var Blog = mongoose.model("Blog",blogSchema);//"Blog" is the collection name in DB
// Blog.create({
//     title:"test blog",
//     image:"https://lh3.googleusercontent.com/vCWUQnkTPgrKIcR3XHb6VamOgmrXo-mSBS--vNt0r2PcVQdeRP9Bfz1qRAQAF1janmSmXU6bzj2L7QbvnIM7uZVS7GO9R7uIbHtATDhcgkorha4P43VXa6DURNPUfiU17hSugGN2w7ILRy-pFq6-rzJmboHzHsGes7wlE37UkqZYM1ASx4R-EybB-N6m7mqyRFwPVzHZ8cRdKqBkAaaIpMQqLo4Xk6XLezW-oFHCF198f_7oR66km0v-A0Gr77El0x64ofnX4Ep7ZwsCoEudc1JN4KeyU0CLYKdHdd1PNyKV5lmuLSrLU2oDRZSaVwMf8aPF_hULFjVolInK8CHNVPslBJFVBkX_evvFUyHDBMSRD0T51QYuTlsMoGPs5TivLmYUT_cxO0X9g09IwlM-Knd1EtYemgRftMd3-UuimvkOMDlm-uBr3Q0eoSyXWG6PeF-5iHB4KDvbGXdJa6RXr3KUem50mHZEr1P-PtEDJGC4c-dUQfFuDdPAn9ZU9LEyzUr5hOdtptfG6Huxi6RVM_i0beorc2YRKyqJFqZCaD6uRh-hQD8Z_S5XqlQbBBc0H3W2jd0LOxeIB8_Fn1tEC_buTJ2P7tcSlypbq7ufbN4L9fYc1toNX3SLWQAm6bZNwBQixPv3sAnxz-qWWazvTrsacg=w674-h897-no",
//     body:"mummy and I"
// });


// /Restful route
app.get("/", function(req, res){
     res.redirect("/blog");
});

app.get("/blog", function(req, res){
    Blog.find({},function(err,blogs){  // to receave all blog from database(DB)
        if (err){ console.log("Error");}
        else {
             res.render("index",{blog:blogs});}
    });});










app.listen(process.env.PORT,process.env.IP,function(){
        console.log("restful_route_blogapp Server is runing");});