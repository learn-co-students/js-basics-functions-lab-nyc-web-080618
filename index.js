// Code your solution in this file!
function distanceFromHqInBlocks(street){
  return Math.abs(street - 42);
}

function distanceFromHqInFeet(street){
  return distanceFromHqInBlocks(street) * 264;
}

function distanceTravelledInFeet(startStreet, endStreet){
  return Math.abs(startStreet - endStreet) * 264;
}

function calculatesFarePrice(start, destination){
  distance = distanceTravelledInFeet(start, destination);
  if(distance <= 400){
    return 0;
  } else if(distance <= 2000){
    return (distance - 400) * 0.02;
  } else if(distance <= 2500){
    return 25;
  } else{
    return "cannot travel that far";
  }
}
