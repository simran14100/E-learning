const Razorpay = require('razorpay');

const instance = new Razorpay({
  key_id: process.env.RAZORPAY_KEY, // Ensure this is correct
  key_secret: process.env.RAZORPAY_SECRET // Ensure this is correct
});

<<<<<<< HEAD
module.exports = { instance };
=======
module.exports = { instance };
>>>>>>> 0b170875e897822106bb4a86185aec4173644f1a
