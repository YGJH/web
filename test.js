window.addEventListener('load' , start, false);
let cnt = 0;
function start() {
    loadStorage();
    document.getElementById('clear').addEventListener('click' , function() {
        localStorage.clear();
        loadStorage();
        cnt=0;
    } , false);
    document.getElementById('submit').addEventListener('click' , function(){
        let name = document.getElementById('name').value;
        console.log(name);
        localStorage.setItem(cnt++,name);
        loadStorage();
    })
}


function loadStorage(){
    let tags = [];
    let len = localStorage.length;
    console.log("len = " + len);
    for(let i = 0 ; i < len ; i++) {
        tags[i] = localStorage.getItem(i);
    }
    tags.sort();
    let ta = document.getElementById('insideTable');
    ta.innerHTML='';
    for(let tag in tags){
        // let tmp = document.createElement('tr');
        ta.innerHTML += ('<th>' + tag + '<td>' + tags[tag] + '</td></th>');
        // console.log(tmp);
        // document.getElementById('insideTable').appendChild(tmp);
        // ta.innerHTML+=tmp;
    }
    console.log(ta);
}