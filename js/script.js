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
    });

