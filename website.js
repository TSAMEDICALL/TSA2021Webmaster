function ready(){
    let stack = document.getElementById('menu');

    let isClosed = true;
    stack.onclick = function(){if(isClosed){
            document.getElementById('side-bar').style.width = "200px"; 
            document.getElementById('home').style.display = "block";
            document.getElementById('getStarted').style.display = "block";
            document.getElementById('sources').style.display = "block";
            document.getElementById('copyright').style.display = "block";
            document.getElementById('worklog').style.display = "block";
            document.getElementById('about').style.display = "block";
            isClosed = false;
        } else {
            document.getElementById('side-bar').style.width = "0px"; 
            document.getElementById('home').style.display = "none";
            document.getElementById('getStarted').style.display = "none";
            document.getElementById('sources').style.display = "none";
            document.getElementById('copyright').style.display = "none";
            document.getElementById('about').style.display = "none";
            document.getElementById('worklog').style.display = "none";
            isClosed = true;
        }
        stack.classList.toggle("change");
    }

    let home = document.getElementById('home');

    home.onclick = function(){
        window.location.href = "website.html";
    }

    let start = document.getElementsByClassName('startButton');

    for(var i = 0; i < start.length; i++){
        start[i].onclick = function(){
            window.location.href = "getStarted.html";
        }
    }

    let submit = document.getElementById('submit_button');
    if(submit){
        submit.onclick = function(){
            window.location.href = "submitDone.html";
        }
    }

    let reference = document.getElementById('reference');
    if(reference){
        reference.onclick = function(){

            window.location.href = "reference.html";
        }
    }

    let quickStart = document.getElementById('quickStart');
    if(quickStart){
        quickStart.onclick = function(){

            window.location.href = "optiondoctor.html";
        }
    }

    let meeting = document.getElementById('meeting');
    if(meeting){
        meeting.onclick = function(){
           window.location.href = "doctor.html";
        }
    }
    let sources = document.getElementById('sources');
    if(sources){
        sources.onclick = function(){
           window.location.href = "sources.html";
        }
    }
    
    let worklog = document.getElementById('worklog');
    if(worklog){
        worklog.onclick = function(){
           window.location.href = "worklog.html";
        }
    }

    let copyright = document.getElementById('copyright');
    if(copyright){
        copyright.onclick = function(){
            window.location.href = "copyright.html";
        }
    }

    let about = document.getElementById('about');
    if(about){
        about.onclick = function(){
            window.location.href = "aboutMediCall.html";
        }
    }
}

function doctorPage(id){
    window.location.href = id + ".html";
}

document.addEventListener("DOMContentLoaded", ready);