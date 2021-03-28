const nodemailer = require('nodemailer');
const mailGun = require('nodemailer-mailgun-transport');
const ResModel = require('../schema/addResSchema');
const express = require('express');
const router = express.Router();


router.get('/', (req, res, next) => {
    ResModel.find()
        .then(doc=> {
            res.status(200).json({doc: doc})
        }).catch(err=> {
            res.status(500).send("error"+err);
        })
            res.send(`
            <h1> hi </h1>
            
            `);
});

router.post('/', (req, res, next)=> {
const restaurant = new ResModel({
    resname: req.body.resname,
    username: req.body.username,
    password: req.body.password
})
restaurant.save();
res.status(200).json({msg:'success'});
console.log(req.body);


    const output = `
    <h1> Restaurant Name ${req.body.resname}</h1>
    <p> UserName: <span> ${req.body.username}</span></p>
    <p> Password: <span> ${req.body.password}</span></p>
    `
    const auth = {
        auth: {
        api_key: '4ee792a983db606d2eae9c7db1ef5b2d-1553bd45-f3378195',
        domain: 'sandbox607f9be37f2b4da0bba23f8eee436810.mailgun.org'
        }
    };
    const transporter = nodemailer.createTransport(mailGun(auth));
    
    const mailOptions = {
        from: 'demouserkb@gamil.com',
        to: 'chinmoymanna17@gmail.com',
        subject: 'from KB',
        html: output
    }
    
    transporter.sendMail(mailOptions, function(err, data){
        if(err){
        console.log("Error "+err)
        } else{
        console.log("mail sent"+data)
        }
    });


});



module.exports = router;
