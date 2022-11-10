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
    if (!user) {
        alert("Please input your name!")
    }
    else {
        document.getElementById('landingPage').style.display = 'none';
        document.getElementById('secondPage').removeAttribute("style");
        document.getElementById('greeting').innerText = `Hello, ${user}`;
    }
})

document.getElementById('submitInitial').addEventListener("click", function(){ 
    let initial = document.getElementById('initial').value;
    if (!initial) {
        counter = 0;
    }
    if(isNaN(initial)) {
        alert("Please input a valid number!")
    } else {
        counter = initial;
        //opacity gelas
        if (counter >= 8){
            document.getElementById('secondPage').style.display = 'none';
            document.getElementById('fourthPage').removeAttribute("style");
        } else {
            document.getElementById('secondPage').style.display = 'none';
            document.getElementById('thirdPage').removeAttribute("style");
            for (let x = 0; x < document.getElementById('water').children.length; x++) {
                if (x === Number(counter)) {
                    break;
                }
                document.getElementById('water').children[x].style.backgroundColor = '#0096C7';
            }
        }
    }
})

console.log(document.getElementById('water').children[0])

let enoughDrink = false;

document.getElementById('btnLog').addEventListener("click", function(){
    counter++;
    if (counter === 8) {
        document.getElementById('thirdPage').style.display = 'none';
        document.getElementById('fourthPage').removeAttribute("style");
    }
    //opacity gelas
    const d = new Date();
    let hour = d.getHours();
    let minute = d.getMinutes();
    let second = d.getSeconds();
    let time = `${hour}:${minute}:${second}`;
    let list = document.getElementById('list');
    let newMessage = document.createElement('li');
    newMessage.innerText = `You had your glass of water No. ${counter} at ${time} today`;
    list.appendChild(newMessage);

    document.getElementById('water').children[counter - 1].style.backgroundColor = '#0096C7';
    

    let finalMessage1 = "Great job! You reached your daily water intake goal. Keep it up :)";
    document.getElementById('finalMessage').innerText = finalMessage1;
    document.getElementById('randomFact').innerText = `Did you know? ${randomFact}`;
})


document.getElementById('btnReset').addEventListener("click", function(){
    document.getElementById('thirdPage').style.display = 'none';
    document.getElementById('fourthPage').removeAttribute("style");
    if (counter >= 8) {
        let finalMessage1 = "Great job! You reached your daily water intake goal. Keep it up :)";
        document.getElementById('finalMessage').innerText = finalMessage1;
        document.getElementById('randomFact').innerText = `Did you know? ${randomFact}`;
    }
    else {
        let finalMessage2 = `Ouch, you were short at least ${8-counter} glasses of water. Let's do better next time!`;
    }
    document.getElementById('finalMessage').innerText = finalMessage2;
    document.getElementById('randomFact').innerText = `Did you know? ${randomFact}`;
})

document.getElementById('continueBtn').addEventListener("click", function(){
    document.getElementById('fourthPage').style.display = 'none';
    document.getElementById('thirdPage').removeAttribute("style");
})


document.getElementById('btnStartOver').addEventListener("click", function(){
    document.getElementById('fourthPage').style.display = 'none';
    document.getElementById('secondPage').removeAttribute("style");
    for (let y = 0; y < document.getElementById('water').children.length; y++) {
        document.getElementById('water').children[y].style.backgroundColor = 'grey';
    }
    while (document.getElementById('list').hasChildNodes) {
        document.getElementById('list').removeChild(document.getElementById('list').firstChild)
    }
    
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



