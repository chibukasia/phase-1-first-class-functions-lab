// Code your solution in this file!
const returnFirstTwoDrivers = function(drivers) {
    return drivers.slice(0, 2)
}

const returnLastTwoDrivers = function(drivers) {
    return drivers.slice(-2)
}

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers]

function createFareMultiplier(number) {
    return function (number) {
        return number * number;
    };
}
const fareDoubler = function (createFareMultiplier) {
     return (createFareMultiplier * 2)
}
const fareTripler = function(createFareMultiplier) {
    return (createFareMultiplier * 3);
}
function selectDifferentDrivers(drivers, selectingDrivers) {
    const firstDrivers = returnFirstTwoDrivers(drivers)
    const lastDrivers = returnLastTwoDrivers(drivers)
    return firstDrivers, lastDrivers;

}