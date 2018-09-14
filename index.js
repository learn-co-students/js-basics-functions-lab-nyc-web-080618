// Code your solution in this file!


  function distanceFromHqInBlocks(value){
    return Math.abs(value - 42)
  }

  function distanceFromHqInFeet(value){
    return 264* distanceFromHqInBlocks(value)
  }

  function distanceTravelledInFeet(x, y){
    return 264*Math.abs(x-y)
  }


  function calculatesFarePrice(x,y){
    let ft = distanceTravelledInFeet(x,y)

    if(ft<=400){
      return 0
    }

    else if (ft > 400 && ft< 2000){
      return (0.02*(ft-400))

    }else if(ft>2000 && ft<=2500){
      return 25
    }else if (ft>2500){
    return 'cannot travel that far'

    }


  }
