
let slider = document.querySelector("#slider");
let photos = ["1.jfif", "2.jfif", "3.jfif", "4.jfif"];

let next = document.querySelector("#next");
let previous = document.querySelector("#previous");
let container = document.querySelector("#container");

next.addEventListener("click", nextPic);
previous.addEventListener("click", prevPic);
container.addEventListener("mouseover", window.addEventListener("keyup", arrows));

function nextPic() {
    var now = document.getElementById("currentPic").src;
    var a = now.lastIndexOf("/");
    var b = a+1;
    var c = now.slice(b);

    console.log(now + " sada");
    console.log(a + "  A");
    console.log(b + " B");
    console.log(c + " C");

    var i = photos.indexOf(c);
    for(var i; i < photos.length; i++) {
        i++;
        if (i == photos.length) {
            i=0;
         }
            document.getElementById("currentPic").src = photos[i];
            break;
        }
    }

    function prevPic() {
        var now = document.getElementById("currentPic").src;
        var a = now.lastIndexOf("/");
        var b = a+1;
        var c = now.slice(b);
       
    
        var i = photos.indexOf(c);
        for(var i; i < photos.length; i++) {
            i--;
            if (i == -1) {
                i=photos.length - 1;
             }
                document.getElementById("currentPic").src = photos[i];
                break;
            }
        }


function arrows(e) {
    if(e.keyCode === 37) {
        prevPic();
    }
    if(e.keyCode === 39) {
        nextPic();
    }
}

var currentPic = document.getElementById("currentPic");
currentPic.addEventListener("click", widePic);

function widePic() {
    var wid = 0.9 * window.innerWidth;
    var heig = 0.9 * window.innerHeight;
    container.style.width = "100%";
    currentPic.style.width = wid + "px";
    currentPic.style.height = heig + "px";
    currentPic.style.margin = "0px auto";
    var node = document.createElement("button");
    var textnode = document.createTextNode("X");
    node.appendChild(textnode);
    document.getElementById("slider").appendChild(node);
    node.style.position = "top right";
    node.id = "Exit";
    node.style.height = "30px";
    node.style.width = "30px";
    node.style.color = "black";
    node.style.backgroundColor = "red";
    var a = document.getElementById("Exit");
    currentPic.removeEventListener('click', widePic);
    a.addEventListener("click", function () {
        container.style.width = "60%";
        container.style.height = "auto";
        container.style.margin = "auto";
        currentPic.style.width = "100%";
        currentPic.style.height = "200px";
        node.parentElement.removeChild(node);
        currentPic.addEventListener("click", widePic);
    });
}













