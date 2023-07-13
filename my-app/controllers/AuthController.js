const { JsonWebTokenError } = require("jsonwebtoken");
const User = require("../models/User");
const bcrypt = require("bcrypt");
var jwt = require('jsonwebtoken');
const saltRounds = 10;

exports.signup = async (req, res) => {
  const password = await bcrypt.hash(req.body.password, saltRounds);
  const data = { ...req.body, password };
  const user = await User.create(data);
  res.json({ user });
};

exports.login = async (req, res) => {
  const user = await User.findOne({ email: req.body.email });
  if (!user) {
    // The user does not exist
    res.status(404).json({ error: "User not found" });
    return; 
  } 
  if (!(await bcrypt.compare(req.body.password, user.password))) {
    // The password is invalid
    res.status(401).json({ error: "User not found" });
    return; 
  } 

  const token = await jwt.sign({user}, 'fake-jwt-secret'); 


     res.json({ user, access_token: token });
};