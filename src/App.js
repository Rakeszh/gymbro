import React, { useState, useRef } from "react";
import "./App.css";

const MUSCLE_CATEGORIES = [
  {
    category: "Chest",
    groups: [
      {
        group: "Pectoralis Major (Chest)",
        parts: [
          {
            name: "Upper Chest",
            subtitle: "Clavicular Head",
            exercises: {
              Beginner: [
                { name: "Incline Push-Up", sets: "3 × 10–12" }
              ],
              Intermediate: [
                { name: "Incline Barbell Bench Press (Compound)", sets: "3 × 8–10" },
                { name: "Incline Dumbbell Press (Compound)", sets: "3 × 8–10" },
                { name: "Incline Smith Machine Press (Compound)", sets: "3 × 8–10" },
                { name: "Incline Cable Fly (Isolation)", sets: "3 × 12–15" },
                { name: "Incline Chest Press (Machine-Based)", sets: "3 × 10–12" },
                { name: "Landmine Press (Upper Chest Focus, Functional)", sets: "3 × 10" }
              ]
            }
          },
          {
            name: "Middle Chest",
            subtitle: "Sternal Head",
            exercises: {
              Beginner: [
                { name: "Flat Push-Up", sets: "3 × 10–15" }
              ],
              Intermediate: [
                { name: "Flat Barbell Bench Press (Compound)", sets: "3 × 8–10" },
                { name: "Flat Dumbbell Press (Compound)", sets: "3 × 8–10" },
                { name: "Flat Machine Chest Press (Machine-Based)", sets: "3 × 10–12" },
                { name: "Cable Crossover (Mid Pulley, Isolation)", sets: "3 × 12–15" },
                { name: "Pec Deck Machine (Isolation)", sets: "3 × 12–15" },
                { name: "Push-Ups (Bodyweight)", sets: "3 × 15–20" }
              ]
            }
          },
          {
            name: "Lower Chest",
            subtitle: "Abdominal Head",
            exercises: {
              Beginner: [
                { name: "Decline Push-Up", sets: "3 × 8–10" }
              ],
              Intermediate: [
                { name: "Decline Barbell Bench Press (Compound)", sets: "3 × 8–10" },
                { name: "Decline Dumbbell Press (Compound)", sets: "3 × 8–10" },
                { name: "High-to-Low Cable Crossover (Isolation)", sets: "3 × 12–15" },
                { name: "Decline Chest Press (Machine-Based)", sets: "3 × 10–12" },
                { name: "Weighted Dips (Chest Lean, Bodyweight/Compound)", sets: "3 × 8–12" }
              ]
            }
          }
        ]
      }
    ]
  },
  {
    category: "Shoulders",
    groups: [
      {
        group: "Deltoid (Shoulders)",
        parts: [
          {
            name: "Front Delts",
            subtitle: "Anterior Deltoid",
            exercises: {
              Beginner: [
                { name: "Front Plate Raise", sets: "3 × 10" }
              ],
              Intermediate: [
                { name: "Barbell Overhead Press (Barbell)", sets: "3 × 8–10" },
                { name: "Seated Dumbbell Shoulder Press (Dumbbells)", sets: "3 × 8–10" },
                { name: "Arnold Press (Dumbbells)", sets: "3 × 8–10" },
                { name: "Front Plate Raise (Plate)", sets: "3 × 10" },
                { name: "Front Dumbbell Raise (Dumbbells)", sets: "3 × 10" }
              ]
            }
          },
          {
            name: "Side Delts",
            subtitle: "Lateral Deltoid",
            exercises: {
              Beginner: [
                { name: "Dumbbell Lateral Raise", sets: "3 × 12" }
              ],
              Intermediate: [
                { name: "Dumbbell Lateral Raise (Dumbbells)", sets: "3 × 12" },
                { name: "Cable Lateral Raise (Cable)", sets: "3 × 12" },
                { name: "Machine Lateral Raise (Machine)", sets: "3 × 12" },
                { name: "Leaning Lateral Raise (Dumbbell/Cable)", sets: "3 × 12" },
                { name: "Resistance Band Side Raise (Band)", sets: "3 × 15" }
              ]
            }
          },
          {
            name: "Rear Delts",
            subtitle: "Posterior Deltoid",
            exercises: {
              Beginner: [
                { name: "Rear Delt Fly (Machine or Dumbbell)", sets: "3 × 10" }
              ],
              Intermediate: [
                { name: "Rear Delt Fly (Dumbbells)", sets: "3 × 10" },
                { name: "Face Pull (Cable)", sets: "3 × 12" },
                { name: "Reverse Pec Deck (Machine)", sets: "3 × 12" },
                { name: "Bent-Over Rear Delt Raise (Dumbbells)", sets: "3 × 10" },
                { name: "Rear Delt Cable Cross (Cable)", sets: "3 × 12" }
              ]
            }
          }
        ]
      }
    ]
  },
  {
    category: "Triceps",
    groups: [
      {
        group: "Triceps Brachii (Triceps)",
        parts: [
          {
            name: "Long Head",
            subtitle: "Inner/Back Arm",
            exercises: {
              Beginner: [
                { name: "Overhead Dumbbell Extension", sets: "3 × 10" }
              ],
              Intermediate: [
                { name: "Overhead Dumbbell Extension (Dumbbell)", sets: "3 × 10" },
                { name: "Skull Crushers (EZ Bar)", sets: "3 × 10" },
                { name: "Overhead Cable Triceps Extension (Cable)", sets: "3 × 12" }
              ]
            }
          },
          {
            name: "Lateral Head",
            subtitle: "Outer Arm",
            exercises: {
              Beginner: [
                { name: "Rope Pushdowns", sets: "3 × 12" }
              ],
              Intermediate: [
                { name: "Rope Pushdowns (Cable)", sets: "3 × 12" },
                { name: "Close-Grip Bench Press (Barbell)", sets: "3 × 10" },
                { name: "Dumbbell Kickbacks (Dumbbell)", sets: "3 × 12" }
              ]
            }
          },
          {
            name: "Medial Head",
            subtitle: "Deep Tricep Head",
            exercises: {
              Beginner: [
                { name: "Reverse Grip Cable Pushdowns", sets: "3 × 12" }
              ],
              Intermediate: [
                { name: "Reverse Grip Cable Pushdowns (Cable)", sets: "3 × 12" },
                { name: "Close-Grip Push-Ups (Bodyweight)", sets: "3 × 15" },
                { name: "Triceps Dips (Bench/Parallel Bars, Bodyweight)", sets: "3 × 10–12" }
              ]
            }
          }
        ]
      }
    ]
  },
  {
    category: "Back",
    groups: [
      {
        group: "Lats",
        parts: [
          {
            name: "Lats",
            subtitle: "Latissimus Dorsi",
            exercises: {
              Beginner: [
                { name: "Lat Pulldown (Machine)", sets: "3 × 10–12" }
              ],
              Intermediate: [
                { name: "Wide-Grip Pull-Ups (Bodyweight)", sets: "3 × 8–10" },
                { name: "Lat Pulldown (Cable Machine)", sets: "3 × 10–12" },
                { name: "Dumbbell Pullover (Dumbbell)", sets: "3 × 10" },
                { name: "One-Arm Lat Pulldown (Cable)", sets: "3 × 10" },
                { name: "Assisted Pull-Up (Machine)", sets: "3 × 10" }
              ]
            }
          }
        ]
      },
      {
        group: "Traps",
        parts: [
          {
            name: "Traps",
            subtitle: "Upper, Middle, Lower Trapezius",
            exercises: {
              Beginner: [
                { name: "Dumbbell Shrugs", sets: "3 × 12" }
              ],
              Intermediate: [
                { name: "Barbell Shrugs (Barbell)", sets: "3 × 12" },
                { name: "Dumbbell Shrugs (Dumbbells)", sets: "3 × 12" },
                { name: "Seated Cable Row (Cable Machine)", sets: "3 × 12" },
                { name: "Incline Y-Raise (Dumbbells)", sets: "3 × 12" },
                { name: "Upright Row (Barbell/Dumbbell)", sets: "3 × 10" }
              ]
            }
          }
        ]
      },
      {
        group: "Lower Back",
        parts: [
          {
            name: "Erector Spinae",
            subtitle: "Erector Spinae",
            exercises: {
              Beginner: [
                { name: "Bird-Dog", sets: "3 × 12" }
              ],
              Intermediate: [
                { name: "Romanian Deadlifts (RDLs, Barbell)", sets: "3 × 10" },
                { name: "Hyperextensions (Bodyweight/Machine)", sets: "3 × 12" },
                { name: "Good Mornings (Barbell)", sets: "3 × 10" },
                { name: "Bird-Dog (Bodyweight)", sets: "3 × 12" }
              ]
            }
          }
        ]
      },
      {
        group: "Rear Delts & Teres Minor/Major",
        parts: [
          {
            name: "Rear Delts & Teres Minor/Major",
            subtitle: "Posterior Shoulder/Upper Back",
            exercises: {
              Beginner: [
                { name: "Reverse Fly (Dumbbells)", sets: "3 × 10" }
              ],
              Intermediate: [
                { name: "Reverse Fly (Dumbbells)", sets: "3 × 10" },
                { name: "Straight Arm Pulldown (Cable)", sets: "3 × 12" },
                { name: "Face Pulls (Cable)", sets: "3 × 12" }
              ]
            }
          }
        ]
      }
    ]
  },
  {
    category: "Biceps",
    groups: [
      {
        group: "Biceps Brachii (Biceps)",
        parts: [
          {
            name: "Inner Biceps",
            subtitle: "Short Head",
            exercises: {
              Beginner: [
                { name: "Preacher Curl (Machine or Dumbbell)", sets: "3 × 10–12" }
              ],
              Intermediate: [
                { name: "Barbell Curl", sets: "3 sets of 10 reps" },
                { name: "Incline Dumbbell Curl", sets: "3 sets of 10 reps" }
              ]
            }
          },
          {
            name: "Outer Biceps",
            subtitle: "Long Head",
            exercises: {
              Beginner: [
                { name: "Incline Dumbbell Curl", sets: "3 × 10" }
              ],
              Intermediate: [
                { name: "Barbell Curl", sets: "3 sets of 10 reps" },
                { name: "Incline Dumbbell Curl", sets: "3 sets of 10 reps" }
              ]
            }
          }
        ]
      }
    ]
  },
  {
    category: "Forearms",
    groups: [
      {
        group: "Forearm Muscles (Forearms)",
        parts: [
          {
            name: "Wrist Flexors",
            subtitle: "Palm Side",
            exercises: {
              Beginner: [
                { name: "Seated Wrist Curl", sets: "3 × 15" }
              ],
              Intermediate: [
                { name: "Wrist Curls", sets: "3 sets of 15 reps" },
                { name: "Hammer Curls", sets: "3 sets of 12 reps (emphasizing forearm engagement)" }
              ]
            }
          },
          {
            name: "Wrist Extensors",
            subtitle: "Back Side",
            exercises: {
              Beginner: [
                { name: "Reverse Wrist Curl", sets: "3 × 15" }
              ],
              Intermediate: [
                { name: "Reverse Wrist Curls", sets: "3 sets of 15 reps" },
                { name: "Hammer Curls", sets: "3 sets of 12 reps (emphasizing forearm engagement)" }
              ]
            }
          }
        ]
      }
    ]
  },
  {
    category: "Legs",
    groups: [
      {
        group: "Quadriceps Femoris (Quads)",
        parts: [
          {
            name: "Quads",
            subtitle: "Quadriceps Femoris",
            exercises: {
              Beginner: [
                { name: "Bodyweight Squats", sets: "3 × 15" }
              ],
              Intermediate: [
                { name: "Barbell Back Squat (Barbell)", sets: "3 × 8–10" },
                { name: "Front Squat (Barbell)", sets: "3 × 8–10" },
                { name: "Leg Press (Machine)", sets: "3 × 10–12" },
                { name: "Leg Extension (Machine)", sets: "3 × 12–15" },
                { name: "Bulgarian Split Squat (Dumbbells/Bodyweight)", sets: "3 × 10 (each leg)" },
                { name: "Step-Ups (Dumbbells)", sets: "3 × 10 (each leg)" },
                { name: "Goblet Squat (Dumbbell/Kettlebell)", sets: "3 × 12" }
              ]
            }
          }
        ]
      },
      {
        group: "Hamstrings",
        parts: [
          {
            name: "Hamstrings",
            subtitle: "Hamstrings",
            exercises: {
              Beginner: [
                { name: "Standing Leg Curl", sets: "3 × 12" }
              ],
              Intermediate: [
                { name: "Romanian Deadlift (RDL)", sets: "3 × 10" },
                { name: "Lying Leg Curl", sets: "3 × 12" },
                { name: "Glute Ham Raise", sets: "3 × 8–10" }
              ]
            }
          }
        ]
      },
      {
        group: "Gluteus (Glutes)",
        parts: [
          {
            name: "Glutes",
            subtitle: "Gluteus",
            exercises: {
              Beginner: [
                { name: "Glute Bridge", sets: "3 × 15" }
              ],
              Intermediate: [
                { name: "Hip Thrust", sets: "3 × 10" },
                { name: "Bulgarian Split Squat", sets: "3 × 10 (each leg)" },
                { name: "Cable Kickback", sets: "3 × 12" }
              ]
            }
          }
        ]
      },
      {
        group: "Calves",
        parts: [
          {
            name: "Calves",
            subtitle: "Gastrocnemius / Soleus",
            exercises: {
              Beginner: [
                { name: "Standing Calf Raise", sets: "3 × 15" }
              ],
              Intermediate: [
                { name: "Standing Calf Raise (Gastrocnemius)", sets: "3 × 15" },
                { name: "Seated Calf Raise (Soleus)", sets: "3 × 15" }
              ]
            }
          }
        ]
      }
    ]
  },
  {
    category: "Abs",
    groups: [
      {
        group: "Rectus Abdominis (Abs)",
        parts: [
          {
            name: "Upper Abs",
            subtitle: "Upper Rectus",
            exercises: {
              Beginner: [
                { name: "Crunches", sets: "3 × 20" }
              ],
              Intermediate: [
                { name: "Crunches", sets: "3 sets of 15 reps" },
                { name: "Reverse Crunches", sets: "3 sets of 15 reps" }
              ]
            }
          },
          {
            name: "Lower Abs",
            subtitle: "Lower Rectus",
            exercises: {
              Beginner: [
                { name: "Lying Leg Raises", sets: "3 × 15" }
              ],
              Intermediate: [
                { name: "Crunches", sets: "3 sets of 15 reps" },
                { name: "Reverse Crunches", sets: "3 sets of 15 reps" }
              ]
            }
          }
        ]
      }
    ]
  },
  {
    category: "Obliques",
    groups: [
      {
        group: "Obliques",
        parts: [
          {
            name: "Side Abs",
            subtitle: "External Obliques",
            exercises: {
              Beginner: [
                { name: "Seated Russian Twist (Bodyweight)", sets: "3 × 20 (each side)" }
              ],
              Intermediate: [
                { name: "Side Planks", sets: "3 sets of 30 seconds per side" },
                { name: "Russian Twists", sets: "3 sets of 20 reps per side" }
              ]
            }
          },
          {
            name: "Deep Side Abs",
            subtitle: "Internal Obliques",
            exercises: {
              Beginner: [
                { name: "Side Plank", sets: "3 × 30 sec each side" }
              ],
              Intermediate: [
                { name: "Side Planks", sets: "3 sets of 30 seconds per side" },
                { name: "Russian Twists", sets: "3 sets of 20 reps per side" }
              ]
            }
          }
        ]
      }
    ]
  },
  {
    category: "Core",
    groups: [
      {
        group: "Transversus Abdominis (Deep Core/Inner Abs)",
        parts: [
          {
            name: "Deep Core",
            subtitle: "Transversus Abdominis",
            exercises: {
              Beginner: [
                { name: "Forearm Plank", sets: "3 × 30–45 sec" }
              ],
              Intermediate: [
                { name: "Planks", sets: "3 sets, 45 seconds each" },
                { name: "Dead Bug Exercise", sets: "3 sets of 12 reps per side" }
              ]
            }
          }
        ]
      }
    ]
  },
];

const WORKOUT_SPLITS = [
  {
    name: "3 Day",
    title: "3-Day Full Body Split (Balanced & Efficient)",
    days: [
      {
        name: "Day 1 – Full Body A",
        exercises: [
          "Barbell Back Squat",
          "Incline Dumbbell Press",
          "Bent-Over Barbell Row",
          "Seated Overhead Dumbbell Press",
          "Hanging Leg Raises"
        ]
      },
      {
        name: "Day 2 – Full Body B",
        exercises: [
          "Deadlift",
          "Flat Barbell Bench Press",
          "Lat Pulldown",
          "Dumbbell Lateral Raise",
          "Cable Rope Triceps Pushdown"
        ]
      },
      {
        name: "Day 3 – Full Body C",
        exercises: [
          "Bulgarian Split Squat",
          "Dumbbell Chest Fly",
          "Pull-Ups or Assisted Pull-Ups",
          "Barbell Overhead Press",
          "Cable Crunches"
        ]
      }
    ]
  },
  {
    name: "4 Day",
    title: "4-Day Upper/Lower Split",
    days: [
      {
        name: "Day 1 – Upper Body Push (Chest, Shoulders, Triceps)",
        exercises: [
          "Incline Barbell Press",
          "Flat Dumbbell Press",
          "Overhead Dumbbell Press",
          "Dumbbell Lateral Raise",
          "Skull Crushers"
        ]
      },
      {
        name: "Day 2 – Lower Body (Quads, Glutes, Hamstrings, Calves)",
        exercises: [
          "Barbell Back Squat",
          "Leg Press",
          "Romanian Deadlift",
          "Walking Lunges",
          "Standing Calf Raise"
        ]
      },
      {
        name: "Day 3 – Upper Body Pull (Back, Rear Delts, Biceps)",
        exercises: [
          "Pull-Ups",
          "Seated Cable Row",
          "Face Pull",
          "Rear Delt Fly",
          "EZ Bar Curl"
        ]
      },
      {
        name: "Day 4 – Lower Body + Core",
        exercises: [
          "Deadlift",
          "Bulgarian Split Squat",
          "Glute Bridges / Hip Thrusts",
          "Seated Calf Raise",
          "Hanging Leg Raises"
        ]
      }
    ]
  },
  {
    name: "5 Day",
    title: "5-Day Bro Split",
    days: [
      {
        name: "Day 1 – Chest",
        exercises: [
          "Incline Barbell Press",
          "Flat Dumbbell Press",
          "Decline Machine Press",
          "Cable Crossover",
          "Push-Ups"
        ]
      },
      {
        name: "Day 2 – Back",
        exercises: [
          "Deadlift",
          "Wide-Grip Pull-Ups",
          "T-Bar Row",
          "Straight Arm Cable Pulldown",
          "Hyperextensions"
        ]
      },
      {
        name: "Day 3 – Shoulders",
        exercises: [
          "Seated Barbell Overhead Press",
          "Dumbbell Arnold Press",
          "Dumbbell Lateral Raise",
          "Reverse Pec Deck",
          "Dumbbell Shrugs"
        ]
      },
      {
        name: "Day 4 – Arms (Biceps & Triceps)",
        exercises: [
          "Barbell Curl",
          "Dumbbell Hammer Curl",
          "Rope Triceps Pushdown",
          "Skull Crushers",
          "Cable Overhead Triceps Extension"
        ]
      },
      {
        name: "Day 5 – Legs",
        exercises: [
          "Back Squat",
          "Leg Press",
          "Romanian Deadlift",
          "Leg Curl",
          "Standing Calf Raise"
        ]
      }
    ]
  },
  {
    name: "6 Day",
    title: "6-Day Push / Pull / Legs (Twice a Week)",
    days: [
      {
        name: "Day 1 – Push A (Chest, Shoulders, Triceps)",
        exercises: [
          "Flat Barbell Bench Press",
          "Seated Overhead Dumbbell Press",
          "Dumbbell Lateral Raise",
          "Cable Chest Fly",
          "Rope Pushdowns"
        ]
      },
      {
        name: "Day 2 – Pull A (Back, Biceps, Rear Delts)",
        exercises: [
          "Pull-Ups",
          "Barbell Bent-Over Row",
          "Face Pull",
          "Dumbbell Rear Delt Fly",
          "Barbell Curl"
        ]
      },
      {
        name: "Day 3 – Legs A",
        exercises: [
          "Back Squat",
          "Leg Curl",
          "Bulgarian Split Squat",
          "Standing Calf Raise",
          "Ab Wheel Rollout"
        ]
      },
      {
        name: "Day 4 – Push B",
        exercises: [
          "Incline Dumbbell Press",
          "Smith Machine Overhead Press",
          "Machine Lateral Raise",
          "Cable Chest Press",
          "Overhead Dumbbell Triceps Extension"
        ]
      },
      {
        name: "Day 5 – Pull B",
        exercises: [
          "Lat Pulldown",
          "One-Arm Dumbbell Row",
          "Reverse Cable Cross (rear delt)",
          "Cable Curl",
          "Preacher Curl"
        ]
      },
      {
        name: "Day 6 – Legs B",
        exercises: [
          "Romanian Deadlift",
          "Leg Press",
          "Walking Lunges",
          "Seated Calf Raise",
          "Hanging Leg Raise"
        ]
      }
    ]
  }
];

function App() {
  const [expandedGroup, setExpandedGroup] = useState(null);
  const [expandedPart, setExpandedPart] = useState(null);
  const [selectedLevel, setSelectedLevel] = useState("Beginner");
  const [selectedSplit, setSelectedSplit] = useState(null);
  const [page, setPage] = useState("main"); // 'main', 'split', 'muscle', 'learn', 'muscleGroupDetail'
  const [selectedMuscleCategory, setSelectedMuscleCategory] = useState(null); // index of selected muscle group
  const muscleGroupsRef = useRef(null);

  return (
    <div className="app-container">
      <header className="header">
        <h1>GymBro</h1>
        <p className="subtitle">Your guide to effective workouts</p>
      </header>
      <div className="main-sections">
        {page === "main" && (
          <>
            <section className="section-card split-card-clickable" onClick={() => setPage("split") } style={{cursor:'pointer'}}>
              <h2 className="section-title">
                Workout Split <span className="split-arrow">▼</span>
              </h2>
            </section>
            <section className="section-card muscle-card-clickable" onClick={() => setPage("muscle") } style={{cursor:'pointer'}}>
              <h2 className="section-title">
                Muscle Groups <span className="split-arrow">▼</span>
              </h2>
            </section>
            <section className="section-card learn-card" onClick={() => setPage("learn") } style={{cursor:'pointer'}}>
              <h2 className="section-title">
                Learn <span className="split-arrow">▼</span>
              </h2>
            </section>
          </>
        )}
        {page === "split" && (
          <div className="split-main-content">
            <h2 className="section-title" style={{cursor:'pointer'}} onClick={() => { setPage("main"); setSelectedSplit(null); }}>
              <span className="split-arrow">←</span> Workout Split
            </h2>
            {selectedSplit === null ? (
              <div className="split-options">
                {WORKOUT_SPLITS.map((split, idx) => (
                  <button
                    key={split.name}
                    className={`split-btn${selectedSplit === idx ? " active" : ""}`}
                    onClick={() => setSelectedSplit(idx)}
                  >
                    {split.name}
                  </button>
                ))}
              </div>
            ) : (
              <div className="split-details">
                <h3 style={{fontWeight:700, fontSize:'1.15rem', marginBottom:'0.7rem'}}>{WORKOUT_SPLITS[selectedSplit].title}</h3>
                <div className="split-days-list">
                  {WORKOUT_SPLITS[selectedSplit].days.map((day, dIdx) => (
                    <div key={day.name} className="split-day-card">
                      <div className="split-day-title">{day.name}</div>
                      <ul className="split-day-ex-list">
                        {day.exercises.map((ex, eIdx) => (
                          <li key={eIdx} className="split-day-ex-item">{ex}</li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        )}
        {page === "muscle" && (
          <div className="muscle-main-content">
            <h2 className="section-title" style={{cursor:'pointer'}} onClick={() => setPage("main") }>
              <span className="split-arrow">←</span> Muscle Groups
            </h2>
            <div className="muscle-categories-list">
              {MUSCLE_CATEGORIES.map((cat, cIdx) => (
                <button
                  key={cat.category}
                  className="group-btn"
                  onClick={() => {
                    setSelectedMuscleCategory(cIdx);
                    setExpandedGroup(null);
                    setExpandedPart(null);
                    setPage("muscleGroupDetail");
                  }}
                  style={{marginBottom:'0.5rem'}}
                >
                  {cat.category}
                </button>
              ))}
            </div>
          </div>
        )}
        {page === "muscleGroupDetail" && selectedMuscleCategory !== null && (
          <div className="muscle-main-content">
            <h2 className="section-title" style={{cursor:'pointer'}} onClick={() => setPage("muscle") }>
              <span className="split-arrow">←</span> {MUSCLE_CATEGORIES[selectedMuscleCategory].category}
            </h2>
            <div className="groups-list">
              {MUSCLE_CATEGORIES[selectedMuscleCategory].groups.map((group, gIdx) => (
                <div key={group.group} className="muscle-group">
                  <button
                    className={`part-btn${expandedGroup === gIdx ? " active" : ""}`}
                    onClick={() => setExpandedGroup(expandedGroup === gIdx ? null : gIdx)}
                  >
                    {group.group}
                  </button>
                  {expandedGroup === gIdx && (
                    <div className="parts-list">
                      {group.parts.map((part, pIdx) => (
                        <div key={part.name} className="muscle-part">
                          <button
                            className={`part-btn${expandedPart === pIdx ? " active" : ""}`}
                            onClick={() => setExpandedPart(expandedPart === pIdx ? null : pIdx)}
                          >
                            {part.subtitle ? (
                              <>
                                <span className="part-title-dark">{part.name}</span>
                                <span className="part-subtitle-light">{part.subtitle}</span>
                              </>
                            ) : (
                              part.name
                            )}
                          </button>
                          {expandedPart === pIdx && (
                            <div className="exercise-section">
                              <button
                                className="back-btn"
                                onClick={() => setExpandedPart(null)}
                                style={{ marginBottom: '0.7rem' }}
                              >
                                ←
                              </button>
                              <div className="tabs">
                                {["Beginner", "Intermediate"].map((level) => (
                                  <button
                                    key={level}
                                    className={`tab-btn${selectedLevel === level ? " active" : ""}`}
                                    onClick={() => setSelectedLevel(level)}
                                  >
                                    {level}
                                  </button>
                                ))}
                              </div>
                              <ul className="exercise-list">
                                {part.exercises[selectedLevel].map((ex) => (
                                  <li key={ex.name} className="exercise-item">
                                    <div className="exercise-title">{ex.name}</div>
                                    <div className="exercise-sets">{ex.sets}</div>
                                  </li>
                                ))}
                              </ul>
                            </div>
                          )}
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}
        {page === "learn" && (
          <div className="learn-main-content">
            <h2 className="section-title" style={{cursor:'pointer'}} onClick={() => setPage("main") }>
              <span className="split-arrow">←</span> Learn
            </h2>
            <div className="learn-content learn-content-large">
              <div className="learn-topic">
                <div className="learn-topic-title">1. Training Fundamentals</div>
                <div className="learn-topic-goal">Goal: Help users understand how to train effectively.</div>
                <ul className="learn-list">
                  <li><b>Progressive Overload:</b> Gradually increase weight/reps to build strength and size.</li>
                  <li><b>Compound vs Isolation Movements:</b> Compound = multiple muscles (e.g., squat); Isolation = single muscle (e.g., bicep curl).</li>
                  <li><b>Volume, Intensity, Frequency:</b> Volume = total sets/reps, Intensity = load, Frequency = how often you train.</li>
                  <li><b>Rest Between Sets:</b> 60–90s for hypertrophy, 2–3 mins for strength.</li>
                  <li><b>Training to Failure:</b> Occasionally pushing to max effort can help growth but must be managed.</li>
                </ul>
              </div>
              <div className="learn-topic">
                <div className="learn-topic-title">2. Muscle Groups Explained</div>
                <div className="learn-topic-goal">Goal: Educate users on anatomy & function.</div>
                <table className="learn-table">
                  <thead><tr><th>Muscle Group</th><th>Key Info</th></tr></thead>
                  <tbody>
                    <tr><td>Chest</td><td>Push motion (pressing). Made of upper, middle, and lower heads.</td></tr>
                    <tr><td>Back</td><td>Pulling & posture. Includes lats, traps, erector spinae.</td></tr>
                    <tr><td>Shoulders</td><td>Rotation, elevation, and pressing. Front/side/rear delts.</td></tr>
                    <tr><td>Arms</td><td>Biceps (pull) & triceps (push).</td></tr>
                    <tr><td>Legs</td><td>Quad = extension; Hamstring = flexion; Glutes = thrust/power.</td></tr>
                    <tr><td>Core</td><td>Stability and rotation. Includes abs, obliques, TVA.</td></tr>
                  </tbody>
                </table>
              </div>
              <div className="learn-topic">
                <div className="learn-topic-title">3. Recovery & Growth</div>
                <div className="learn-topic-goal">Goal: Reinforce the importance of rest.</div>
                <ul className="learn-list">
                  <li><b>Muscle Repair Cycle:</b> Muscles grow during rest, not the gym.</li>
                  <li><b>Sleep & Recovery:</b> 7–9 hours of sleep is optimal for recovery.</li>
                  <li><b>Deload Weeks:</b> A lighter week every 6–8 weeks prevents burnout.</li>
                  <li><b>Stretching & Mobility:</b> Keeps joints healthy, reduces injury.</li>
                </ul>
              </div>
              <div className="learn-topic">
                <div className="learn-topic-title">4. Nutrition for Muscle Building</div>
                <div className="learn-topic-goal">Goal: Cover basic principles of muscle-supportive nutrition.</div>
                <ul className="learn-list">
                  <li><b>Protein Intake:</b> ~1.6–2.2g/kg of bodyweight for muscle growth.</li>
                  <li><b>Caloric Surplus:</b> Eat more than you burn to gain muscle.</li>
                  <li><b>Macronutrients:</b> Proteins = muscle; Carbs = energy; Fats = hormones.</li>
                  <li><b>Supplements:</b> Whey, Creatine, Multivitamins (optional).</li>
                  <li><b>Pre/Post Workout Meals:</b> Fuel before; protein + carbs after.</li>
                </ul>
              </div>
              <div className="learn-topic">
                <div className="learn-topic-title">5. Common Myths Busted</div>
                <div className="learn-topic-goal">Goal: Educate users and eliminate misinformation.</div>
                <table className="learn-table">
                  <thead><tr><th>Myth</th><th>Truth</th></tr></thead>
                  <tbody>
                    <tr><td>"Lifting makes you bulky overnight"</td><td>Muscle takes time and effort to build.</td></tr>
                    <tr><td>"No pain, no gain"</td><td>Soreness isn't the only sign of a good workout.</td></tr>
                    <tr><td>"More is better"</td><td>Smart, consistent training &gt; overtraining.</td></tr>
                    <tr><td>"Cardio kills gains"</td><td>Properly timed cardio can support muscle growth.</td></tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        )}
      </div>
      <footer className="footer">GymBro &copy; {new Date().getFullYear()}</footer>
      <div className="contact-section">
        <div className="contact-title">Contact</div>
        <div className="contact-links">
          <a href="https://github.com/Rakeszh" target="_blank" rel="noopener noreferrer" className="contact-link" aria-label="GitHub">
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#222a36" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2C6.48 2 2 6.58 2 12.26c0 4.48 2.87 8.28 6.84 9.63.5.09.68-.22.68-.48 0-.24-.01-.87-.01-1.7-2.78.62-3.37-1.36-3.37-1.36-.45-1.18-1.1-1.5-1.1-1.5-.9-.63.07-.62.07-.62 1 .07 1.53 1.05 1.53 1.05.89 1.56 2.34 1.11 2.91.85.09-.66.35-1.11.63-1.37-2.22-.26-4.56-1.14-4.56-5.07 0-1.12.39-2.03 1.03-2.75-.1-.26-.45-1.3.1-2.7 0 0 .84-.28 2.75 1.05A9.38 9.38 0 0 1 12 6.84c.85.004 1.71.12 2.51.35 1.91-1.33 2.75-1.05 2.75-1.05.55 1.4.2 2.44.1 2.7.64.72 1.03 1.63 1.03 2.75 0 3.94-2.34 4.81-4.57 5.07.36.32.68.94.68 1.9 0 1.37-.01 2.47-.01 2.81 0 .27.18.58.69.48A10.01 10.01 0 0 0 22 12.26C22 6.58 17.52 2 12 2Z"/></svg>
          </a>
          <a href="https://www.linkedin.com/in/rakesh-senthilkumar-a32555341/" target="_blank" rel="noopener noreferrer" className="contact-link" aria-label="LinkedIn">
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#222a36" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M16 8a6 6 0 0 1 6 6v6M2 9h4v12H2zM4 7a2 2 0 1 1 0-4 2 2 0 0 1 0 4z"/></svg>
          </a>
        </div>
      </div>
    </div>
  );
}

export default App;



