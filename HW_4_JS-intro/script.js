// Line for pleasant console experience
function line(){
	console.log("=================");
}
//general math functions
function algebra(a,b){
	console.log("Below we have math operations with numbers "+a+" and "+b);
	line();
	console.log('addition:'+(a+b));
	console.log('substraction:'+(a-b));
	console.log('multiplication:'+(a*b));
	console.log('division:'+(a/b));
	line();
}
// STARTING greating and instructions for all the available functions
line();
console.log("WELCOME");
line();
algebra(20,5);
line();
quadratic(3,2,5);
line()
console.log("access math function");
console.log("as follows:");
console.log("algebra(a,b)");
line();
console.log("access quadratic function");
console.log("as follows:");
console.log("quadratic(a,b,c)");
line();

// quadratic function
function quadratic(a,b,c){
// preparing all the necessary vars for quadric
	var doubleA=2*a;
	var compound=4*a*c;
	var b2=Math.pow(b,2);
	var discriminant=b2-compound;
	if(discriminant<0){
		console.log("Розв'язку немає, так як дискримінант < 0");
        }
	else{
		var dis_squr=Math.sqrt(discriminant);
		var x1=(-b+dis_squr)/doubleA;
		var x2=(-b-dis_squr)/doubleA;
		console.log(" Рівняння  " + a + "x2 + " + b + "x + " + c + " має два розвязки:");
		console.log('x1 = ' + x1);
		console.log('x2 = ' + x1);
		line();
		}
    }

// Now we start the game
var win = false;
var answer = false;
var jackpot = 10;
var userPrize = 0;
var gameSets = 3;
var currentSet = 0;
// random magic goes here
function random() {
  var rand = 1 - 0.5 + Math.random() * (5 - 1 + 1);
  rand = Math.round(rand);
  return rand;
}

// function of 1 trial
function trial() {
  currentSet += 1;
  var target = random();
  console.log(target);
  var trial = prompt("Вгадайте число від 1 до 5");
  if (trial == target) {
    userPrize += jackpot;
    answer = true;
    win = true;
    alert(
      "Ви виграли " + jackpot + ".Ваш загальний виграш становить " + userPrize
    );
    jackpot *= 2;
  } else {
    console.log("Ви програли");
    jackpot = Math.floor(jackpot / 2);
  }
}
// set of 3 trials
function set() {
  while (currentSet < 3 && win == false) {
    trial();
  }
  continueGame();
}
// This is main compiling function which launches the game
function launch() {
  var startGame = confirm("Чи бажаєте почати гру?");
  if (startGame === true) {
    set();
  } else {
    console.log("Сьогодні ви не виграли мільйон, а могли");
  }
}
// When set ends we ask to continue or restart
function continueGame() {
  if (win == true) {
    var question = confirm("Круто, бажаєте продовжити?)");
    if (question == true) {
      win = false;
      currentSet = 0;
      set();
    } else {
      alert("Допобачення!");
    }
  } else {
    question = confirm("На жаль, ви не виграли, хочете спробувати ще?");
    if (question == true) {
      win = false;
      currentSet = 0;
      jackpot = 10;
      userPrize = 0;
      set();
    } else {
      alert("Допобачення!");
    }
  }
}

// Finally we launch the game
launch();