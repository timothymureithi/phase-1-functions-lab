// Code your solution in this file!

function distanceFromHqInBlocks(block) {
 
    if(block >= 42){
        return block - 42
    }
    else{
        return 42 - block
    }
  }

  function distanceFromHqInFeet(block){
    return (distanceFromHqInBlocks(block)*264)
  }

  function distanceTravelledInFeet(start, end){
    if (start < end){
        return (end - start)*264;
    }else{
        return(start - end)*264;
        }
    }

    function calculatesFarePrice(start,end){
       let feet = distanceTravelledInFeet(start,end);
       if (feet <= 400){
        return 0;
    
       }else if(feet > 400 && feet <= 2000){
        return (feet - 400)*.02;
       }else if(feet > 2000 && feet <= 2500){
        return 25;
       }else{
        return "cannot travel that far";
       }
    }
  