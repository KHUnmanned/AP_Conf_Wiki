# Time Table

Below are the draft schedules for conference, to give attendees an idea of what to expect. These are subject to change. This page will be the main way in which we communicate the schedule.

## Day 1 - Fri 5th Sep 2025

<script setup>
// Day 1 Setup 
const eventsD1 = [
  { start: '08:40', end: '09:20', title: 'Registration & Guests Settling', speaker: '', merge: true},
  { start: '09:20', end: '09:40', title: 'Welcome, H&S and Housekeeping', speaker: 'Organizers'},
  { start: '09:40', end: '10:40', title: '1st Talk', speaker: 'Andrew Tridgell'},
  { start: '10:40', end: '11:00', title: 'Morning Break/Time Buffer Slot', speaker: '', merge: true },
  { start: '11:00', end: '12:40', title: 'Talks & Demos', speaker: '' },
  { start: '12:40', end: '13:40', title: 'Lunch', speaker: '', merge: true },
  { start: '13:40', end: '15:20', title: 'Talks & Demos', speaker: ''},
  { start: '15:20', end: '15:40', title: 'Afternoon Break/Time Buffer Slot', speaker: '', merge: true },
  { start: '15:40', end: '16:40', title: 'Talks & Demos', speaker: '' },
  { start: '16:40', end: '17:00', title: 'End of Day Close/De-Brief', speaker: 'Organizers' },
  { start: '17:00', end: '19:00', title: 'Fun Flying\nBBQ & Pizzas Servers', speaker: '', merge: true },
]
const startD1 = '08:20'
const endD1   = '19:00'

// Day 2 Setup 
const eventsD2 = [
  { start: '09:00', end: '09:20', title: 'Welcome, Schedule Update & Ops Brief', speaker: 'Organizers' },
  { start: '09:20', end: '10:20', title: '1st Talk', speaker: 'Randy Mackay' },
  { start: '10:20', end: '10:40', title: 'Lightning Talk/Demo', speaker: '' },
  { start: '10:40', end: '11:00', title: 'Morning Break/Time Buffer Slot', speaker: '', merge: true},
  { start: '11:00', end: '12:40', title: 'Talks & Demos', speaker: ''},
  { start: '12:40', end: '13:40', title: 'Lunch', speaker: '', merge: true },
  { start: '13:40', end: '15:20', title: 'Talks & Demos', speaker: ''},
  { start: '15:20', end: '15:40', title: 'Afternoon Break/Time Buffer Slot', speaker: '', merge: true },
  { start: '15:40', end: '16:40', title: 'Talks & Demos', speaker: '' },
  { start: '16:40', end: '17:00', title: 'End of Day Close/De-Brief', speaker: 'Organizers' },
  { start: '17:00', end: '18:00', title: 'Transfer buses to La Piaza\nfor conference dinner', speaker: '', merge: true },
  { start: '18:00', end: '18:40', title: 'Welcome Drinks, Nibbles, & Mingling', speaker: '', merge: true },
  { start: '18:40', end: '20:00', title: 'Dinner', speaker: '', merge: true },
  { start: '20:00', end: '20:20', title: 'Walk to Castle', speaker: '', merge: true },
  { start: '20:20', end: '21:00', title: 'Richmond Castle Event', speaker: '', merge: true },
]
const startD2 = '08:40'
const endD2   = '21:00'

// Day 3 Setup 
const eventsD3 = [
  { start: '09:00', end: '09:20', title: 'Welcome, Schedule Update & Ops Brief', speaker: 'Organizers' },
  { start: '09:20', end: '10:20', title: '1st Talk', speaker: 'Leonard Hall' },
  { start: '10:20', end: '10:40', title: 'Lightning Talk/Demo', speaker: '' },
  { start: '10:40', end: '11:00', title: 'Morning Break/Time Buffer Slot', speaker: '', merge: true},
  { start: '11:00', end: '12:40', title: 'Talks & Demos', speaker: ''},
  { start: '12:40', end: '13:40', title: 'Lunch', speaker: '', merge: true },
  { start: '13:40', end: '15:20', title: 'Talks & Demos', speaker: ''},
  { start: '15:20', end: '15:40', title: 'Afternoon Break/Time Buffer Slot', speaker: '', merge: true },
  { start: '15:40', end: '16:40', title: 'Talks & Demos', speaker: '' },
  { start: '16:40', end: '17:00', title: 'Thanks & Closing Remarks', speaker: 'Next Conference Host?' },
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
