const mongoose = require('mongoose');

const TRUCK_TYPES = [
  'flatbed',
  'tanker',
  'refrigerated',
  'box',
  'tipper',
  'container',
  'lowbed',
];

const truckSchema = new mongoose.Schema(
  {
    company: { type: mongoose.Schema.Types.ObjectId, ref: 'Company', required: true },
    type: { type: String, enum: TRUCK_TYPES, required: true },
    plateNumber: { type: String, required: true, trim: true },
    capacityTons: { type: Number, required: true },
    capacityVolumeM3: Number,
    currentLocation: {
      type: { type: String, enum: ['Point'], default: 'Point' },
      coordinates: { type: [Number], default: undefined },
      city: { type: String, required: true, trim: true },
    },
    availableFrom: Date,
    availableUntil: { type: Date, required: true },
    minRatePerKm: { type: Number, required: true },
    currency: { type: String, default: 'USD' },
    status: { type: String, enum: ['available', 'on_trip', 'inactive'], default: 'available' },
    contactPhone: { type: String, required: true },
    exactAddress: String,
    photos: [String],
  },
  { timestamps: true }
);

truckSchema.index({ currentLocation: '2dsphere' });
truckSchema.index({ type: 1, status: 1, availableUntil: 1 });
truckSchema.index({ company: 1, plateNumber: 1 }, { unique: true });

module.exports = mongoose.model('Truck', truckSchema);
module.exports.TRUCK_TYPES = TRUCK_TYPES;
