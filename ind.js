
// let con = true;



// function like(){
//     if(con) {
//         document.getElementById('butlike').src = "img/Untitled.png";
//         con = false;
//     } else {
//         document.getElementById('butlike').src = "img/likeb.jpg";
//         con = true;
//     }

// }
console.log(document.getElementById('darkmode').innerText)
let mod = true;
function mode() {
    if (mod) {
        document.getElementById("rr").style.backgroundColor="white";
        document.getElementById("rr").style.color="black";
        
        document.getElementById('body').style.background = "#1f1d2b";
        // document.documentElement.style.setProperty('--root{primary}, 'black');
        var root = document.querySelector(':root');
        root.style.setProperty('--primary', '#292a39');
        var root = document.querySelector(':root');
        root.style.setProperty('--dark', 'white')
        var root = document.querySelector(':root');
        root.style.setProperty('--light', 'black')

        document.getElementById('darkmode').innerText = 'Light mode';
        mod = false;
    } else {
        document.getElementById('body').style.background = "white";
        
        document.getElementById("rr").style.backgroundColor="black";
        document.getElementById("rr").style.color="white";
        // console.log("con false", document.getElementById('darkmode').h3);
        var root = document.querySelector(':root');
        root.style.setProperty('--primary', '#ddd');
        document.getElementById('darkmode').innerText = 'Dark mode';
        var root = document.querySelector(':root');
        root.style.setProperty('--dark', '#333')
        var root = document.querySelector(':root');
        root.style.setProperty('--light', '#fff')
        mod = true;
    }
}

