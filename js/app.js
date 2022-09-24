/*----------
 Array
------------*/

const arr = [];
console.log(arr);




/*-----------------------------------
 Function to get input field values
-----------------------------------*/


function getInputElementValueById(elementId) {
    const getInputElement = document.getElementById(elementId);
    const inputElementString = getInputElement.value;
    const inputElementValue = parseFloat(inputElementString);
    return inputElementValue;
}



document.getElementById('calculate').addEventListener('click', function () {


    const perPlayerCost = getInputElementValueById('per-player');

    const playerExpenses = arr.length * perPlayerCost;

    const playerExpensesField = document.getElementById('player-expenses');
    playerExpensesField.innerText = playerExpenses;


    return playerExpenses;
    //perPlayer.value = '';
})





document.getElementById('calculate-total').addEventListener('click', function () {


    const managerCost = getInputElementValueById('manager-field')


    const coachCost = getInputElementValueById('coach-field')



    const playerExpensesField = document.getElementById('player-expenses');
    const playerExpensesString = playerExpensesField.innerText;
    const playerExpenses = parseFloat(playerExpensesString);
    //console.log(playerExpenses);


    const totalExpenses = playerExpenses + managerCost + coachCost;


    const totalExpensesField = document.getElementById('total-expenses');
    totalExpensesField.innerText = totalExpenses;

    //managerField.value = '';
    //coachField.value = '';
})





document.getElementById('btn-post1').addEventListener('click', function () {

    if (arr.length > 4) {
        alert("You can't add more than 5 players");
        const button1 = document.getElementById('btn-post1');
        button1.disabled = false;
    } else {

        const player = document.getElementById('trent');
        const playerName = player.innerText;


        const containerName = document.getElementById('list-container');
        const li = document.createElement('li');
        li.innerText = playerName;
        containerName.appendChild(li);
        arr.push(playerName);
        const button1 = document.getElementById('btn-post1');
        button1.disabled = true;
        button1.style.backgroundColor = 'grey';
    }

})



document.getElementById('btn-post2').addEventListener('click', function () {


    if (arr.length > 4) {
        alert("You can't add more than 5 players");
        const button1 = document.getElementById('btn-post2');
        button1.disabled = false;

    } else {
        const player = document.getElementById('van_dijk');
        const playerName = player.innerText;


        const containerName = document.getElementById('list-container');
        const li = document.createElement('li');
        li.innerText = playerName;
        containerName.appendChild(li);
        arr.push(playerName);
        const button1 = document.getElementById('btn-post2');
        button1.disabled = true;
        button1.style.backgroundColor = 'grey';
    }


})


document.getElementById('btn-post3').addEventListener('click', function () {


    if (arr.length > 4) {
        alert("You can't add more than 5 players");
        const button1 = document.getElementById('btn-post3');
        button1.disabled = false;

    } else {
        const player = document.getElementById('neymar');
        const playerName = player.innerText;


        const containerName = document.getElementById('list-container');
        const li = document.createElement('li');
        li.innerText = playerName;
        containerName.appendChild(li);
        arr.push(playerName);
        const button1 = document.getElementById('btn-post3');
        button1.disabled = true;
        button1.style.backgroundColor = 'grey';

    }

})


document.getElementById('btn-post4').addEventListener('click', function () {


    if (arr.length > 4) {
        alert("You can't add more than 5 players");
        const button1 = document.getElementById('btn-post4');
        button1.disabled = false;

    } else {
        const player = document.getElementById('messi');
        const playerName = player.innerText;


        const containerName = document.getElementById('list-container');
        const li = document.createElement('li');
        li.innerText = playerName;
        containerName.appendChild(li);
        arr.push(playerName);
        const button1 = document.getElementById('btn-post4');
        button1.disabled = true;
        button1.style.backgroundColor = 'grey';

    }



})



document.getElementById('btn-post5').addEventListener('click', function () {



    if (arr.length > 4) {
        alert("You can't add more than 5 players");
        const button1 = document.getElementById('btn-post5');
        button1.disabled = false;

    } else {
        const player = document.getElementById('salah');
        const playerName = player.innerText;


        const containerName = document.getElementById('list-container');
        const li = document.createElement('li');
        li.innerText = playerName;
        containerName.appendChild(li);
        arr.push(playerName);
        const button1 = document.getElementById('btn-post5');
        button1.disabled = true;
        button1.style.backgroundColor = 'grey';

    }


})



document.getElementById('btn-post6').addEventListener('click', function () {



    if (arr.length > 4) {
        alert("You can't add more than 5 players");
        const button1 = document.getElementById('btn-post6');
        button1.disabled = false;

    } else {
        const player = document.getElementById('bruyne');
        const playerName = player.innerText;


        const containerName = document.getElementById('list-container');
        const li = document.createElement('li');
        li.innerText = playerName;
        containerName.appendChild(li);
        arr.push(playerName);
        const button1 = document.getElementById('btn-post6');
        button1.disabled = true;
        button1.style.backgroundColor = 'grey';
    }



})





