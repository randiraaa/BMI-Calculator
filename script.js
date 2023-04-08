let yourName = document.getElementById("nameinput");
let male = document.getElementById("g-male");
let female = document.getElementById("g-female");
let height = document.getElementById("height");
let weight = document.getElementById("weight");
let resultComment = document.querySelector(".comment");

popupContent = document.querySelector(".popup-content");
popupText = document.querySelector("#popupText");
let popup = document.getElementById("myPopup");
let spanClose = document.getElementsByClassName("close")[0];

function calculate() {
    if(yourName.value=='' || height.value=='' || weight.value=='' || (male.checked==false && female.checked==false)) {
        popup.style.display = "block";
        popupText.innerHTML = `Check your data again and please fill in all the fields!`;
    } else {
        submitBmi();
    }
}

spanClose.onclick = function() {
    popup.style.display = "none";
}

window.onclick = function(event) {
    if (event.target == popup) {
        popup.style.display = "none";
    }
}

function submitBmi() {
    let p = [yourName.value, height.value, weight.value];
    if(male.checked){
      p.push("male");
    }else if(female.checked){
      p.push("female");
    }

    let bmi = Number(p[2])/(Number(p[1])/100*Number(p[1])/100);

    let result = '';
    if(bmi<18.5) {
        result = 'Underwight';
    } else if(18.5<=bmi&&bmi<=24.9) {
        result = 'Normal Weight';
    } else if(25<=bmi&&bmi<=29.9) {
        result = 'Overweight';
    } else if(30<=bmi) {
        result = 'Obesity';
    }

    resultComment.style.display = 'block';
    document.querySelector('.comment').innerHTML = yourName.value + `, Youre are ${result}!`;
    document.querySelector('#Cresult').innerHTML = bmi.toFixed(1);
}