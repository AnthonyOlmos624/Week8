//CODING REQUIREMENTS FOR ASSIGNMENT
//----------------------------------------------------------
// create a menu app
//use at least one array
//use at least two classes
//your menu should have the options to create, view, and delete elements
//----------------------------------------------------------

//Menu games

//started out with leaving comments to myself to show how I would like to set 
//my menu up.

//class games
    // Name of game     
    // Type of genre 
//---------------------------------------------------------
    class Games{
    constructor(game, genre){
        this.game = game;
        this.genre = genre; 
    }
}
//---------------------------------------------------------
//Created two classes "game" and "Menu" which my "Menu" class would have the 
//array inside so that it follows the instructions that was given to us for this
//assignment.

//class Menu for game 
//---------------------------------------------------------
class Menu{
    constructor(){
       //games array 
       this.games = []; 
    }
  //for bellow will start creating the options to create, view, and delete elements.
 //in our "add games" section we will create a "new game" and prompt it for a 
 //"game" and "genre" then push "new game" into an array.  

//----------------------------------------------------------    
    
    //add games
    addGame(){
        let GamesGame = prompt (`Enter console Game:`);
        let GamesGenre = prompt (`Enter the game genre:`);
        this.games.push(new Games(GamesGame, GamesGenre));
    }
    
    //delete games
    deleteGame(){
        let gameIndex = prompt("Enter game index to OBLITERATE:")
        //used the "splice" method here so that it can pick something from our 
        //"gameIndex" and only delete 1 of the element in the array. 
        this.games.splice(gameIndex, 1);
    }

    //view games
    viewGames(){
        let displayGames = '';
        for(let i = 0; i < this.games.length; i++){
            
            displayGames += `
           ${i}) ${this.games[i].game} , ${this.games[i].genre}`
        }
        
        alert(`
        Video Game Library:
        ========================
        
        ${displayGames}
        `);
    }




        //see menu
        showMainMenu(){
            return prompt(`
            Main Menu:
            ====================
            0) Exit Menu
            1) Add Game
            2) Delete Game
            3) View All Games   
                
                `);
        }
    //start the menu
    commence(){
        let selection = this.showMainMenu();
        //used "while" method here for a selection that is not equalled to 0
        while(selection != 0){
            //used "switch" method to go through each case if selected. 
            switch(selection){

                case "1": this.addGame();
                break;
                
                case "2": this.deleteGame();
                break;

                case "3": this.viewGames();
                break;
                
                default: selection = 0;
            }
            selection = this.showMainMenu();
        }
        //if we chose the exiting option made an alert for user to be aware in
        //what they are doing. 
        alert("Exiting Menu...... HASTA LA VISTA BABY!")
    }

    
}

//-------------------------------------------------------
//instantiate the menu and invoke the start method    
//-------------------------------------------------------

let menu = new Menu ();

menu.commence(); 


//had a few errors that was fixed through the process one was a simple ":" 
//needed to be changed into ";". Another was missusing "()" and "{}" for my
//template litterals 