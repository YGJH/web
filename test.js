
window.addEventListener('load' , addElement, false);

function addElement() {

    let newNode = document.createElement("span");
    console.log(newNode);
    let newtext = document.createTextNode('Hello world');
    console.log(newtext);
    newNode.appendChild(newtext);
    let tmp = document.getElementById('div1');
    let ptmp = tmp.parentElement;
    console.log(ptmp);
    console.log(window);
    ptmp.insertBefore(newNode , tmp);
    let k = newNode;
    ptmp.insertBefore(k , tmp.nextSibling);

}