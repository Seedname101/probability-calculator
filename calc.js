function random(min, max) {
	return Math.floor((Math.random() * (max - min + 1)) + min);
}

let chance = 0.0041/20;
let opens = 10000;
let people = 10000;

let numbersPulled = [];
let amtOfNums = Math.floor(1 / chance);
let target = Math.floor(random(1, amtOfNums));
let totalHit = 0;
let timesHit = 0;
let achieved = false;

let simulation = true;

let mathChance = (1 - Math.pow((1 - chance), opens))*100;

if(simulation){
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
document.getElementById('sim').innerHTML = "Simulated Probability: " + simChance.toFixed(3) + "%";
document.getElementById('total').innerHTML = "Total Times  Hit: " + timesHit;
