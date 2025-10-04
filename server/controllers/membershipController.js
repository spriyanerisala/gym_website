import Membership from '../models/membership.js';

export const membershipJoiner = async (req, res) => {
  try {
    const { name, email, plan } = req.body;

    if (!name || !email || !plan) {
      return res.json({ success: false, message: "All fields are required" });
    }

    const newMember = new Membership({ name, email, plan });
    await newMember.save();

    res.json({ success: true, message: "Membership registered successfully!" });
  } catch (err) {
    console.error(err);
    res.status(500).json({ success: false, message: "Server error" });
  }
};
