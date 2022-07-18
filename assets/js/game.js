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




//console.log(enemy.names);
//console.log(enemy.names[0]);
//console.log(enemy.names[1]);
//console.log(enemy.names[2]);

//for(var i = 0; i<enemy.names.length; i++) {
//    console.log (enemy.names[i]);
//    console.log (i);
//    console.log (enemy.names[i] + " is at " + i + " index");
//}
//console logged apple0 apple1 apple2--which means it iterated 3 times (first iteration is apple0)

var fight = function (enemy) {//think of 'enemy.name' as an arbitrary name for a parameter the function will use. 
    //i.e if you call fight() later on and put fight(enemy.names), you entered a value of 'enemy.names' (which is an array) into the parameter you named enemy.name.
    
    //repeat and execute as lng as the enemy robot is alive
    while (playerInfo.health > 0 && enemy.health>0){

    


        //alert players that they are starting the round
        //window.alert ("Welcome to Robot Gladiators!");

        var promptFight = window.prompt("Would you like to FIGHT or SKIP this batte? Enter 'FIGHT' or 'SKIP' to choose.");//scope-this variable only exists within this function. 
        //cannot be called outside of this function.

        if (promptFight === "skip" || promptFight === "SKIP"){
            window.alert (playerInfo.name + " has chosen to skip the fight!");
            
            var confirmSkip=window.confirm("Are you sure you want to quit?");

            if (confirmSkip) {
                window.alert (playerInfo.name + " has decided to skip this fight. Goodbye!");
                playerInfo.money = Math.max(0, playerInfo.money -10);
                console.log("playerInfo.money", playerInfo.money);
                break;
            }
            else {
                fight();
            }

        }

        //if player chooses to fight, then fight
        if (promptFight === "fight" || promptFight === "FIGHT") {
            //remove enemy's health by subtracting the amount set in the playerInfo.attack variable
            var damage = randomNumber(playerInfo.attack -3,playerInfo.attack)
            enemy.health= Math.max (0, enemy.health - damage);
            
            console.log(
                playerInfo.name + " attacked " + enemy.name + ". " + enemy.name + " now has " + enemy.health + " health remaining."
            );

            //check enemy's health
            if (enemy.health <=0) {
                window.alert(enemy.name + " has died!");

                playerInfo.money = playerInfo.money + 20;

                break;
            } else {
                window.alert(enemy.name + " has " + enemy.health + "health left.");
            }

            //remove player's health by subtracting the amount set in the enemy.attack variable
            
            var damage = randomNumber (enemy.attack-3, enemy.attack);
            playerInfo.health = Math.max(0, playerInfo.health-damage);

            console.log(
                enemy.name + " attacked " + playerInfo.name + ". " + playerInfo.name + " now has " + playerInfo.health + " health remaining."
            );

            //check player's health
            if (playerInfo.health <=0) {
                window.alert(playerInfo.name + " has died!");
                break;
            } else {
                window.alert(playerInfo.name + " has " + playerInfo.health + "health left.");
            };
            console.log (playerInfo.money);
            //if player chooses to skip, then skip
        }
        

         else {
            window.alert("You need to choose a valid option. Try again!");
        };
    };
};

var startGame = function(){
//reset player stats
    playerInfo.reset();

    for (var i=0; i < enemyInfo.length; i++){
        if (playerInfo.health > 0){
            window.alert("Welcome to Roboto Gladiators! Round " + (i+1));
            var pickedEnemyObj = enemyInfo[i];
            
            pickedEnemyObj.health= randomNumber(40,60);
        
            fight(pickedEnemyObj);
            //if we're not at last enemy in the array
            if (playerInfo.health>0 && i<enemyInfo.length - 1){
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
        
        //enemy.names[i] calls a value in array enemy.names with the index of i, because the array is in a for loop; the index i will be incremented  as long as the condition (i < enemy.names.length) is met.
        //function fight() was called and parameter 'enemyRobot' was set to equal 'enemy.names' (which was defined as an array)
    }
    //after the loop ends, player is either out of health or enemies to fight, so run the endGame function
    endGame();

};



//function to end the entire game
var endGame = function () {
    //if player is still alive, player wins!
    if (playerInfo.health > 0) {
    window.alert("Great job, you've survived the game! You now have a score of " + playerInfo.money + ".");
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
            if (playerInfo.money>=7){
                window.alert("Refilling player's health by 20 for 7 dollars.");
                // increase health and decrease money
                playerInfo.health = playerInfo.health +20;
                playerInfo.money = playerInfo.money -7;

            } 
            else{
                window.alert("You don't have enough money!");
            }
       
            break;

        case "UPGRADE":
        case "upgrade":
            if (playerInfo.money>=7){
                window.alert("Upgrading player's attack by 6 for 7 dollars.")

                //increase attack and decrease money
                playerInfo.attack = playerInfo.attack + 6;
                playerInfo.money = playerInfo.money - 7;
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

var playerInfo = {
    name: "Bryan",
    health:100,
    attack:10,
    money: 10,
    reset: function(){
        this.health=100;
        this.money=10;
        this.attack=10;
    },
    refillHealth: function(){
        if (this.money>=7) {
            window.alert ("Refilling player's health by 20 for 7 dollars.");
            this.health +=2;
            this.money-=7;
        }
        else{
            window.alert("You don't have enough money!")
        }
    },
    upgradeAttack: function (){
        if (this.money>=7){
            window.alert ("Upgrading player's attack by 6 for 7 dollars");
            this.attack+=6;
            this.moeny-=7;
        }
        else{
            window.alert ("You don't have enough money!");
        }
        
    }
};

//You can also log multiple values at once like this
//console.log(playerInfo.name, playerInfo.attack, playerInfo.health);

var enemyInfo = [
    {name: "Roborto", attack: randomNumber(10.14)}, 
    {name: "Amy Android", attack: randomNumber(10,14)}, 
    {name: "Robo Trumble", attack: randomNumber(10,14)}
];

//starts the game when the page loads. without this line nothing is actually calling the startgame() which calls the fight().
startGame();