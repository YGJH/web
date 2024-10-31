const number = 4;
let dieImage = [];
let dieValue = [];

window.addEventListener('load' , start , false);

function start() {
    let ran = document.getElementById('rollButton');
    let shortcut1 = document.getElementById('cheatButton1');
    let shortcut2 = document.getElementById('cheatButton2');
    shortcut1.addEventListener('click' , short1 , false);
    ran.addEventListener('click' , rand_shafle , false);
    shortcut2.addEventListener('click' ,short2 , false);
}

function randint(max) {
    return Math.floor(Math.random() * max + 1);
}
function em() {
    let te = document.getElementById("messages");
    te.innerText = "";
}
function rand_shafle() {
    em();
    arr = [0 , 0 , 0 , 0 , 0 , 0];
    let mx = 0;
    for(let i = 1 ; i <= 4 ; i++) {
        let tmp = randint(6);
        console.log(tmp);
        arr[tmp-1] += 1;
        mx = Math.max(mx , arr[tmp-1]);
        let n = 'die' + i;
        let m = document.getElementById(n);
        let im = 'die' + tmp + '.jpg';
        m.setAttribute("src" , im);        
    }
    let te = document.getElementById('messages');
    if(mx == 4) {
        te.innerText = "Congratulations!Your roll is \"One Color\"!";
        te.innerHTML += "<img id=\"con\" src=\"congrats.png\">";
    }
    else {
        if(mx == 1) {
            te.innerText = "Oops!Your roll is \"No Face\"!";
        }
        else if(mx == 3) {
            te.innerText = "No decision, please re-roll the dice!";
        }
        else { // mx = 2
            let sum = 0;
            for(let i = 0 ; i < 6 ; i++) {
                if(arr[i] == 1) {
                    sum += i+1;
                }
            }
            if(sum != 18) {
                te.innerText = "Your score is "+ sum + '!';
            }else{
                te.innerText = "Congratulations!Your roll is \"Perfect Eighteen!\"";
                te.innerHTML += "<img id=\"con\" src=\"congrats.png\">";
                
            }
        }
        
    }
}
function short1() {
    em();
    let tmp = randint(6);
    for(let i = 1 ; i <= 4 ; i++) {
        let n = 'die' + i;
        let m = document.getElementById(n);
        let im = 'die' + tmp + '.jpg';
        m.setAttribute("src" , im);
    }
    let te = document.getElementById('messages');
    te.innerText = "Congratulations!Your roll is \"One Color\"!";
    te.innerHTML += "<img id=\"con\" src=\"congrats.png\">";
}
function short2() {
    em();
    for(let i = 1 ; i <= 4 ; i++) {
        let n = 'die' + i;
        let m = document.getElementById(n);
        if(i == 1 || i == 2) {
            m.setAttribute('src' , 'die6.jpg');
        }
        else{
            m.setAttribute('src' , 'die1.jpg');
        }
    }
    let te = document.getElementById('messages');
    te.innerText = "Congratulations!Your roll is \"Perfect Eighteen!\""

    te.innerHTML += "<img id=\"con\" src=\"congrats.png\">";
}
