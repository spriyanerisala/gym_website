import mongoose from 'mongoose';

const membershipSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  plan: { type: String, required: true }, 
  joinedAt: { type: Date, default: Date.now }
});

const Membership = mongoose.model("Membership", membershipSchema);
export default Membership;
