# Time Table

Below are the draft schedules for conference, to give attendees an idea of what to expect. These are subject to change. This page will be the main way in which we communicate the schedule.

:::warning Tight Time Table
We are struggling to fit all of the requested talks, and have talks in reserve. If anyone would be willing to reduce their talk time down to make space for others, please reach out to us.
:::

## Day 1 - Fri 5th Sep 2025

<script setup>
// Day 1 Setup 
const eventsD1 = [
  { start: '08:40', end: '09:20', title: 'Registration & Guests Settling', speaker: '', merge: true},
  { start: '09:20', end: '09:40', title: 'Welcome, H&S and Housekeeping', speaker: 'Organizers'},
  { start: '09:40', end: '10:40', title: 'Systems Update', speaker: 'Andrew Tridgell'},
  { start: '10:40', end: '11:00', title: 'Morning Tea', speaker: '', merge: true },
  { start: '11:00', end: '11:20', title: 'F35 Demo', speaker: 'Eric Maglio' },
  { start: '11:20', end: '12:00', title: 'BlueOS Update', speaker: 'Willian Galvani'},
  { start: '12:00', end: '12:40', title: 'Mission Planner Update', speaker: 'Andras Schaffer'},
  { start: '12:40', end: '13:40', title: 'Lunch', speaker: '', merge: true },
  { start: '13:40', end: '14:00', title: 'Plane Follow Demo', speaker: 'Tim Tuxworth'},
  { start: '14:00', end: '14:40', title: 'Linking Drones VTOL & Mobile App', speaker: 'Simon Hancock'},
  { start: '14:40', end: '15:00', title: 'EKF Work', speaker: 'Rishabh Singh'},
  { start: '15:00', end: '15:20', title: 'Integration of Eurekdynamics FFT GYRO with ArduPilot', speaker: 'Masaki Shibuya & Hisanori Sunohara'},
  { start: '15:20', end: '15:40', title: 'Afternoon Tea', speaker: '', merge: true },
  { start: '15:40', end: '16:00', title: 'Motor Redundancy Demo', speaker: 'Matt Kear & Peter Hall'},
  { start: '16:00', end: '16:40', title: 'Gazebo/Ross/ESP32 Rover', speaker: 'Rhys Mainwaring' },
  { start: '16:40', end: '17:00', title: 'End of Day Close/De-Brief', speaker: 'Organizers' },
  { start: '17:00', end: '19:00', title: 'Fun Flying\nBBQ & Pizza', speaker: '', merge: true },
]

const startD1 = '08:20'
const endD1   = '19:00'

// Day 2 Setup 
const eventsD2 = [
  { start: '08:40', end: '09:00', title: 'Guests Arrive', speaker: '', merge: true},
  { start: '09:00', end: '09:20', title: 'Welcome, Schedule Update & Ops Brief', speaker: 'Organizers' },
  { start: '09:20', end: '10:20', title: 'Small Aerial Photography Drones with AP', speaker: 'Randy Mackay & Willian Galvani' },
  { start: '10:20', end: '10:40', title: 'Instructing Users of ArduPilot', speaker: 'Lee Schofield' },
  { start: '10:40', end: '11:00', title: 'Morning Tea', speaker: '', merge: true},
  { start: '11:00', end: '11:20', title: 'Turbine Heli Demo', speaker: 'Ferruccio Vicari'},
  { start: '11:20', end: '12:00', title: 'Manna Talk: Challenges in Drone Delivery', speaker: 'Charlie Burge & Dan Moss'},
  { start: '12:00', end: '12:40', title: 'Remote Aero Talk', speaker: 'Fredrik Falkman'},
  { start: '12:40', end: '13:40', title: 'Lunch', speaker: '', merge: true },
  { start: '13:40', end: '14:00', title: 'Remote Aero Plane Rescue Launch Demo', speaker: 'Alexander Sandström'},
  { start: '14:00', end: '14:40', title: 'An Exploration of TECS Parameters', speaker: 'George Zogopoulos'},
  { start: '14:40', end: '15:20', title: 'Design, Build, Fly: How ArduPilot Enhances Aerospace Engineering Education', speaker: 'Bob Entwistle & Cameron Boyd'},
  { start: '15:20', end: '15:40', title: 'Afternoon Tea', speaker: '', merge: true },
  { start: '15:40', end: '16:00', title: 'Small Aerial Photography Drones Demo', speaker: 'Randy Mackay' },
  { start: '16:00', end: '16:40', title: 'ArduPilot Methodic Configurator', speaker: 'Amilcar Lucas' },
  { start: '16:40', end: '17:00', title: 'End of Day Close/De-Brief', speaker: 'Organizers' },
  { start: '17:00', end: '18:00', title: 'Transfer buses to La Piaza\nfor conference dinner', speaker: '', merge: true },
  { start: '18:00', end: '18:40', title: 'Welcome Drinks, Nibbles, & Mingling', speaker: '', merge: true },
  { start: '18:40', end: '20:00', title: 'Dinner', speaker: '', merge: true },
  // { start: '20:00', end: '20:20', title: 'Walk to Castle', speaker: '', merge: true },
  // { start: '20:20', end: '21:00', title: 'Richmond Castle Event', speaker: '', merge: true },
]
const startD2 = '08:40'
const endD2   = '20:00'

// Day 3 Setup 
const eventsD3 = [
  { start: '08:40', end: '09:00', title: 'Guests Arrive', speaker: '', merge: true},
  { start: '09:00', end: '09:20', title: 'Welcome, Schedule Update & Ops Brief', speaker: 'Organizers' },
  { start: '09:20', end: '10:20', title: '1st Talk', speaker: 'Leonard Hall' },
  { start: '10:20', end: '10:40', title: 'ArduRover & ROS2 Autonomy Demo', speaker: 'Stephen Dade' },
  { start: '10:40', end: '11:00', title: 'Morning Tea', speaker: '', merge: true},
  { start: '11:00', end: '11:40', title: 'The challenges of a drone light show', speaker: 'Ben Pickard & Tamás Nepusz'},
  { start: '11:40', end: '12:00', title: 'VS Code ArduPilot Developer Environment', speaker: 'Sid Purohit'},
  { start: '12:00', end: '12:40', title: 'Acro-fencing, AI and Acrobatics with Small Fast Drone', speaker: 'Andy Piper'},
  { start: '12:40', end: '13:40', title: 'Lunch', speaker: '', merge: true },
  { start: '13:40', end: '14:00', title: 'Small Fast Drone Demo', speaker: 'Andy Piper'},
  { start: '14:00', end: '14:40', title: 'MAVLink Report', speaker: 'Hamish Willee'},
  { start: '14:40', end: '15:20', title: 'Ross/Plane Talk', speaker: 'Ryan Friedman'},
  { start: '15:20', end: '15:40', title: 'Afternoon Tea', speaker: '', merge: true },
  { start: '15:40', end: '16:00', title: 'Auto Mission Demo', speaker: 'Ryan Friedman'},
  { start: '16:00', end: '16:40', title: 'Kraus Hamdani Aerospace Talk: Enhancements to ArduPilot', speaker: 'Tom Pittenger'},
  { start: '16:40', end: '17:00', title: 'Thanks & Closing Remarks', speaker: 'Organizers' },
]
const startD3 = '08:40'
const endD3   = '17:00'
</script>

<ClientOnly>
  <TimeTable 
    :events="eventsD1"
    :rangeStart="startD1"
    :rangeEnd="endD1"
  />
</ClientOnly>

## Day 2 - Sat 6th Sep 2025

<ClientOnly>
  <TimeTable 
    :events="eventsD2"
    :rangeStart="startD2"
    :rangeEnd="endD2"
  />
</ClientOnly>

## Day 3 - Sun 7th Sep 2025

<ClientOnly>
  <TimeTable 
    :events="eventsD3"
    :rangeStart="startD3"
    :rangeEnd="endD3"
  />
</ClientOnly>
