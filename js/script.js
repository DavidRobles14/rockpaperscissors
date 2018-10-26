// *************************** YOUR CODE BELOW *******************************
//******************TEST EARLY AND OFTEN USING console.log() ******************
//****************** SERIOUSLY TEST USING console.log()!!! ******************

//GLOBAL VARIABLES
/* global $ */



// DOCUMENT READY FUNCTION BELOW
var userChoice = "";
var input = "";
var computerChoices = ["rock","paper","scissors","lizard","spock"];
var computerChoice = "";
var winner = "";
var name = "";
var wins = 0;
var losses = 0;







    $("#shoot").click(function()
    {
        name = $("#name").val();
        input = $("#input").val();
        userChoice = input.toLowerCase();
        computerChoice = Math.floor(Math.random()*computerChoices.length);
        $("#userChoice").text(userChoice);
        $("#computerChoice").text(computerChoices[computerChoice]);
        $("#input").val("");
        if(userChoice == "rock" || userChoice == "paper" || userChoice == "scissors" || userChoice == "lizard" || userChoice == "spock")
        {
            if(userChoice == "rock" && computerChoices[computerChoice] == "scissors" || userChoice == "rock" && computerChoices[computerChoice] == "lizard"
            || userChoice == "paper" && computerChoices[computerChoice] == "rock" || userChoice == "paper" && computerChoices[computerChoice] == "spock" 
            || userChoice == "scissors" && computerChoices[computerChoice] == "paper" || userChoice == "scissors" && computerChoices[computerChoice] == "lizard" 
            || userChoice == "lizard" && computerChoices[computerChoice] == "spock" || userChoice == "lizard" && computerChoices[computerChoice] == "paper" 
            || userChoice == "spock" && computerChoices[computerChoice] == "scissors" || userChoice == "spock" && computerChoices[computerChoice] == "rock")
            {
                if(name == "")
                {
                    winner = "user";
                    $("#winner").text(winner);
                    wins = wins + 1;
                    $("#wins").text(wins);
                }
                else
                {
                    winner = name;
                    $("#winner").text(winner);
                    wins = wins + 1;
                    $("#wins").text(wins);
                }
            }
            else if(userChoice == "rock" && computerChoices[computerChoice] == "paper" || userChoice == "rock" && computerChoices[computerChoice] == "spock" || userChoice == "paper" && computerChoices[computerChoice] == "scissors" || userChoice == "paper" && computerChoices[computerChoice] == "lizard" || userChoice == "scissors" && computerChoices[computerChoice] == "rock" || userChoice == "scissors" && computerChoices[computerChoice] == "spock" || userChoice == "lizard" && computerChoices[computerChoice] == "rock" || userChoice == "lizard" && computerChoices[computerChoice] == "scissors" || userChoice == "spock" && computerChoices[computerChoice] == "lizard" || userChoice == "spock" && computerChoices[computerChoice] == "paper")
            {
                winner = "Computer";
                $("#winner").text(winner);
                losses = losses + 1;
                $("#losses").text(losses);
            }
            else if(userChoice == "rock" && computerChoices[computerChoice] == "rock" || userChoice == "paper" && computerChoices[computerChoice] == "paper" || userChoice == "scissors" && computerChoices[computerChoice] == "scissors" || userChoice == "lizard" && computerChoices[computerChoice] == "lizard" || userChoice == "spock" && computerChoices[computerChoice] == "spock") 
            {
                winner = "neither";
                $("#winner").text(winner);
            }
        }
        
        else
        {
            winner = "ERROR";
            $("#winner").text(winner);
            $("#userChoice").text("");
            $("#computerChoice").text("");
        }
    });

