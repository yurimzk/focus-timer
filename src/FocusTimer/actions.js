import state from './state.js'

export function toggleRunning() {
    state.isRunning = document.documentElement.classList.toggle('running')
}

export function reset() {
    state.isRunning = false
    document.documentElement.classList.remove('running')
}

export function addTime() {
    console.log("function add time")
}

export function subtractTime() {
    console.log("function subtract time")
}