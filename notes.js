// JavaScript Functions

/////////////////////////////////////////////
var warrior = {
  name: 'Super Tuffy',
  attack: 70,
  defence: 55,
  mana: 100
}

function levelUp(prop, val) {
  warrior[prop] += val;
}

levelUp('attack', 2);
levelUp('defence', 8);
levelUp('mana', 17);

console.log(warrior);

/////////////////////////////////////////////
function toCelsius(f) {
  var temp = (5 / 9) * (f - 32);
  return temp.toFixed(2);
}

var cel = toCelsius(46);

var weather = 'The temperature outside is ' + cel + ' celsius!'

// console.log(weather);


/////////////////////////////////////////////
function calcArea(w, l) {
  return w * l;
}

var kitchenArea = calcArea(15, 18);
var bedroomArea = calcArea(12, 10);

// console.log(kitchenArea);
// console.log(bedroomArea);