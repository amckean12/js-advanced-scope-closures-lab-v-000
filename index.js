function produceDrivingRange(blockRange){
  return function(startBlock, endBlock){
    let start = parseInt(startBlock);
    let end = parseInt(endBlock);
    let travelDistance = Math.abs(end - start);
    let difference = blockRange - travelDistance;

    if (difference > 0){
      return `within range by ${difference}`
    }
    else {
      let outOfRange = Math.abs(difference);
      return `${outOfRange} blocks out of range`
    }
  }
}

function produceTipCalculator(percent){
  return function(total){
    let billTotal = parseInt(total);
    let tip = Math.abs(total * percent);
    return tip;
  }
}

function createDriver(){

  let driverId = 0;

  return class Driver{
    constructor(name){
      this.name = name;
      this.id = ++driverId;
    }
  }
}
