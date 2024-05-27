import state from './state.js'
import * as timer from './timer.js'
import * as el from './elements.js'
import * as sounds from './sounds.js'

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

        newMinutes = Math.min(newMinutes, 60);

        state.minutes = newMinutes;
        timer.updateDisplay(newMinutes, state.seconds);
    }
}

export function subtractTime() {
    if (state.isRunning) {
        return
    }

    let currentMinutes = Number(el.minutes.textContent);

    if (currentMinutes >= 5) {
        let newMinutes = currentMinutes - 5;

        newMinutes = Math.max(newMinutes, 0);

        state.minutes = newMinutes;
        timer.updateDisplay(newMinutes, state.seconds);
    }
}

export function toggleForest() {
  el.forest.classList.toggle('toggle-forest');
}

export function toggleRain() {
  el.rain.classList.toggle('toggle-rain');
}

export function toggleCoffee() {
  el.coffee.classList.toggle('toggle-coffee');
}

export function toggleFire() {
  el.fire.classList.toggle('toggle-fire');
}
