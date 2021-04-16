// const Workout = require("../models/workout.js");
// const db = require("../models");
// const router = require("express").Router(); 


//   router.get("/api/workouts", function(req, res) {
//     db.Workout.find({}).then(function(dbWorkout) {
//       res.json(dbWorkout);
//     });
//   });

//   router.put("/api/workouts/:id", function(req, res) {
//     db.Workout.updateOne({ _id: req.params.id }, { rating: req.body.rating }).then(function(dbWorkout) {
//       res.json(dbWorkout);
//     });
//   });

//   router.post("/api/workouts", ({ body }, res) => {
//     Workout.create({})
//       .then((dbWorkout) => {
//         res.json(dbWorkout);
//       })
//       .catch(({ message }) => {
//         console.log(message);
//       });
//   });


// module.exports = router; 

const router = require("express").Router();
const Workout = require("../models/workout.js");

router.post("/api/workouts", ({ body }, res) => {
    Workout.create(body)
        .then(dbWorkout => {
            res.json(dbWorkout);
        })
        .catch(err => {
            res.status(400).json(err);
        });
});

router.put("/api/workouts/:id", ({ body, params }, res) => {
    console.log(body)
    Workout.findByIdAndUpdate(params.id,
        { $push: { exercises: body } }, { new: true })
        .then(dbWorkout => {
            res.json(dbWorkout);
        })
        .catch(err => {
            res.status(400).json(err);
        });
});

router.get("/api/workouts", (req, res) => {
    Workout.find({})
        .then(dbWorkout => {
            res.json(dbWorkout);
        })
        .catch(err => {
            res.status(400).json(err);
        });
});

router.get("/api/workouts/range", (req, res) => {
    Workout.find({})
      
        .limit(10)
        .then(dbWorkout => {
            res.json(dbWorkout);
        })
        .catch(err => {
            res.status(400).json(err);
        });
});

router.delete("/api/workouts", ({ body }, res) => {
    Workout.findByIdAndRemove(body.id)
        .then(() => {
            res.json(true);
        })
        .catch(err => {
            res.status(400).json(err);
        });
});



module.exports = router;