import mongoose from 'mongoose';

const EventSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, 'A név megadása kötelező'],
    },
    description: {
      type: String,
      required: [true, 'A név megadása kötelező'],
    },
    imageUrl: {
      type: String,
    },
    date: {
      type: Date,
      required: [true, 'A dátum megadása kötelező'],
    },
    remaining: {
      type: Number,
      required: [true, 'A szabad helyek megadása kötelező'],
    },
    soldOut: {
      type: Boolean,
    },
    isActive: {
      type: Boolean,
      default: true,
    },
  },
  { timestamps: true }
);

export default mongoose.model('Event', EventSchema);
