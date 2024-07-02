function speedDetector(){
    const speed=prompt("Enter speed:") //prompts user to enter speed before storing it in speed variable
    if(isNaN(speed) || speed <= 0){
        return "Please enter a valid speed value";
    }
    
    if(speed >0 && speed <70){
      return "Ok"; //returns ok if speed is below 70
    }
    else{
        const points=Math.floor((speed-70)/5);//calculates and rounds off the demerit points if speed is above 70
        if(points > 12){
            return "License suspended";
        }
        else{
            return `Demerit points: ${points}`;//uses intrapolation to return demerit points
        }
    }
  }
  console.log(speedDetector())//logs expected values in the browser console
  debugger;