require("dotenv").config();

var keys = require("./keys.js");
var twitter = require("twitter");
var spotify = require("spotify");
var omdb = require("omdb")

var fs = require("fs")
var request = require("request");

var twitterKeys = keys.twitterKeys

var commandArgs = process.argv;
var liriInput = commandArgs[2];
var space = "\n" + "================================";

var liriCMD = '';
for (var i = 3; i<commandArgs.length; i ++) {
    liriCMD += commandArgs[i] + ' '
};

// function GetTwitter(){
    // append liriCMD to logs.txt

    // initialize twitter account
    // var user = new Twitter(twitterKeys)

    // retrieve the last 20 tweets

    // display last 20 tweets in cli

    // write the response to logs.txt
// }

// function getSpotify(){
    // append liriCMD to a file

    // if no song is was chosen, default to Friday (Rebecca Black)

    // display search results artist, song, album, spotify link

    // log response to logs.txt
//}

// function getOMDB(){
    // append liriCMD to logs.txt

    // if no movie was chosen, default to Edward Scissor Hands

    // display information about movie, title, year, imdb & rotten ratings, and more...

    // log response to logs.txt
//}

// function what_it_is(){
    // append liriCMD to logs.txt    

    // read random.txt file and `+` "node liri.js" + "text-in-file"

    // display results from random.txt 

    // log response to logs.txt
//}

// `if` statement that determines which function to run based on liriInput
// `if (liriInput === "my-tweets"){
    // getTwitter();
    //}, else if (...)...
//}

// display available liriInput options for user