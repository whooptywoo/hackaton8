let counter = 0;
let output = "";
let fact1 = "Looking for foods to quench your thirst? Try cucumbers. These refreshing vegetables contain a whopping 96% water."
let fact2 = "Your bones are 31% water!"
let fact3 = "Water makes up approximately 70% of a human’s body weight – but DON’T stop drinking water to lose weight!"
let fact4 = "Drinking water can help you lose weight by increasing your metabolism, which helps burn calories faster."
let fact5 = "Good hydration can help reduce cavities and tooth decay. Water helps produce saliva, which keeps your mouth and teeth clean."

let facts = [fact1, fact2, fact3, fact4, fact5];

let randomIdx = Math.floor(Math.random() * facts.length);
let randomFact = facts[randomIdx];


document.getElementById('submitName').addEventListener("click", function(){ 
    let user = document.getElementById('name').value;
    (if!user) {
        alert "Please input your name"
    } else {
        document.getElementById('landingPage').style.display = 'none';
        document.getElementById('secondPage').removeAttribute("style");
        document.getElementById('greeting').innerText = `Hello, ${user}`;
    }
})

document.getElementById('submitInitial').addEventListener("click", function(){ 
    let initial = document.getElementById('initial').value;
    if(isNaN(initial)) {
        alert("Please input a valid number")
    } else {
        counter = initial;
        document.getElementById('secondPage').style.display = 'none';
        document.getElementById('thirdPage').removeAttribute("style");
        //opacity gelas
        if (counter >= 8){
            document.getElementById('secondPage').style.display = 'none';
            document.getElementById('fourthPage').removeAttribute("style");
        } 
        else if (counter > 4) {
            document.querySelectorAll('#water1 img').style.opacity = 1;
            for (i = 0; i < counter-4; i++) {
                document.querySelectorAll('#water2 img[i]').style.opacity = 1;
            }
        }
    }
})

let enoughDrink = false;

document.getElementById('btnLog').addEventListener("click", function(){
    counter++;
    //opacity gelas
    const d = new Date();
    let hour = d.getHours();
    let minute = d.getMinutes();
    let time = `${hour}:${minute}`;
    let list = document.getElementById('list');
    let newMessage = document.createElement('li');
    newMessage.innerText = `${counter} ----- ${time}`;
    list.appendChild(newMessage);


    
    document.querySelectorAll('#water1 img[counter-1]').style.opacity = 1;
    
    if (counter === 8) {
        document.getElementById('thirdPage').style.display = 'none';
        document.getElementById('fourthPage').removeAttribute("style");
    }
    let finalMessage1 = "Great job! You reached your daily water intake goal. Keep it up :)";
    document.getElementById('finalMessage').innerText = finalMessage1;
    document.getElementById('randomFact').innerText = `Did you know? ${randomFact}`;
})

document.getElementById('btnReset').addEventListener("click", function(){
    document.getElementById('thirdPage').style.display = 'none';
    document.getElementById('fourthPage').removeAttribute("style");
    let finalMessage2 = `Ouch, you were short at least ${8-counter} glasses of water. Let's do better next time!`;
    document.getElementById('finalMessage').innerText = finalMessage2;
    document.getElementById('randomFact').innerText = `Did you know? ${randomFact}`;
})

document.getElementById('btnStartOver').addEventListener("click", function(){
    document.getElementById('fourthPage').style.display = 'none';
    document.getElementById('secondPage').removeAttribute("style");
})





// document.getElementById('btnLog').addEventListener("click", function(){ 
//     counter++;
//     document.getElementById('img-gelas')[counter-1].style.opacity = 100%;
//     if (counter === 8) {
//         output = "xxxx";
//         let list = document.getElementById('list');
//         let newMessage = document.createElement('li');
//         newMessage.innerText = output;
//         list.appendChild(newMessage);
//         list.appendChild(randomFact);
//     }
// })

// document.getElementById('btnReset').addEventListener("click", function(){ 
//     counter = 0;
//     document.getElementById('img-gelas').style.opacity = 50%;
//     output = "yyyy";
//     let list = document.getElementById('list');
//     let newMessage = document.createElement('li');
//     newMessage.innerText = output;
//     list.appendChild(newMessage);
//     list.appendChild(randomFact);
// })



