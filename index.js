// Code your solution in this file!
function distanceFromHqInBlocks(location) {
    return Math.abs(location - 42)
}

function distanceFromHqInFeet(location) {
    return distanceFromHqInBlocks(location) * 264
}

function distanceTravelledInFeet(start, destination) {
    return Math.abs(destination - start) * 264
}

function calculatesFarePrice(start, destination) {
    let fare = 0
    const feets = distanceTravelledInFeet(start, destination)
    if (feets <= 400) {
        return fare
    } else if (feets > 400 && feets <= 2000) {
        return fare = (feets * 2 - 800) / 100
    } else if (feets > 2000 && feets <= 2500) {
        return fare = 25
    } else if (feets > 2500) {
        return fare = 'cannot travel that far'
    }
}

