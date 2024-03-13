const express = require('express');
const Student = require('../models/students');
const router = express.Router();

router.route('/')

  .get((req, res) => {
    res.render('index');
  })  
  
  .post(async (req, res) => {
    try {
      const { email, password } = req.body;
      const storedData = await Student.findOne({ email });

      if (!storedData) {
        return res.status(401).send("<h1>Invalid Login Credentials</h1>");
      }

      const userEmail = storedData.email;
      const userPassword = storedData.password;

      if (email === userEmail && password === userPassword) {
        console.log('login successful');
        return res.status(200).redirect('/');
      }
      return res.status(401).send("<h1>Invalid Login Credentials</h1>");
    } catch (e) {
      return res.status(401).send('Invalid Login Credentials');
    }
  });

router.route('/login')
  
  .get((req, res) => {
      res.render('login');
  })

  .post(async (req, res) => {
      try{
          const newStudent = new Student(req.body);
          console.log(newStudent);
          const saveStudentData = await newStudent.save();

          return res.status(201).redirect('/login');
      }catch (e) {
          return res.status(400).send(e);    
      }
  });

router.get('/register', (req, res) => {
  res.render('register');
});

module.exports = router;
