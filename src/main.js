import * as FocusTimer from './FocusTimer/index.js'

FocusTimer.start(0, 6)

// TIMER
// Seconds must decrease until 0 (can't be negative)
// Minutes must decrease until 0 (can't be negative)
// When a seconds reaches 0, minutes must decrease 1

// CONTROLS
// Play button must start timer
// Pause button must pause timer
// Stop button must reset timer
// + button must add 5 minutes to timer (can't go over 60:00)
// - button must decrease 5 minutes to timer (can't go less than 00:00, can't be negative)
// + and - buttons can only work if the app is not running

// SOUNDS
// Click a button to reproduce the respective sound
// The button stays pressed (color active)
// Click again to mute the sound
// The sound will reproduce in loop if the app is runing
// The sound stop if the timer stops or reach 00:00