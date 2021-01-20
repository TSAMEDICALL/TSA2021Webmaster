function ready(){
    let stack = document.getElementById('menu');

    let isClosed = true;
    stack.onclick = function(){
        console.log("Block");
        if(isClosed){
            document.getElementById('side-bar').style.width = "200px"; 
            document.getElementById('home').style.display = "block";
            document.getElementById('getStarted').style.display = "block";
            document.getElementById('sources').style.display = "block";
            document.getElementById('copyright').style.display = "block";
            document.getElementById('worklog').style.display = "block";
            isClosed = false;
        } else {
            document.getElementById('side-bar').style.width = "0px"; 
            document.getElementById('home').style.display = "none";
            document.getElementById('getStarted').style.display = "none";
            document.getElementById('sources').style.display = "none";
            document.getElementById('copyright').style.display = "none";
            document.getElementById('worklog').style.display = "none";
            isClosed = true;
        }
        stack.classList.toggle("change");
    }

    let home = document.getElementById('home');

    home.onclick = function(){
        console.log("Home button click");
        window.location.href = "website.html";
    }

    let start = document.getElementsByClassName('startButton');

    for(var i = 0; i < start.length; i++){
        start[i].onclick = function(){
            console.log("Get Started clicked");
            window.location.href = "getStarted.html";
        }
    }

    let submit = document.getElementById('submit_button');
    if(submit){
        submit.onclick = function(){
            console.log("Appointment clicked");
            window.location.href = "submitDone.html";
        }
    }

    let reference = document.getElementById('reference');
    if(reference){
        reference.onclick = function(){
            console.log("Reference clicked");
            window.location.href = "reference.html";
        }
    }

    let meeting = document.getElementById('meeting');
    if(meeting){
        meeting.onclick = function(){
            console.log("Meeting clicked");
            window.location.href = "doctor.html";
        }
    }
    let sources = document.getElementById('sources');
    if(sources){
        sources.onclick = function(){
            console.log("Sources clicked");
            window.location.href = "sources.html";
        }
    }
    
    let worklog = document.getElementById('worklog');
    if(worklog){
        worklog.onclick = function(){
            console.log("Worklog clicked");
            window.location.href = "worklog.html";
        }
    }

    let copyright = document.getElementById('copyright');
    if(copyright){
        copyright.onclick = function(){
            console.log("Copyright clicked");
            window.location.href = "copyright.html";
        }
    }
}

function doctorPage(id){
    window.location.href = id + ".html";
}

document.addEventListener("DOMContentLoaded", ready);