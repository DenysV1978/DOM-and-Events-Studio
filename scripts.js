// Write your JavaScript code here.
// Remember to pay attention to page loading!

window.addEventListener("load", function() {
    console.log("Window loaded!");
});


function init () {

// window.addEventListener("load", function() {
//         console.log("Window loaded!");
//     });

let buttonTakeOff=document.getElementById("takeoff");
console.log( typeof buttonTakeOff);
buttonTakeOff.addEventListener("click", function(event) {
    if(window.confirm("Confirm that the shuttle is ready for takeoff.")) {
        document.getElementById("flightStatus").innerHTML="Shuttle in flight.";
        document.getElementById("shuttleBackground").style.backgroundColor="blue";
        document.getElementById("spaceShuttleHeight").innerHTML=10000;
    };

});

let buttonLanding=document.getElementById("landing");
//console.log(typeof buttonLanding);
buttonLanding.addEventListener("click", function(event) {
    window.alert("The shuttle is landing. Landing gear engaged.");
    document.getElementById("flightStatus").innerHTML="The shuttle has landed.";
    document.getElementById("shuttleBackground").style.backgroundColor="green";
    document.getElementById("spaceShuttleHeight").innerHTML=0;
    document.getElementById("rocket").style.left="0px";
    document.getElementById("rocket").style.top="255px";
});

document.getElementById("missionAbort").addEventListener("click", function() {
    if(window.confirm("Confirm that you want to abort the mission.")) {
        document.getElementById("flightStatus").innerHTML="Mission aborted.";
        document.getElementById("shuttleBackground").style.backgroundColor="green";
        document.getElementById("spaceShuttleHeight").innerHTML=0;
        document.getElementById("rocket").style.left="0px";
        document.getElementById("rocket").style.top="255px";



    };



});

document.getElementById("left").addEventListener("click", function() {
    if(Number(document.getElementById("rocket").style.left.slice(0, (document.getElementById("rocket").style.left.length-2)))>-180) {
    let oldPosition=Number(document.getElementById("rocket").style.left.slice(0, (document.getElementById("rocket").style.left.length-2)));
    console.log(oldPosition)
    let newPosition=oldPosition-10;
    document.getElementById("rocket").style.left=`${newPosition}px`;
    console.log(newPosition);
    console.log(document.getElementById("rocket").style.left);
    };
});

document.getElementById("right").addEventListener("click", function() {
    if(Number(document.getElementById("rocket").style.left.slice(0, (document.getElementById("rocket").style.left.length-2)))<180) {
    oldPosition=Number(document.getElementById("rocket").style.left.slice(0, (document.getElementById("rocket").style.left.length-2)));
    console.log(oldPosition)
    newPosition=oldPosition+10;
    document.getElementById("rocket").style.left=`${newPosition}px`;
    console.log(newPosition);
    console.log(document.getElementById("rocket").style.left);
    };
});


document.getElementById("up").addEventListener("click", function() {
    if(Number(document.getElementById("rocket").style.top.slice(0, (document.getElementById("rocket").style.top.length-2)))>-5) {
    oldPosition=Number(document.getElementById("rocket").style.top.slice(0, (document.getElementById("rocket").style.top.length-2)));
    console.log(oldPosition)
    newPosition=oldPosition-10;
    document.getElementById("rocket").style.top=`${newPosition}px`;
    console.log(newPosition);
    console.log(document.getElementById("rocket").style.top);
    };
});


document.getElementById("down").addEventListener("click", function() {
    if(Number(document.getElementById("rocket").style.top.slice(0, (document.getElementById("rocket").style.top.length-2)))<255) {
    oldPosition=Number(document.getElementById("rocket").style.top.slice(0, (document.getElementById("rocket").style.top.length-2)));
    console.log(oldPosition)
    newPosition=oldPosition+10;
    document.getElementById("rocket").style.top=`${newPosition}px`;
    console.log(newPosition);
    console.log(document.getElementById("rocket").style.top);
    };
});






};



window.onload = init;
