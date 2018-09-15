// Code your solution in this file!
function distanceFromHqInBlocks(blocks){
  const hq = 42
    if (blocks > hq){
      return blocks - hq;
    }
    else{
      return hq - blocks;
    }
}


function distanceFromHqInFeet(blocks){
  return distanceFromHqInBlocks(blocks) * 264;
}


function distanceTravelledInFeet(startBlock, endBlock){
  if (startBlock > endBlock){
    return ((startBlock - endBlock) * 264);
  }
  else {
    return ((endBlock - startBlock) * 264);
  }
}


function calculatesFarePrice(startBlock, endBlock){
  const distance = distanceTravelledInFeet(startBlock, endBlock);

  if (distance <= 400){
    return 0;
  }
  else if (400 < distance && distance < 2000){
    return ((distance - 400)* 0.02);
  }
  else if (2000 <= distance && distance < 2500){
    return 25;
  }
  else if (distance > 2500){
    return "cannot travel that far";
  }
}
