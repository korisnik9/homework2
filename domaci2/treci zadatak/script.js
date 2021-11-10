
var numSquare = prompt("Unesite broj kvadrata");
for (var i = 0; i < numSquare; i++) {
    var node = document.createElement("div");
    node.className = "myStyle";
    var textNode = document.createTextNode("");
    node.appendChild(textNode);

    var button = document.createElement("button");
    button.className = "delete";
    var sign = document.createTextNode("X");
    button.appendChild(sign);
    node.appendChild(button);
    document.getElementById("square").appendChild(node);

}

var square = document.querySelectorAll(".myStyle");
for (var i = 0; i < square.length; i++){
    square[i].addEventListener("click", add);
}

function add(e){
    if (e.target.className === "myStyle") {
        var vrijednost = prompt("Unesite malo, veliko slovo ili razmak");
        if ((vrijednost >= "a" && vrijednost <= "z") || (vrijednost >= "A" && vrijednost <= "Z") || (vrijednost == " ")) {
            e.target.innerText = vrijednost;
            var button = document.createElement("button");
            button.className = "delete";
            var sign = document.createTextNode("X");
            button.appendChild(sign);
            e.target.appendChild(button);
            e.target.style.margin = "0px 0px 0px 0px";
            if (vrijednost != " ") { niz.push(vrijednost); }
             niz1 = [];
            for (var i = niz.length-1; i >= 0; i--) {
                niz1.push(niz[i]);
               
            }      
            if (niz.join("") == niz1.join("")) {
                document.getElementById("odgovor").innerHTML = "rijec je palindrom";
            } else {
                 document.getElementById("odgovor").innerHTML = "rijec nije palindrom";

            }
        } else {
            alert("Dozvoljena su samo mala, velika slova i razmak. Molimo unesite ponovo karakter");
        }
    } else if (e.target.className === "delete") {
        var kvadratic = e.target.parentElement;
        kvadratic.parentElement.removeChild(kvadratic);

    }
}


var addI = document.getElementById("add");
addI.addEventListener("click", addItem);


function addItem() {
    var node = document.createElement("div");
    node.className = "myStyle";
    var textnode = document.createTextNode("");
    node.appendChild(textnode);
    var button = document.createElement("button");
    button.className = "delete";
    var sign = document.createTextNode("X");
    button.appendChild(sign);
    node.appendChild(button);
    document.getElementById("square").appendChild(node);
    squares = document.querySelectorAll(".myStyle");
    for (var i = 0; i < squares.length; i++) {
        squares[i].addEventListener("click", add);

    }
}



