function distanceFromHqInBlocks(street) {
  let val = 42 - street
  return ((val < 0) ? val * -1 : val)
}

function distanceFromHqInFeet(location) {
  return (distanceFromHqInBlocks(location) * 264)
}

function distanceTravelledInFeet(start,stop) {
  let distance = stop - start
  distance = ((distance < 0) ? distance * -1 : distance)
  return (distance * 264)
}

function calculatesFarePrice(start,stop) {
  let feet_travelled = distanceTravelledInFeet(start,stop)
  if (feet_travelled < 400) {
    return 0
  } else if (feet_travelled > 400 && feet_travelled < 2000){
    return (feet_travelled - 400) * .02
  } else if (feet_travelled > 2000 && feet_travelled < 2500) {
    return 25
  } else {
    return "cannot travel that far"
  }
}
