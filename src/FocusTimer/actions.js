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

    el.forest.classList.remove('toggle-forest');
    el.rain.classList.remove('toggle-rain');
    el.coffee.classList.remove('toggle-coffee');
    el.fire.classList.remove('toggle-fire');

    sounds.resetSound();
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
  sounds.playForestSound();
  el.rain.classList.remove('toggle-rain');
  el.coffee.classList.remove('toggle-coffee');
  el.fire.classList.remove('toggle-fire');
}

export function toggleRain() {
  el.rain.classList.toggle('toggle-rain');
  sounds.playRainSound();
  el.forest.classList.remove('toggle-forest');
  el.coffee.classList.remove('toggle-coffee');
  el.fire.classList.remove('toggle-fire');
}

export function toggleCoffee() {
  el.coffee.classList.toggle('toggle-coffee');
  sounds.playCoffeeSound();
  el.forest.classList.remove('toggle-forest');
  el.rain.classList.remove('toggle-rain');
  el.fire.classList.remove('toggle-fire');
}

export function toggleFire() {
  el.fire.classList.toggle('toggle-fire');
  sounds.playFireSound();
  el.forest.classList.remove('toggle-forest');
  el.rain.classList.remove('toggle-rain');
  el.coffee.classList.remove('toggle-coffee');
}
