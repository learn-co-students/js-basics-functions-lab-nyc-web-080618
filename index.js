function distanceFromHqInBlocks(num){
  if(num < 42){
    return 42-num;
  }
  else{
    return num-42;
  }
}

function distanceFromHqInFeet(num){
  return distanceFromHqInBlocks(num)*264;
}

function distanceTravelledInFeet(numStart,numEnd){
  return Math.abs(numEnd-numStart)*264;
}

function calculatesFarePrice(start,destination){
  let feet = distanceTravelledInFeet(start,destination)
  if(feet<=400){
    return 0
  }
  else if (feet <= 2000 && feet>400) {
    feet -= 400
    return feet*0.02
  }
  else if (feet>2000 && feet <2500) {
    return 25
  }
  else{
    return 'cannot travel that far'
  }
}
