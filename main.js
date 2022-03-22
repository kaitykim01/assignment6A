// Pop up screen // 
function showPopup(txt, times) {
    document.getElementById('popup-screen').style.display='block';
    document.getElementById('dateBox').innerHTML = txt;
    document.getElementById('timeBox').innerHTML ='';
    localStorage.setItem('savedApptDate', JSON.stringify(txt));
    for (let i=0; i<times.length; i++) {
        createButton(times[i]); }
}

function closePopup() {
    document.getElementById('popup-screen').style.display='none';
    document.getElementById('next').style.display='block';
}

let cartList = []; // initialize cartlist //
const storedValue = JSON.parse(localStorage.getItem('savedApptDate'));
const storedTime = JSON.parse(localStorage.getItem('savedApptTime'));
if (storedValue == null + storedTime == null) {
    cartList = [];

} else {
    //cartList.push(storedValue);
    //cartList.push(storedTime);
} 

function addToCart() {
    cartList.push(JSON.parse(localStorage.getItem('savedApptDate'))); 
    cartList.push(JSON.parse(localStorage.getItem('savedApptTime')));
    console.log("Cart list: ", cartList); 
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
}





