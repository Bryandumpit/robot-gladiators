//pseudocode:
//GAME STATES
//"WIN" - Player's robot has defeated all enemy-robots
//  *Fight all enemy-robots
//  +Defeat each enemy-robot
//"LOSE" - Player's robot health is zero or less
/*
wrap the game logic in a startGame() function

when the player is defeated or ther are no more enemies, call an endGame() function that:
-    alerts the player's total stats
-    asks the player if they want to play again
-   if yes, call startGame() to restart the game

After the player skips or defeats an enemy (and there are still more robot to fight)
-   ask the player if they want to shop
-   if no, continue as normal
-   if yes, call the shop() function
-   in the shop() function, ask player if they want to refill health, upgrade attack or leave shop
-   if refill, subtract money points from player and increase health
-   if upgrade, subtract money points from player and incease attack power
-   if leave, alert goodbye and exit the function
-   if any other invalid option, call shop() again




*/


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
    
    //repeat and execute as lng as the enemy robot is alive
    while (playerHealth > 0 && enemyHealth>0){

    


        //alert players that they are starting the round
        //window.alert ("Welcome to Robot Gladiators!");

        var promptFight = window.prompt("Would you like to FIGHT or SKIP this batte? Enter 'FIGHT' or 'SKIP' to choose.");//scope-this variable only exists within this function. 
        //cannot be called outside of this function.

        if (promptFight === "skip" || promptFight === "SKIP"){
            window.alert (playerName + " has chosen to skip the fight!");
            
            var confirmSkip=window.confirm("Are you sure you want to quit?");

            if (confirmSkip) {
                window.alert (playerName + " has decided to skip this fight. Goodbye!");
                playerMoney = Math.max(0, playerMoney -10);
                console.log("playerMoney", playerMoney);
                break;
            }
            else {
                fight();
            }

        }

        //if player chooses to fight, then fight
        if (promptFight === "fight" || promptFight === "FIGHT") {
            //remove enemy's health by subtracting the amount set in the playerAttack variable
            var damage = randomNumber(playerAttack -3,playerAttack)
            enemyHealth= Math.max (0, enemyHealth - damage);
            
            console.log(
                playerName + " attacked " + enemyName + ". " + enemyName + " now has " + enemyHealth + " health remaining."
            );

            //check enemy's health
            if (enemyHealth <=0) {
                window.alert(enemyName + " has died!");

                playerMoney = playerMoney + 20;

                break;
            } else {
                window.alert(enemyName + " has " + enemyHealth + "health left.");
            }

            //remove player's health by subtracting the amount set in the enemyAttack variable
            
            var damage = randomNumber (enemyAttack-3, enemyAttack);
            playerHealth = Math.max(0, playerHealth-damage);

            console.log(
                enemyName + " attacked " + playerName + ". " + playerName + " now has " + playerHealth + " health remaining."
            );

            //check player's health
            if (playerHealth <=0) {
                window.alert(playerName + " has died!");
                break;
            } else {
                window.alert(playerName + " has " + playerHealth + "health left.");
            };
            console.log (playerMoney);
            //if player chooses to skip, then skip
        }
        

         else {
            window.alert("You need to choose a valid option. Try again!");
        };
    };
};

var startGame = function(){
//reset player stats
    playerHealth = 100;
    playerAttack = 10;
    playerMoney = 10;

    for (var i=0; i < enemyNames.length; i++){
        if (playerHealth > 0){
            window.alert("Welcome to Roboto Gladiators! Round " + (i+1));
            var pickedEnemyName = enemyNames[i];
            
            enemyHealth= randomNumber(40,60);
        
            fight(pickedEnemyName);
            //if we're not at last enemy in the array
            if (playerHealth>0 && i<enemyNames.length - 1){
                //ask if the player wants to use the store before next round
                var storeConfirm = window.confirm("The fight is over, visit the store before the next round?")    
                
                //if yes, take them to the store() function
                if (storeConfirm) {
                    shop();
                }
            }
        } else {
            window.alert("You have lost your robot in battle! Game Over!");
            break;
        }
        
        //enemyNames[i] calls a value in array enemyNames with the index of i, because the array is in a for loop; the index i will be incremented  as long as the condition (i < enemyNames.length) is met.
        //function fight() was called and parameter 'enemyRobot' was set to equal 'enemyNames' (which was defined as an array)
    }
    //after the loop ends, player is either out of health or enemies to fight, so run the endGame function
    endGame();

};



//function to end the entire game
var endGame = function () {
    //if player is still alive, player wins!
    if (playerHealth > 0) {
    window.alert("Great job, you've survived the game! You now have a score of " + playerMoney + ".");
    } else  {
    window.alert ("You've lost your robot in battle.");
    }

    var playAgainConfirm = window.confirm ("Would you like to play again?");

    if (playAgainConfirm) {
            //restart the game
            startGame ();
    }
    else{
        window.alert("Thank you for playing Robot Gladiators! Come back soon!")
    }
};


var shop = function () {
    //ask player what they'd like to to do
    var shopOptionPrompt=window.prompt(
        "Would you liek to REFILL you health, UPGRADE your attack, or LEAVE the store? Please enter one: REFILL, UPGRADE, or LEAVE to make a choice."
    );
    
        // use switch to carry out action
    switch (shopOptionPrompt) {

        case "REFILL":
        case "refill":
            if (playerMoney>=7){
                window.alert("Refilling player's health by 20 for 7 dollars.");
                // increase health and decrease money
                playerHealth = playerHealth +20;
                playerMoney = playerMoney -7;

            } 
            else{
                window.alert("You don't have enough money!");
            }
       
            break;

        case "UPGRADE":
        case "upgrade":
            if (playerMoney>=7){
                window.alert("Upgrading player's attack by 6 for 7 dollars.")

                //increase attack and decrease money
                playerAttack = playerAttack + 6;
                playerMoney = playerMoney - 7;
            }
            else(
                window.alert("You don't have enough money!")
            )
            break;

        case "LEAVE":
        case "leave":
            window.alert ("Leaving the store.");
            break;

        default:
        window.alert("You did not pick a valid option. Try again.");
    
        // call shop() again to force player to pick a valid option
        shop();
        break;
    }

};

//function to generate a random numeric value
var randomNumber = function(min, max) {
    var value = Math.floor (Math.random() * (max-min+1) + min);

    return value;
};

//starts the game when the page loads. without this line nothing is actually calling the startgame() which calls the fight().
startGame();