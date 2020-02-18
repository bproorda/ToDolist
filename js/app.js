console.log("js is working");

//part of newmethod
var template = document.getElementById("template");

function addNew() { 
    var newItem = document.getElementById('newitem');
    var newItemValue = document.getElementById('newitem').value;
    console.log(newItemValue);

    if (newItemValue === "") {
    } else {
    //myversion -orignal method
    // var newLi = document.createElement("li");
    // var newText = document.createTextNode(newItemValue);
    // newLi.appendChild(newText);
    // var position = document.getElementById("list");
    // position.appendChild(newLi);
    // document.getElementById('newitem').value = "";
    // var btn = document.createElement('button');
    // btn.innerHTML = "close"
    // position = document.getElementById("list")
    // position.appendChild(btn);

    //newmethod - clone template node, change text then append
    var temp = template.cloneNode(true);
    temp.style.visibility = "visible";
    var txtNode = document.createTextNode(newItemValue);
    var pos = temp.childNodes;
    console.log(pos.length);
    var x = pos[0];
    console.log(x);
    temp.replaceChild(txtNode, x);
    x = pos[0];
    console.log(x);
    var position = document.getElementById("list");
    position.appendChild(temp);
    //need to change id, and get button to work

    
    
    
}
    //W3version
    // var para = document.createElement("li");
    // var node = document.createTextNode(newItem);
    // para.appendChild(node);
    // var element = document.getElementById("list");
    // element.appendChild(para)
}