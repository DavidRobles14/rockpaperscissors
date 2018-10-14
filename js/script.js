// *************************** YOUR CODE BELOW *******************************
//******************TEST EARLY AND OFTEN USING console.log() ******************
//****************** SERIOUSLY TEST USING console.log()!!! ******************

//GLOBAL VARIABLES
/* global $ */



// DOCUMENT READY FUNCTION BELOW
var userChoice = "";
var computerChoices = ["rock","paper","scissors"];
var computerChoice = "";
var winner = "";







    $("#shoot").click(function()
    {
        userChoice = $("#input").val();
        computerChoice = Math.floor(Math.random()*computerChoices.length);
        $("#userChoice").text(userChoice);
        $("#computerChoice").text(computerChoices[computerChoice]);
        $("#input").val("");
        if(userChoice == "rock" || userChoice == "paper" || userChoice == "scissors")
        {
            if(userChoice == "rock" && computerChoices[computerChoice] == "scissors" || userChoice == "paper" && computerChoices[computerChoice] == "rock" || userChoice == "scissors" && computerChoices[computerChoice] == "paper")
            {
                winner = name;
                $("#winner").text(winner);
            }
            if(userChoice == "rock" && computerChoices[computerChoice] == "paper" || userChoice == "paper" && computerChoices[computerChoice] == "scissors" || userChoice == "scissors" && computerChoices[computerChoice] == "rock")
            {
                winner = "Computer";
                $("#winner").text(winner);
            }
            if(userChoice == "rock" && computerChoices[computerChoice] == "rock" || userChoice == "paper" && computerChoices[computerChoice] == "paper" || userChoice == "scissors" && computerChoices[computerChoice] == "scissors")
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

