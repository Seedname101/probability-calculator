document.getElementById("people").style.display = "none";
var sim = false;
function peopleToggle(){
  var x = document.getElementById("people");
  if (x.style.display === "none") {
    x.style.display = "block";
    sim = true;
  } else {
    x.style.display = "none";
    sim = false;
  }
}

function random(min, max) {
	return Math.floor((Math.random() * (max - min + 1)) + min);
}


function getData(){
  let chance = Math.abs(document.querySelectorAll('input')[0].value)/100;
  let opens = Math.floor(document.querySelectorAll('input')[1].value);
  let people = Math.floor(document.querySelectorAll('input')[3].value);
  
  let numbersPulled = [];
  let amtOfNums = Math.floor(1 / chance);
  let target = Math.floor(random(1, amtOfNums));
  let totalHit = 0;
  let timesHit = 0;
  let achieved = false;

  let mathChance = (1 - Math.pow((1 - chance), opens))*100;

  if(sim){
      for(let person = 0; person < people; person ++){

          for(let i = 0; i < opens; i ++){
              numbersPulled.push(Math.floor(random(1, amtOfNums)));
          }


          for(let i = 0; i < amtOfNums; i++){
              if(numbersPulled[i] == target){
                  timesHit ++;
                  achieved = true;
              }
          }

          if(achieved){
              totalHit ++;
          }

          numbersPulled = [];
          achieved = false;

      }
  } 

  let simChance = 100*(totalHit/people);
  document.getElementById('math').innerHTML = "Mathematical Probability: " + mathChance.toFixed(3) + "%";
  
  if(sim){
    document.getElementById('sim').innerHTML = "Simulated Probability: " + simChance.toFixed(3) + "%";
    document.getElementById('total').innerHTML = "Total Times  Hit: " + timesHit;
  }
}


