const forestSound = new Audio('../assets/forest.wav');
const rainSound = new Audio('../assets/rain.wav');
const coffeeSound = new Audio('../assets/coffee-shop.wav');
const fireSound = new Audio('../assets/fire.wav');

forestSound.loop = true;
rainSound.loop = true;
coffeeSound.loop = true;
fireSound.loop = true;

export function resetSound() {
  forestSound.pause();
  rainSound.pause();
  coffeeSound.pause();
  fireSound.pause();
}

export function playForestSound() {
  if (forestSound.paused) {
    forestSound.play();
    rainSound.pause();
    coffeeSound.pause();
    fireSound.pause();
  } else {
    forestSound.pause();
  }
}

export function playRainSound() {
  if (rainSound.paused) {
    rainSound.play();
    forestSound.pause();
    coffeeSound.pause();
    fireSound.pause();
  } else {
    rainSound.pause();
  }
}

export function playCoffeeSound() {
  if (coffeeSound.paused) {
    coffeeSound.play();
    forestSound.pause();
    rainSound.pause();
    fireSound.pause();
  } else {
    coffeeSound.pause();
  }
}

export function playFireSound() {
  if (fireSound.paused) {
    fireSound.play();
    forestSound.pause();
    rainSound.pause();
    coffeeSound.pause();
  } else {
    fireSound.pause();
  }
}
