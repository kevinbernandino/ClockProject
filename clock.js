// Various alarms throughout the day 

var wakeuptime = 7;
var noon = 12;
var lunchtime = 12;
var naptime = lunchtime + 2;
var partytime;
var evening = 18;
var dinnertime = evening + 1;
var bedtime = 22;

var showCurrentTime = function()
{

// display time string
    var clock = document.getElementById('clock');

    var currentTime = new Date();

    var hours = currentTime.getHours();
    var minutes = currentTime.getMinutes();
    var seconds = currentTime.getSeconds();
    var meridian = "AM";

//Set hours
    if(hours >= noon)
    {
       meridian = "PM";
    }

    if(hours > noon)
    { 
       hours = hours - 12;
    }

    // Set minutes
    if(minutes < 10)
    {
        minutes = "0" + minutes;
    }

    /// Set seconds
    if (seconds < 10)
    {
        seconds = "0" + seconds;
    }

    // puts together the string to display time
    var clockTime = hours + ':' + minutes + ':' + seconds + " " + meridian + "!"

    clock.innerText = clockTime;
};

// clock increments on its own 
var updateClock = function()
{
    var time = new Date().getHours();
    var messageText;
    var image = ""

    var timeEventJS = document.getElementById("timeEvent");
    var imageJS = document.getElementById('image')

    if(time == partytime)
    {
        image = "";
        messageText = "LITTY!";
    }
    else if (time == wakeuptime)
    {
        image = "";
        messgeText = "DOOD WAKE UP";
    }
    else if (time == lunchtime)
    {
        image = "";
        messageText = "Get ya grub on!";
    }
    else if (time == naptime)
    {
        image = "";
        messageText = "Aight bruv go to sleep";
    }
    else if (time < noon)
    {
    image = "";
    messageText = "Mornin";
    }
    else if ( time >= evening)
    {
        image = "";
        messageText = "Tf its evening?";
    }
    else if( time == dinnertime)
    {
        image ="";
        messageText = "Time to eat dinner! Grab a beer";
    }
    else if( time == bedtime)
    {
        image = "";
        messageText = "Tf you still up? go to sleep"
    }
    else 
    {
        image = "";
        messageText = "Ayo TIME TO DRINK COFFEE";
    }
    console.log(messageText);
    timeEventJS.innerText = messageText;
    image.src = image;

    showCurrentTime();
};
updateClock();

// Get clock to increment a second
var oneSecond = 1000;
setInterval( updateClock, oneSecond);

// Get Party Time Button to function
var partyButton = document.getElementById("partyTimeButton");

var partyEvent = function()
{
    if (partytime < 0)
    {
        partytime = new Date().getHours();
        partyTimeButton.innerText = "Party Over!";
        partyTimeButton.style.backgroundColor = "#0A8DAB"
    }
    else
    {
        partytime = -1;
        partyTimeButton.innerText = "Party Time!";
        partyTimeButton.style.backgroundColor = "#222";
    }
};

partyButton.addEventListener("click", partyEvent);
partyEvent();

// Activate Wake-Up Selector
var wakeUpTimeSelector = document.getElementById("wakeUpTimeSelector");

var wakeUpEvent = function()
{
    wakeuptime = wakeUpTimeSelector.value;
};

wakeUpTimeSelector.addEventListener("change", wakeUpEvent);

// Activate Lunch selector
var lunchTimeSelector = document.getElementById("lunchTimeSelector");

var lunchEvent = function()
{
    lunchtime = lunchTimeSelector.value;
};

lunchTimeSelector.addEventListener("change", lunchEvent);

// Activates Nap-Time Selector
var napTimeSelector = document.getElementById("napTimeSelector");

var napEvent = function()
{
    naptime = napTimeSelector.value;
};

napTimeSelector.addEventListener("change", napEvent);

// Activates Dinnertime Selector
var dinnerTimeSelector = document.getElementById("dinnerTimeSelector");

var dinnerEvent = function()
{
    dinnertime = dinnerTimeSelector.value;
};

dinnerTimeSelector.addEventListener("change",dinnerEvent);

// Activates Bedtime Selector

var bedTimeSelector = document.getElementById("bedTimeSelector");

var bedEvent = function()
{
    bedtime = bedTimeSelector.value;
};

bedTimeSelector.addEventListener("change", bedEvent);