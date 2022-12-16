const express = require('express');
const greeting = require('../logger/logger.js');
const help = require('../util/helper.js');
const string =require('../validation/formatter.js')
const router = express.Router();
const month =require('../lodash')

router.get('/test-me', function (req, res) {
    res.send(greeting.hello)
});
router.get("/request",function(req,res){
    res.send("changing some informartion in the file")
})
router.get('/text',function(req,res){
    // res.send("Hello all this is to know more abolut the node.js")
    res.send("The is to know what happen if i send two request in same rout")
})
router.get('/helper',function(req,res){
    res.send(help.year +" "+ help.month +" "+ help.batch)
})
router.get('/string',function(req,res){
    res.send("It removes the leadin and triling string  "+string.str+"  It lowers the string  "+string.lower + "  It Upper the string  " + string.upper )
})
router.get('/month',function(req,res){
    res.send(month)
})

module.exports = router;
// console.log(help.month)