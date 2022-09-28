var btn1 = document.getElementById("btn1");
var btn2 = document.getElementById("btn2");
var btn3 = document.getElementById("btn3");
var btn4 = document.getElementById("btn4");
var btn5 = document.getElementById("btn5");
var btn6 = document.getElementById("btn6");
var clicks = document.getElementById("clicks");
var start_btn = document.getElementById("start_btn");
var reset_btn = document.getElementById("reset_btn");
var table = document.getElementById("table");
var time = document.getElementById("time");
var player = document.getElementById("player");
var eng = document.getElementById("eng");
var hr = document.getElementById("hr");
var h1_txt = document.getElementById("h1");
var leaderboard_txt = document.getElementById("leaderboard");
var place_txt = document.getElementById("place");
var name_txt = document.getElementById("name");
var score_txt = document.getElementById("score");
var time_txt = document.getElementById("time_txt");
var clicks_txt = document.getElementById("clicks_txt");
var description_txt = document.getElementById("description_txt");
var desc_txt1 = document.getElementById("desc_txt1");
var desc_txt2 = document.getElementById("desc_txt2");
var desc_txt3 = document.getElementById("desc_txt3");
var desc_txt4 = document.getElementById("desc_txt4");
var desc_txt5 = document.getElementById("desc_txt5");
var desc_txt6 = document.getElementById("desc_txt6");
var desc_txt7 = document.getElementById("desc_txt7");
var desc_txt8 = document.getElementById("desc_txt8");
var desc_txt9 = document.getElementById("desc_txt9");
var footer_txt = document.getElementById("footer_txt");
var players = [];
var random = 0;
var last = 0;

function click1(){
    clicks.innerHTML++;
    last = 1;
    random = Math.floor(Math.random() * 6) + 1;
    
    while(random == last){
        random = Math.floor(Math.random() * 6) + 1;
        if(random != last){
            break;
        }
    }

    switch(random){
        case 1:
            btn1.disabled = false;
            btn1.style.background = "aqua";

            btn2.disabled = true;
            btn2.style.background = "white";

            btn3.disabled = true;
            btn3.style.background = "white";

            btn4.disabled = true;
            btn4.style.background = "white";

            btn5.disabled = true;
            btn5.style.background = "white";

            btn6.disabled = true;
            btn6.style.background = "white";

            break;
        case 2:
            btn1.disabled = true;
            btn1.style.background = "white";

            btn2.disabled = false;
            btn2.style.background = "aqua";

            btn3.disabled = true;
            btn3.style.background = "white";

            btn4.disabled = true;
            btn4.style.background = "white";

            btn5.disabled = true;
            btn5.style.background = "white";

            btn6.disabled = true;
            btn6.style.background = "white";

            break;
        case 3:
            btn1.disabled = true;
            btn1.style.background = "white";

            btn2.disabled = true;
            btn2.style.background = "white";

            btn3.disabled = false;
            btn3.style.background = "aqua";

            btn4.disabled = true;
            btn4.style.background = "white";

            btn5.disabled = true;
            btn5.style.background = "white";

            btn6.disabled = true;
            btn6.style.background = "white";

            break;
        case 4:
            btn1.disabled = true;
            btn1.style.background = "white";

            btn2.disabled = true;
            btn2.style.background = "white";

            btn3.disabled = true;
            btn3.style.background = "white";

            btn4.disabled = false;
            btn4.style.background = "aqua";

            btn5.disabled = true;
            btn5.style.background = "white";

            btn6.disabled = true;
            btn6.style.background = "white";

            break;
        case 5:
            btn1.disabled = true;
            btn1.style.background = "white";

            btn2.disabled = true;
            btn2.style.background = "white";

            btn3.disabled = true;
            btn3.style.background = "white";

            btn4.disabled = true;
            btn4.style.background = "white";

            btn5.disabled = false;
            btn5.style.background = "aqua";

            btn6.disabled = true;
            btn6.style.background = "white";

            break;
        case 6:
            btn1.disabled = true;
            btn1.style.background = "white";

            btn2.disabled = true;
            btn2.style.background = "white";

            btn3.disabled = true;
            btn3.style.background = "white";

            btn4.disabled = true;
            btn4.style.background = "white";

            btn5.disabled = true;
            btn5.style.background = "white";

            btn6.disabled = false;
            btn6.style.background = "aqua";

            break;
    }
}

function click2(){
    clicks.innerHTML++;
    last = 2;
    random = Math.floor(Math.random() * 6) + 1;

    while(random == last){
        random = Math.floor(Math.random() * 6) + 1;
        if(random != last){
            break;
        }
    }

    switch(random){
        case 1:
            btn1.disabled = false;
            btn1.style.background = "aqua";

            btn2.disabled = true;
            btn2.style.background = "white";

            btn3.disabled = true;
            btn3.style.background = "white";

            btn4.disabled = true;
            btn4.style.background = "white";

            btn5.disabled = true;
            btn5.style.background = "white";

            btn6.disabled = true;
            btn6.style.background = "white";

            break;
        case 2:
            btn1.disabled = true;
            btn1.style.background = "white";

            btn2.disabled = false;
            btn2.style.background = "aqua";

            btn3.disabled = true;
            btn3.style.background = "white";

            btn4.disabled = true;
            btn4.style.background = "white";

            btn5.disabled = true;
            btn5.style.background = "white";

            btn6.disabled = true;
            btn6.style.background = "white";

            break;
        case 3:
            btn1.disabled = true;
            btn1.style.background = "white";

            btn2.disabled = true;
            btn2.style.background = "white";

            btn3.disabled = false;
            btn3.style.background = "aqua";

            btn4.disabled = true;
            btn4.style.background = "white";

            btn5.disabled = true;
            btn5.style.background = "white";

            btn6.disabled = true;
            btn6.style.background = "white";

            break;
        case 4:
            btn1.disabled = true;
            btn1.style.background = "white";

            btn2.disabled = true;
            btn2.style.background = "white";

            btn3.disabled = true;
            btn3.style.background = "white";

            btn4.disabled = false;
            btn4.style.background = "aqua";

            btn5.disabled = true;
            btn5.style.background = "white";

            btn6.disabled = true;
            btn6.style.background = "white";

            break;
        case 5:
            btn1.disabled = true;
            btn1.style.background = "white";

            btn2.disabled = true;
            btn2.style.background = "white";

            btn3.disabled = true;
            btn3.style.background = "white";

            btn4.disabled = true;
            btn4.style.background = "white";

            btn5.disabled = false;
            btn5.style.background = "aqua";

            btn6.disabled = true;
            btn6.style.background = "white";

            break;
        case 6:
            btn1.disabled = true;
            btn1.style.background = "white";

            btn2.disabled = true;
            btn2.style.background = "white";

            btn3.disabled = true;
            btn3.style.background = "white";

            btn4.disabled = true;
            btn4.style.background = "white";

            btn5.disabled = true;
            btn5.style.background = "white";

            btn6.disabled = false;
            btn6.style.background = "aqua";

            break;
    }
}

function click3(){
    clicks.innerHTML++;
    last = 3;
    random = Math.floor(Math.random() * 6) + 1;

    while(random == last){
        random = Math.floor(Math.random() * 6) + 1;
        if(random != last){
            break;
        }
    }

    switch(random){
        case 1:
            btn1.disabled = false;
            btn1.style.background = "aqua";

            btn2.disabled = true;
            btn2.style.background = "white";

            btn3.disabled = true;
            btn3.style.background = "white";

            btn4.disabled = true;
            btn4.style.background = "white";

            btn5.disabled = true;
            btn5.style.background = "white";

            btn6.disabled = true;
            btn6.style.background = "white";

            break;
        case 2:
            btn1.disabled = true;
            btn1.style.background = "white";

            btn2.disabled = false;
            btn2.style.background = "aqua";

            btn3.disabled = true;
            btn3.style.background = "white";

            btn4.disabled = true;
            btn4.style.background = "white";

            btn5.disabled = true;
            btn5.style.background = "white";

            btn6.disabled = true;
            btn6.style.background = "white";

            break;
        case 3:
            btn1.disabled = true;
            btn1.style.background = "white";

            btn2.disabled = true;
            btn2.style.background = "white";

            btn3.disabled = false;
            btn3.style.background = "aqua";

            btn4.disabled = true;
            btn4.style.background = "white";

            btn5.disabled = true;
            btn5.style.background = "white";

            btn6.disabled = true;
            btn6.style.background = "white";

            break;
        case 4:
            btn1.disabled = true;
            btn1.style.background = "white";

            btn2.disabled = true;
            btn2.style.background = "white";

            btn3.disabled = true;
            btn3.style.background = "white";

            btn4.disabled = false;
            btn4.style.background = "aqua";

            btn5.disabled = true;
            btn5.style.background = "white";

            btn6.disabled = true;
            btn6.style.background = "white";

            break;
        case 5:
            btn1.disabled = true;
            btn1.style.background = "white";

            btn2.disabled = true;
            btn2.style.background = "white";

            btn3.disabled = true;
            btn3.style.background = "white";

            btn4.disabled = true;
            btn4.style.background = "white";

            btn5.disabled = false;
            btn5.style.background = "aqua";

            btn6.disabled = true;
            btn6.style.background = "white";

            break;
        case 6:
            btn1.disabled = true;
            btn1.style.background = "white";

            btn2.disabled = true;
            btn2.style.background = "white";

            btn3.disabled = true;
            btn3.style.background = "white";

            btn4.disabled = true;
            btn4.style.background = "white";

            btn5.disabled = true;
            btn5.style.background = "white";

            btn6.disabled = false;
            btn6.style.background = "aqua";

            break;
    }
}

function click4(){
    clicks.innerHTML++;
    last = 4;
    random = Math.floor(Math.random() * 6) + 1;

    while(random == last){
        random = Math.floor(Math.random() * 6) + 1;
        if(random != last){
            break;
        }
    }

    switch(random){
        case 1:
            btn1.disabled = false;
            btn1.style.background = "aqua";

            btn2.disabled = true;
            btn2.style.background = "white";

            btn3.disabled = true;
            btn3.style.background = "white";

            btn4.disabled = true;
            btn4.style.background = "white";

            btn5.disabled = true;
            btn5.style.background = "white";

            btn6.disabled = true;
            btn6.style.background = "white";

            break;
        case 2:
            btn1.disabled = true;
            btn1.style.background = "white";

            btn2.disabled = false;
            btn2.style.background = "aqua";

            btn3.disabled = true;
            btn3.style.background = "white";

            btn4.disabled = true;
            btn4.style.background = "white";

            btn5.disabled = true;
            btn5.style.background = "white";

            btn6.disabled = true;
            btn6.style.background = "white";

            break;
        case 3:
            btn1.disabled = true;
            btn1.style.background = "white";

            btn2.disabled = true;
            btn2.style.background = "white";

            btn3.disabled = false;
            btn3.style.background = "aqua";

            btn4.disabled = true;
            btn4.style.background = "white";

            btn5.disabled = true;
            btn5.style.background = "white";

            btn6.disabled = true;
            btn6.style.background = "white";

            break;
        case 4:
            btn1.disabled = true;
            btn1.style.background = "white";

            btn2.disabled = true;
            btn2.style.background = "white";

            btn3.disabled = true;
            btn3.style.background = "white";

            btn4.disabled = false;
            btn4.style.background = "aqua";

            btn5.disabled = true;
            btn5.style.background = "white";

            btn6.disabled = true;
            btn6.style.background = "white";

            break;
        case 5:
            btn1.disabled = true;
            btn1.style.background = "white";

            btn2.disabled = true;
            btn2.style.background = "white";

            btn3.disabled = true;
            btn3.style.background = "white";

            btn4.disabled = true;
            btn4.style.background = "white";

            btn5.disabled = false;
            btn5.style.background = "aqua";

            btn6.disabled = true;
            btn6.style.background = "white";

            break;
        case 6:
            btn1.disabled = true;
            btn1.style.background = "white";

            btn2.disabled = true;
            btn2.style.background = "white";

            btn3.disabled = true;
            btn3.style.background = "white";

            btn4.disabled = true;
            btn4.style.background = "white";

            btn5.disabled = true;
            btn5.style.background = "white";

            btn6.disabled = false;
            btn6.style.background = "aqua";

            break;
    }
}

function click5(){
    clicks.innerHTML++;
    last = 5;
    random = Math.floor(Math.random() * 6) + 1;

    while(random == last){
        random = Math.floor(Math.random() * 6) + 1;
        if(random != last){
            break;
        }
    }

    switch(random){
        case 1:
            btn1.disabled = false;
            btn1.style.background = "aqua";

            btn2.disabled = true;
            btn2.style.background = "white";

            btn3.disabled = true;
            btn3.style.background = "white";

            btn4.disabled = true;
            btn4.style.background = "white";

            btn5.disabled = true;
            btn5.style.background = "white";

            btn6.disabled = true;
            btn6.style.background = "white";

            break;
        case 2:
            btn1.disabled = true;
            btn1.style.background = "white";

            btn2.disabled = false;
            btn2.style.background = "aqua";

            btn3.disabled = true;
            btn3.style.background = "white";

            btn4.disabled = true;
            btn4.style.background = "white";

            btn5.disabled = true;
            btn5.style.background = "white";

            btn6.disabled = true;
            btn6.style.background = "white";

            break;
        case 3:
            btn1.disabled = true;
            btn1.style.background = "white";

            btn2.disabled = true;
            btn2.style.background = "white";

            btn3.disabled = false;
            btn3.style.background = "aqua";

            btn4.disabled = true;
            btn4.style.background = "white";

            btn5.disabled = true;
            btn5.style.background = "white";

            btn6.disabled = true;
            btn6.style.background = "white";

            break;
        case 4:
            btn1.disabled = true;
            btn1.style.background = "white";

            btn2.disabled = true;
            btn2.style.background = "white";

            btn3.disabled = true;
            btn3.style.background = "white";

            btn4.disabled = false;
            btn4.style.background = "aqua";

            btn5.disabled = true;
            btn5.style.background = "white";

            btn6.disabled = true;
            btn6.style.background = "white";

            break;
        case 5:
            btn1.disabled = true;
            btn1.style.background = "white";

            btn2.disabled = true;
            btn2.style.background = "white";

            btn3.disabled = true;
            btn3.style.background = "white";

            btn4.disabled = true;
            btn4.style.background = "white";

            btn5.disabled = false;
            btn5.style.background = "aqua";

            btn6.disabled = true;
            btn6.style.background = "white";

            break;
        case 6:
            btn1.disabled = true;
            btn1.style.background = "white";

            btn2.disabled = true;
            btn2.style.background = "white";

            btn3.disabled = true;
            btn3.style.background = "white";

            btn4.disabled = true;
            btn4.style.background = "white";

            btn5.disabled = true;
            btn5.style.background = "white";

            btn6.disabled = false;
            btn6.style.background = "aqua";

            break;
    }
}

function click6(){
    clicks.innerHTML++;
    last = 6;
    random = Math.floor(Math.random() * 6) + 1;

    while(random == last){
        random = Math.floor(Math.random() * 6) + 1;
        if(random != last){
            break;
        }
    }

    switch(random){
        case 1:
            btn1.disabled = false;
            btn1.style.background = "aqua";

            btn2.disabled = true;
            btn2.style.background = "white";

            btn3.disabled = true;
            btn3.style.background = "white";

            btn4.disabled = true;
            btn4.style.background = "white";

            btn5.disabled = true;
            btn5.style.background = "white";

            btn6.disabled = true;
            btn6.style.background = "white";

            break;
        case 2:
            btn1.disabled = true;
            btn1.style.background = "white";

            btn2.disabled = false;
            btn2.style.background = "aqua";

            btn3.disabled = true;
            btn3.style.background = "white";

            btn4.disabled = true;
            btn4.style.background = "white";

            btn5.disabled = true;
            btn5.style.background = "white";

            btn6.disabled = true;
            btn6.style.background = "white";

            break;
        case 3:
            btn1.disabled = true;
            btn1.style.background = "white";

            btn2.disabled = true;
            btn2.style.background = "white";

            btn3.disabled = false;
            btn3.style.background = "aqua";

            btn4.disabled = true;
            btn4.style.background = "white";

            btn5.disabled = true;
            btn5.style.background = "white";

            btn6.disabled = true;
            btn6.style.background = "white";

            break;
        case 4:
            btn1.disabled = true;
            btn1.style.background = "white";

            btn2.disabled = true;
            btn2.style.background = "white";

            btn3.disabled = true;
            btn3.style.background = "white";

            btn4.disabled = false;
            btn4.style.background = "aqua";

            btn5.disabled = true;
            btn5.style.background = "white";

            btn6.disabled = true;
            btn6.style.background = "white";

            break;
        case 5:
            btn1.disabled = true;
            btn1.style.background = "white";

            btn2.disabled = true;
            btn2.style.background = "white";

            btn3.disabled = true;
            btn3.style.background = "white";

            btn4.disabled = true;
            btn4.style.background = "white";

            btn5.disabled = false;
            btn5.style.background = "aqua";

            btn6.disabled = true;
            btn6.style.background = "white";

            break;
        case 6:
            btn1.disabled = true;
            btn1.style.background = "white";

            btn2.disabled = true;
            btn2.style.background = "white";

            btn3.disabled = true;
            btn3.style.background = "white";

            btn4.disabled = true;
            btn4.style.background = "white";

            btn5.disabled = true;
            btn5.style.background = "white";

            btn6.disabled = false;
            btn6.style.background = "aqua";

            break;
    }
}

function input_name(){
    if (player.value !== ''){
        start_btn.disabled = false;
    }
}

function start(){
    random = Math.floor(Math.random() * 6) + 1;

    switch(random){
        case 1:
            btn1.disabled = false;
            btn1.style.background = "aqua";

            btn2.disabled = true;
            btn2.style.background = "white";

            btn3.disabled = true;
            btn3.style.background = "white";

            btn4.disabled = true;
            btn4.style.background = "white";

            btn5.disabled = true;
            btn5.style.background = "white";

            btn6.disabled = true;
            btn6.style.background = "white";

            break;
        case 2:
            btn1.disabled = true;
            btn1.style.background = "white";

            btn2.disabled = false;
            btn2.style.background = "aqua";

            btn3.disabled = true;
            btn3.style.background = "white";

            btn4.disabled = true;
            btn4.style.background = "white";

            btn5.disabled = true;
            btn5.style.background = "white";

            btn6.disabled = true;
            btn6.style.background = "white";

            break;
        case 3:
            btn1.disabled = true;
            btn1.style.background = "white";

            btn2.disabled = true;
            btn2.style.background = "white";

            btn3.disabled = false;
            btn3.style.background = "aqua";

            btn4.disabled = true;
            btn4.style.background = "white";

            btn5.disabled = true;
            btn5.style.background = "white";

            btn6.disabled = true;
            btn6.style.background = "white";

            break;
        case 4:
            btn1.disabled = true;
            btn1.style.background = "white";

            btn2.disabled = true;
            btn2.style.background = "white";

            btn3.disabled = true;
            btn3.style.background = "white";

            btn4.disabled = false;
            btn4.style.background = "aqua";

            btn5.disabled = true;
            btn5.style.background = "white";

            btn6.disabled = true;
            btn6.style.background = "white";

            break;
        case 5:
            btn1.disabled = true;
            btn1.style.background = "white";

            btn2.disabled = true;
            btn2.style.background = "white";

            btn3.disabled = true;
            btn3.style.background = "white";

            btn4.disabled = true;
            btn4.style.background = "white";

            btn5.disabled = false;
            btn5.style.background = "aqua";

            btn6.disabled = true;
            btn6.style.background = "white";

            break;
        case 6:
            btn1.disabled = true;
            btn1.style.background = "white";

            btn2.disabled = true;
            btn2.style.background = "white";

            btn3.disabled = true;
            btn3.style.background = "white";

            btn4.disabled = true;
            btn4.style.background = "white";

            btn5.disabled = true;
            btn5.style.background = "white";

            btn6.disabled = false;
            btn6.style.background = "aqua";

            break;
    }

    start_btn.disabled = true;

    var seconds = 60;

    interval = setInterval(function(){
        seconds--

        if (seconds > 0){
            time.innerHTML = seconds;
        }

        if (seconds === 0){
            time.innerHTML = "Game over";
            time.style.animation = "blink 1s infinite";
            
            btn1.disabled = true;
            btn2.disabled = true;
            btn3.disabled = true;
            btn4.disabled = true;
            btn5.disabled = true;
            btn6.disabled = true;
            
            btn1.style.background = "white";
            btn2.style.background = "white";
            btn3.style.background = "white";
            btn4.style.background = "white";
            btn5.style.background = "white";
            btn6.style.background = "white";

            clicks_num = parseInt(clicks.textContent);

            if (players.length < 20){
                players.push([player.value, clicks_num]);
                players.sort(function(a, b){
                    return b[1] - a[1];
                });
            } else {
                for (var i = players.length - 1; i >= 0; i--){
                    if(clicks_num > players[i][1]){
                        players.push([player.value, clicks.textContent]);
                        players.sort(function(a, b){
                            return b[1] - a[1];
                        });
                        players.pop();
                        break;
                    }
                }
            }

            var result = '';
            for (var j = 0; j < players.length; j++){
                var place = players.indexOf(players[j]) + 1;
                var tr = '<tr>';
                tr += '<td>' + place + '.' + '</td>';
                tr += '<td>' + players[j][0] + '</td>';
                tr += '<td>' + players[j][1] + '</td>';
                tr += '</tr>';
                result += tr;
                }
            table.innerHTML = result;
        }
    }, 1000);
}

function reset(){
    btn1.disabled = true;
    btn2.disabled = true;
    btn3.disabled = true;
    btn4.disabled = true;
    btn5.disabled = true;
    btn6.disabled = true; 

    btn1.style.background = "white";
    btn2.style.background = "white";
    btn3.style.background = "white";
    btn4.style.background = "white";
    btn5.style.background = "white";
    btn6.style.background = "white";

    start_btn.disabled = true;

    clearInterval(interval);
    time.style.animation = "blink 0s";

    clicks.innerHTML = 0;
    player.value = '';
    time.innerHTML = 60;
}

function eng_func(){
    eng.classList.remove("eng");
    eng.classList.add("eng1");

    hr.classList.remove("hr1");
    hr.classList.add("hr");

    h1_txt.innerHTML = "Batak";
    start_btn.innerHTML = "Start";
    reset_btn.innerHTML = "Reset";
    leaderboard_txt.innerHTML = "Leaderboard";
    place_txt.innerHTML = "Place";
    name_txt.innerHTML = "Name";
    score_txt.innerHTML = "Score";
    clicks_txt.innerHTML = "Score";
    time_txt.innerHTML = "Time";
    description_txt.innerHTML = "Description";
    desc_txt1.innerHTML = "Welcome to the game Batak.";
    desc_txt2.innerHTML = "The goal is to click on as many buttons as possible in a 60 second period.";
    desc_txt3.innerHTML = "First, you need to enter any name you want (max. 15 characters).";
    desc_txt4.innerHTML = "Then, button Start will become enabled and you can start the game by clicking on the button Start.";
    desc_txt5.innerHTML = "When the game starts, random button will get activated (it will become blue). After you click on it, that button will deactivate (it will become white) and then another random button will activate.";
    desc_txt6.innerHTML = "When time expires, your name and score will be automatically added to the Leaderboard if your score is in top 20.";
    desc_txt7.innerHTML = "Clicking on the button Reset, time and score will reset, and input for name will become empty to enter a new name.";
    desc_txt8.innerHTML = "Compete against yourself, your family, friends...";
    desc_txt9.innerHTML = "Good luck and have fun.";
    player.setAttribute("placeholder", "Please enter your name");
    footer_txt.innerHTML = "Made by Karlo Šimunec";
}

function hr_func(){
    hr.classList.remove("hr");
    hr.classList.add("hr1");

    eng.classList.remove("eng1");
    eng.classList.add("eng");

    h1_txt.innerHTML = "Batak";
    start_btn.innerHTML = "Pokreni";
    reset_btn.innerHTML = "Resetiraj";
    leaderboard_txt.innerHTML = "Ljestvica";
    place_txt.innerHTML = "Mjesto";
    name_txt.innerHTML = "Ime";
    score_txt.innerHTML = "Bodovi";
    clicks_txt.innerHTML = "Bodovi";
    time_txt.innerHTML = "Vrijeme";
    description_txt.innerHTML = "Upute";
    desc_txt1.innerHTML = "Dobrodošli u igru Batak.";
    desc_txt2.innerHTML = "Cilj je kliknuti na što je više gumba moguće unutar perioda od 60 sekundi.";
    desc_txt3.innerHTML = "Prvo morate unijeti neko svoje ime (maks. 15 znakova).";
    desc_txt4.innerHTML = "Nakon toga će se gumb Start otključati i moći ćete započeti igru pritiskom na gumb Start.";
    desc_txt5.innerHTML = "Kada počne igra, nasumični gumb će se aktivirati (biti će plave boje). Nakon što kliknete na njega, on će se deaktivirati (biti će bijele boje) i neki drugi nasumični gumb će se aktivirati.";
    desc_txt6.innerHTML = "Kada vrijeme istekne, vaše ime i bodovi automatski će se dodati u Ljestvicu ako su vaši bodovi u top 20.";
    desc_txt7.innerHTML = "Pritiskom na gumb Reset, vrijeme i bodovi će se resetirati te će polje za unos biti prazno kako biste mogli unijeti novo ime.";
    desc_txt8.innerHTML = "Natječite se protiv sebe, svoje obitelji, prijatelja...";
    desc_txt9.innerHTML = "Zabavite se i sretno.";
    player.setAttribute("placeholder", "Unesite svoje ime");
    footer_txt.innerHTML = "Napravio Karlo Šimunec";
}

if(eng.hasAttribute("selected")){
    eng_func();
}