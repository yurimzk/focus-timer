import { coffee, controls, fire, forest, rain } from "./elements.js"
import * as actions from "./actions.js"

export function registerControls() {
    controls.addEventListener('click', (event) => {
        const action = event.target.dataset.action
        if (typeof actions[action] != "function") {
            return;
        }
        actions[action]();
    })
}

export function registerForestEvent() {
  forest.addEventListener('click', (event) => {
    actions.toggleForest();
  });
}

export function registerRainEvents() {
  rain.addEventListener('click', (event) => {
    actions.toggleRain();
  });
}

export function registerCoffeeEvents() {
  coffee.addEventListener('click', (event) => {
    actions.toggleCoffee();
  });
}

export function registerFireEvents() {
  fire.addEventListener('click', (event) => {
    actions.toggleFire();
  });
}
