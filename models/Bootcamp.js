const mongoose = require("mongoose");

const BootcampSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Please add a Name"],
    unique: true,
    trim: true,
    maxlength: [50, "Name can not more than 50 characters"]
  },
  slug: String,
  description: {
    type: String,
    required: [true, "Please add a Name"],
    maxlength: [500, "Description can not more than 500 characters"]
  },
  website: {
    type: String,
    match: [
      /https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)/,
      "Please enter a valid url"
    ]
  },
  phone: {
    type: String,
    maxlength: [10, "Phone number can not be more than 10 characters"]
  },
  Email: {
    type: String,
    match: [
      /(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9]))\.){3}(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9])|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/,
      "Please Enter a valid email Id"
    ]
  },
  address: {
    type: String,
    required: [true, "Please add an address"]
  },
  location: {
    //GeoJson Point
    type: {
      type: String,
      required: false,
      enum: ["point"]
    },
    coordinates: {
      type: [Number],
      required: false,
      index: "2dsphere"
    },
    formattedAddress: String,
    street: String,
    city: String,
    state: String,
    zipCode: String,
    country: String
  },
  careers: {
    // Array of strings
    type: [String],
    required: true,
    enum: [
      "Web Development",
      "Mobile Development",
      "UI/UX",
      "Data Science",
      "Business",
      "Other"
    ]
  },
  averageRating: {
    type: Number,
    min: [1, "Ratinng must be at least 1 "],
    max: [10, "Ratinng Can not be more than 10 "]
  },
  averageCost: Number,
  photo: {
    type: String,
    default: "no-photo.jpg"
  },
  housing: {
    type: Boolean,
    default: false
  },
  jobAssistance: {
    type: Boolean,
    default: false
  },
  jobGuarantee: {
    type: Boolean,
    default: false
  },
  acceptGi: {
    type: Boolean,
    default: false
  },
  createdAt: {
    type: Date,
    efault: Date.now
  }
});

module.exports = mongoose.model("Bootcamp", BootcampSchema);
