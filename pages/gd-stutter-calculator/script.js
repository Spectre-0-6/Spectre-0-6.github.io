const pbInputs = document.querySelectorAll('input[name="pb"]');
const pbEx = document.getElementById("pb-values");
const frVal = document.getElementById("fr");
const rrVal = document.getElementById("rr");
const prVal = document.getElementById("pr");
const startButton = document.getElementById("startB");
let frRate;
let rrRate;
let prRate = 240;
pbEx.style.display = "none";

console.log("Works");

frVal.addEventListener("change", function(){
  frRate = frVal.value;
});

rrVal.addEventListener("change", function(){
  rrRate = rrVal.value;
});

prVal.addEventListener("change", function(){
  prRate = rrVal.value;
});



pbInputs.forEach(element => {
  element.addEventListener("change", function() {
    if(document.querySelector('input[name="pb"]:checked').value == "yes"){
      pbEx.style.display = "block";
    }
    else{
      pbEx.style.display = "none";
    };
  });
});

function calcStutterVal(){
  var endVal = (2*(prRate)*Math.PI)/prRate;
  var frPoints = [];
  var rrPoints = [];
  var prPoints = [];
  let prStutter = 0;
  var rrStutter;
  var leastVal = 10000000;
  
  for(let i = 1; i<=endVal; i++){
    frPoints.push((2*Math.PI*i)/frRate);
    rrPoints.push((2*Math.PI*i)/rrRate);
    prPoints.push((2*Math.PI*i)/prRate);
  }

  prPoints.forEach(pt1 => 
  {
    frPoints.forEach(pt2 => {
        

      if(Math.abs(pt1 - pt2) < leastVal){
          leastVal = Math.abs(pt1 - pt2);
        }
      else{
          if(leastVal > (2*Math.PI)/prRate){
            prStutter += 1;
          }
        }
    })
    console.log(prStutter);
  });
  
  }
  

startButton.addEventListener("click", calcStutterVal);
