var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
//Connection mongoodb
mongoose.connect("mongodb+srv://Khoa21donga:Khoa21dongaKhoa21dongaKhoa21donga@cluster0.o9ivn6p.mongodb.net/test2?retryWrites=true&w=majority",{
  useNewUrlParser: true,
  useCreateIndex: true,
  useFindAndModify: false
})

//Schema
let userSchema = mongoose.Schema({
  IdVillage: {
    type: String,
  },
  Address: {
    type: String,
  },
  IsGetNotification : {
    type: String,
  },
  IsVerified: {
    type: String,
  },
  IsGetOpen: {
    type:String,
  },
})

let UserFour = mongoose.model('UserFour', userSchema)


/* GET home page. */
router.get('/', function(req, res, next) {
  UserFour.find({},(error,data)=>{
    console.log(data)
    res.render('index',{userfours: data})
  })
  // res.render('index', { title: 'Lê Hồng Phương' });
});
router.get('/form-add',function(req,res,next){
  res.render('form-add',{})
})
router.post('/add',function(req,res,next){
  UserFour.create(req.body);
  res.redirect('/')
})
router.get('/form-update/:id',function(req,res,next){
  UserFour.findById(req.params.id,(error,data)=>{
    res.render('form-update',{userfour: data})
  })
})
router.post('/update',function(req,res,next){
  UserFour.findByIdAndUpdate(req.body.id,req.body,(error,data)=>{
    res.redirect('/')
  })
})
router.get('/form-delete/:id',function(req,res,next){
  UserFour.findByIdAndDelete(req.params.id,(error,data)=>{
    res.redirect('/')
  })
})
module.exports = router;
