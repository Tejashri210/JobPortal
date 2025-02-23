const mongoose = require("mongoose");

const Schema = mongoose.Schema;

// Enums
const Role = {
  SEEKER: "seeker",
  HIRER: "hirer",
  ADMIN: "admin",
};

const JobType = {
  PART_TIME: "PART_TIME",
  FULL_TIME: "FULL_TIME",
  REMOTE: "REMOTE",
};

// User Schema
const userSchema = new Schema(
  {
    role: { type: String, enum: Object.values(Role), required: true },
    fullname: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    phoneNumber: { type: String, required: true, unique: true },
    profileImage: { type: String },
    companyId: { type: Schema.Types.ObjectId, ref: "Company", required: true },
  },
  { timestamps: true }
);


// Company Schema
const companySchema = new Schema(
  {
    companyName: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    phoneNumber: { type: String },
  },
  { timestamps: true }
);

// Seeker Profile Schema
const seekerProfileSchema = new Schema(
  {
    userId: { type: Schema.Types.ObjectId, ref: "User", required: true, unique: true },
    education: { type: String },
    skills: { type: String },
    experience: { type: String },
    cv: { type: String },
  },
  { timestamps: true }
);

// Job Schema
const jobSchema = new Schema(
  {
    title: { type: String, required: true },
    category: { type: String, required: true },
    companyId: { type: Schema.Types.ObjectId, ref: "Company", required: true },
    postedById: { type: Schema.Types.ObjectId, ref: "User", required: true },
    location: { type: String, required: true },
    salary: { type: Number, required: true },
    jobType: { type: String, enum: Object.values(JobType), required: true },
    description: { type: String, required: true },
    requirements: { type: [String], required: true },
    experience: { type: String },
  },
  { timestamps: true }
);

// Application Schema
const applicationSchema = new Schema(
  {
    jobId: { type: Schema.Types.ObjectId, ref: "Job", required: true },
    userId: { type: Schema.Types.ObjectId, ref: "User", required: true },
   
  },
  { timestamps: true }
);

// Saved Jobs Schema
const savedJobsSchema = new Schema(
  {
    jobId: { type: Schema.Types.ObjectId, ref: "Job", required: true },
    userId: { type: Schema.Types.ObjectId, ref: "User", required: true },
   
  },
  { timestamps: true }
);

// Models
const User = mongoose.model("User", userSchema);
const Company = mongoose.model("Company", companySchema);
const SeekerProfile = mongoose.model("SeekerProfile", seekerProfileSchema);
const Job = mongoose.model("Job", jobSchema);
const Application = mongoose.model("Application", applicationSchema);
const SavedJobs = mongoose.model("SavedJobs", savedJobsSchema);

module.exports = { User, Company, SeekerProfile, Job, Application, SavedJobs };
