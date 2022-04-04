// Pop up screen // 
function showPopup(txt, times) {
    document.getElementById('popup-screen').style.display='block';
    document.getElementById('dateBox').innerHTML = txt;
    document.getElementById('timeBox').innerHTML ='';
    localStorage.setItem('cartList', JSON.stringify([storedValue, storedTime])); // initialize cartlist //
    localStorage.setItem('savedApptDate', JSON.stringify(txt));
    for (let i=0; i<times.length; i++) {
        createButton(times[i]); }
}

function closePopup() {
    document.getElementById('popup-screen').style.display='none';
    document.getElementById('next').style.display='block';
}

var cartList = JSON.parse(localStorage.getItem('cartList'));
var storedValue = JSON.parse(localStorage.getItem('savedApptDate'));
var storedTime = JSON.parse(localStorage.getItem('savedApptTime'));

function addToCart() {
    cartList.push(storedValue);
    cartList.push(storedTime);
    console.log("Cart list: ", cartList); 
    displayList(storedValue, storedTime);

}
function createButton(apptTime) {
    let btn = document.createElement('button');
    btn.innerHTML = apptTime;
    btn.className = 'button button-hrs';
    btn.onclick = function () {
        localStorage.setItem('savedApptTime', JSON.stringify(apptTime));  
    }
    document.getElementById('timeBox').appendChild(btn);
}

function confirmAppt() {
    document.getElementById('after-colon1').innerHTML = 'Date/Time: ' + storedValue + " @ " + storedTime;
    console.log("Cart List works across pages!", cartList);
}

/// Appointments List from Cart ///
var count = 0;
function displayList(day, time) {
    let list = document.getElementById('apptList');
    let li = document.createElement('li');
    li.id = 'buttonForList'+count;
    li.innerText = (day + "@" + time);
    list.appendChild(li);
    count = count + 1; 
    console.log(count);

    let list2 = document.getElementById(li.id);
    let btn = document.createElement('button');
    btn.innerText = "Cancel Appt";
    btn.onclick = removeAppt;
    list2.appendChild(btn);
}

//Remove from cartList function
function removeAppt() {
    cartList.splice(count-1, 2);
    console.log('removed', cartList, count)
    let list=document.getElementById('buttonForList'+(count-1));
    list.innerHTML='';
    
}