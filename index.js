// Code your solution in this file!
const returnFirstTwoDrivers = function(drivers) {
    const newDrivers = [...drivers] 
    return newDrivers.slice(0, 2)
}

const returnLastTwoDrivers = function(drivers) {
    const newDrivers = [...drivers] 
    return newDrivers.slice(-2)
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
function selectDifferentDrivers(drivers, fan) {
    const firstDrivers = (drivers)
    //const secondDriver = selectingDrivers
    //const lastDrivers = returnLastTwoDrivers(drivers)
    if (fan===selectingDrivers[0]){
        return returnFirstTwoDrivers(drivers)
      }else{
        return returnLastTwoDrivers(drivers)
      }
    //return drivers[0], selectingDrivers[0]
    //console.log(selectingDrivers)
    //return firstDrivers, lastDrivers;
}

selectDifferentDrivers (returnFirstTwoDrivers)
//selectDifferentDrivers (returnLastTwoDrivers)