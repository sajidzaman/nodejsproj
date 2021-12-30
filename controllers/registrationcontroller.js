
const User = require('../models/userModel');
var {body, validationResult} = require('express-validator');



class RegistrationController {
    constructor() {
        this.name = null;
        this.email = null;
        this.password= null;
    }

     register(req,res,next) {
        //  if(validator.isEmpty(req.body.name)) {
        //       res.status(400);
        //       next();
        //  }
        //  validator.isEmail(req.body.email);
        //  validator.isLength({ min: 8 });
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
          return res.status(400).json({ errors: errors.array() });
        }
        

        
         console.log(req.body);

         const user = new User(req.body);
         user.save()
         if(user) {
            return res.status(200).json({ user });
         }

    }

    async showusers(req,res){
        const users = await User.find({});
        return res.send(users);
       
       
    }
}

module.exports =  RegistrationController;