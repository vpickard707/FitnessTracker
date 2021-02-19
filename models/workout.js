const mongoose = require("mongoose");

const Schema = mongoose.Schema;
// // day: new Date().setDate(new Date().getDate()-10),
// exercises: [
//     {
//      type: "resistance",
//       name: "Bicep Curl",
//       duration: 20,
//       weight: 100,
//       reps: 10,
//       sets: 4

const WorkoutSchema = new Schema({
    exercises: [
        {
            type:{type: String,
            trim: true,
            required: "Enter the type of exercise",}
        }
    ]
}
//   name: {
//     type: String,
//     trim: true,
//     required: "Enter a name of exercise",
//   },
//   value: {
//     type: Number,
//     required: "Enter an amount",
//   },
//   date: {
//     type: Date,
//     default: Date.now,
  
//   },
// });

const Workout = mongoose.model("Workout", WorkoutSchema);

module.exports = Workout;
