const Users = require('../models/users.model');

const verifyOtp = async (req, res) => {
  try {
    const { email, otp } = req.body;
    if (!email || !otp) {
      return res.status(400).json({ message: 'Email and otp are required' });
    }

    const user = await Users.findOne({ email: email.toLowerCase() }).select('+otp +otpExpires');
    if (!user) return res.status(404).json({ message: 'User not found' });

    if (!user.otp || !user.otpExpires) return res.status(400).json({ message: 'No OTP found for user' });

    if (user.otp !== otp) return res.status(400).json({ message: 'Invalid OTP' });

    if (user.otpExpires < new Date()) return res.status(400).json({ message: 'OTP expired' });

    user.isVerified = true;
    user.otp = undefined;
    user.otpExpires = undefined;
    await user.save();

    return res.status(200).json({ message: 'Email verified' });
  } catch (err) {
    return res.status(err.status || 500).json({ message: err.message || 'Server error' });
  }
};

module.exports = { verifyOtp };
