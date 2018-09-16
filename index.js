// Code your solution in this file!
function distanceFromHqInBlocks(distance){
 if (distance === 43){
   return 1;
 } else if (distance > 43){
   return distance - 43 +1;
 } else {
   return 43 - distance -1;
 }
}

function distanceFromHqInFeet(distance){
  return distanceFromHqInBlocks(distance) * 264;
}

function distanceTravelledInFeet(d1, d2){
  return  Math.abs(d2-d1) * 264;
}

function calculatesFarePrice(start, destination){
  if (distanceTravelledInFeet(start,destination)<= 400) {
    return 0;
  } else if (distanceTravelledInFeet(start,destination) > 2500){
    return 'cannot travel that far';
  } else if (distanceTravelledInFeet(start,destination) <= 2000) {
    return (distanceTravelledInFeet(start,destination)-400) * 0.02
  } else {
    return 25;
  }
}
