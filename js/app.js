console.log("js is working");

function addNew() { 
    var newItem = document.getElementById('newitem');
    var newItemValue = document.getElementById('newitem').value;
    console.log(newItemValue);

    if (newItemValue === "") {
    } else {
    //myversion
    var newLi = document.createElement("li");
    var newText = document.createTextNode(newItemValue);
    newLi.appendChild(newText);
    var position = document.getElementById("list");
    position.appendChild(newLi);
    document.getElementById('newitem').value = "";
    var btn = document.createElement('button');
    btn.innerHTML = "close"
    position = document.getElementById("list")
    position.appendChild(btn);
    
    
    
}
    //W3version
    // var para = document.createElement("li");
    // var node = document.createTextNode(newItem);
    // para.appendChild(node);
    // var element = document.getElementById("list");
    // element.appendChild(para)
}