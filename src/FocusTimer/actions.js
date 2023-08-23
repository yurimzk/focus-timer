import state from './state.js'
import * as timer from './timer.js'
import * as el from './elements.js'

export function toggleRunning() {
    state.isRunning = document.documentElement.classList.toggle('running')

    timer.countdown()
}

export function reset() {
    state.isRunning = false
    document.documentElement.classList.remove('running')
    timer.updateDisplay()
}

export function addTime() {
    if (state.isRunning) {
        return
    }

    let currentMinutes = Number(el.minutes.textContent);
    
    if (currentMinutes < 60) {
        let newMinutes = currentMinutes + 5;

        state.minutes = newMinutes;
        timer.updateDisplay(newMinutes, state.seconds);
    }
}

export function subtractTime() {
    if (state.isRunning) {
        return
    }

    let currentMinutes = Number(el.minutes.textContent);

    if (currentMinutes > 0) {
        let newMinutes = currentMinutes - 5;
        
        state.minutes = newMinutes;
        timer.updateDisplay(newMinutes, state.seconds);
        
    }
}