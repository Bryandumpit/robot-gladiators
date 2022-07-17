//pseudocode:
//GAME STATES
//"WIN" - Player's robot has defeated all enemy-robots
//  *Fight all enemy-robots
//  +Defeat each enemy-robot
//"LOSE" - Player's robot health is zero or less

var playerName = "bryan"; //window.prompt("What is your robot's name")
var playerHealth = 100;
var playerAttack = 10;
var playerMoney = 10;

//You can also log multiple values at once like this
//console.log(playerName, playerAttack, playerHealth);

var enemyNames =["Roborto", "Amy Android", "Robo Trumble"];
var enemyHealth = 50;
var enemyAttack = 12;

//console.log(enemyNames);
//console.log(enemyNames[0]);
//console.log(enemyNames[1]);
//console.log(enemyNames[2]);

//for(var i = 0; i<enemyNames.length; i++) {
//    console.log (enemyNames[i]);
//    console.log (i);
//    console.log (enemyNames[i] + " is at " + i + " index");
//}
//console logged apple0 apple1 apple2--which means it iterated 3 times (first iteration is apple0)

var fight = function (enemyName) {//think of 'enemyName' as an arbitrary name for a parameter the function will use. 
    //i.e if you call fight() later on and put fight(enemyNames), you entered a value of 'enemyNames' (which is an array) into the parameter you named enemyName.
    
    //alert players that they are starting the round
    window.alert ("Welcome to Robot Gladiators!");

    var promptFight = window.prompt("Would you like to FIGHT or SKIP this batte? Enter 'FIGHT' or 'SKIP' to choose.");//scope-this variable only exists within this function. cannot be called outside of this function.

    //if player chooses to fight, then fight
    if (promptFight === "fight" || promptFight === "FIGHT") {
        //remove enemy's health by subtracting the amount set in the playerAttack variable
        enemyHealth= enemyHealth - playerAttack;
        console.log(
            playerName + " attacked " + enemyName + ". " + enemyName + " now has " + enemyHealth + " health remaining."
        );

        //check enemy's health
        if (enemyHealth <=0) {
            window.alert(enemyName + " has died!");
        } else {
            window.alert(enemyName + " has " + enemyHealth + "health left.");
        }

        //remove player's health by subtracting the amount set in the enemyAttack variable
        playerHealth = playerHealth - enemyAttack;
        console.log(
            enemyName + " attacked " + playerName + ". " + playerName + " now has " + playerHealth + " health remaining."
        );

        //check player's health
        if (playerHealth <=0) {
            window.alert(playerName + " has died!");
        } else {
            window.alert(playerName + " has " + playerHealth + "health left.");
        };
        console.log (playerMoney);
        //if player chooses to skip, then skip
    }
    else if (promptFight === "skip" || promptFight === "SKIP"){
        window.alert (playerName + " has chosen to skip the fight!");
        //confirm if the player wants to skip
        var confirmskip = window.confirm ("Are you sure you want to quit?");

        //if yes (true), leave fight
        if (confirmskip) {
            window.alert(playerName + " has decided to skip this fight. Goodbye!");
            //subtract money from playerMoney for skipping
            playerMoney = playerMoney - 2;
            console.log(playerMoney);
        }
        //if no (false), ask question again by running fight() again
        else {
            fight();
        }

    } else {
        window.alert("You need to choose a valid option. Try again!");
    };
};

for (var i=0; i < enemyNames.length; i++){
    fight(enemyNames[i]);
    //enemyNames[i] calls a value in array enemyNames with the index of i, because the array is in a for loop; the index i will be incremented  as long as the condition (i < enemyNames.length) is met.
    //function fight() was called and parameter 'enemyRobot' was set to equal 'enemyNames' (which was defined as an array)
}


