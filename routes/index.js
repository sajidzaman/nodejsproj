var express = require('express');
var router = express.Router();
var RegistrationController = require('../controllers/registrationcontroller');
var {body} = require('express-validator');

var bodyParser = require('body-parser')
var urlencodedParser = bodyParser.urlencoded({ extended: false })



router.post('/register' , body('name').isEmail(), urlencodedParser, (req,res,next) =>  new RegistrationController().register(req, res,next));
router.get('/showusers' , urlencodedParser,  (req,res) =>  new RegistrationController().showusers(req,res));
module.exports = router;