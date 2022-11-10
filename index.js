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

document.getElementById('create').addEventListener("click", function(){ 
        output = "xxxx";
        newMessage.innerText = output;
        list.appendChild(newMessage);
        list.appendChild(randomFact);
})


document.getElementById('btnLog').addEventListener("click", function(){ 
    counter++;
    document.getElementById('img-gelas')[counter-1].style.opacity = 100%;
    if (counter === 8) {
        output = "xxxx";
        let list = document.getElementById('list');
        let newMessage = document.createElement('li');
        newMessage.innerText = output;
        list.appendChild(newMessage);
        list.appendChild(randomFact);
    }
})

document.getElementById('btnReset').addEventListener("click", function(){ 
    counter = 0;
    document.getElementById('img-gelas').style.opacity = 50%;
    output = "yyyy";
    let list = document.getElementById('list');
    let newMessage = document.createElement('li');
    newMessage.innerText = output;
    list.appendChild(newMessage);
    list.appendChild(randomFact);
})



