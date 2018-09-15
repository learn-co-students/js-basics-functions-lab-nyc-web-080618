function distanceFromHqInBlocks(value){
  return Math.abs(42-value);
}

function distanceFromHqInFeet(value){
  return distanceFromHqInBlocks(value)*264;
}

function distanceTravelledInFeet(startBlock, endBlock){
  return Math.abs(startBlock - endBlock) *264;
}

function calculatesFarePrice(startBlock, endBlock){
  let totalFeet = distanceTravelledInFeet(startBlock, endBlock)
  if (totalFeet < 400){
    return 0
  }
  else if (totalFeet > 400 && totalFeet < 2000){
    return ((totalFeet-400)*.02)
  }
  else if (totalFeet > 2000 && totalFeet <= 2500){
    return 25
  }
  else if (totalFeet > 2500){
    return 'cannot travel that far'
  }
}
