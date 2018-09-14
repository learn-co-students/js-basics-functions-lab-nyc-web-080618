// Code your solution in this file!

function distanceFromHqInBlocks(block){
  return Math.abs(42 - block);
}


function distanceFromHqInFeet(block){
  return distanceFromHqInBlocks(block) * 264;
}

function distanceTravelledInFeet(block1,block2){
  return Math.abs(block1-block2) * 264;
}

function calculatesFarePrice(start,end){
  var feet_travelled = Math.abs(start-end) * 264;
  if (feet_travelled < 400){
    return 0;
  }
  else if (feet_travelled > 400 && feet_travelled < 2000){
    return (feet_travelled - 400)* .02;
  }
  else if (feet_travelled > 2000 && feet_travelled < 2500){
    return 25;
  }
  else {
    return "cannot travel that far";
  }
}
