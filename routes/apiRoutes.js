const Workout = require("../models/workout.js");
const db = require("../models");
const router = require("express").Router(); 


  router.get("/api/workouts", function(req, res) {
    db.Workout.find({}).then(function(dbImages) {
      res.json(dbImages);
    });
  });

  router.put("/api/workouts/:id", function(req, res) {
    db.Image.updateOne({ _id: req.params.id }, { rating: req.body.rating }).then(function(dbImage) {
      res.json(dbImage);
    });
  });

  router.post("/api/workouts", ({ body }, res) => {
    Workout.create({})
      .then((dbWorkout) => {
        res.json(dbWorkout);
      })
      .catch(({ message }) => {
        console.log(message);
      });
  });


module.exports = router; 