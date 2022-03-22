// Pop up screen // 
function showPopup(txt, times) {
    document.getElementById('popup-screen').style.display='block';
    document.getElementById('dateBox').innerHTML = txt;
    document.getElementById('timeBox').innerHTML ='';
    localStorage.setItem('savedApptDate', JSON.stringify(txt));
    for (let i=0; i<times.length; i++) {
        createButton(times[i]); }
}

let cartList; // initialize cartlist //
const storedValue = JSON.parse(localStorage.getItem('savedApptDate'));
const storedTime = JSON.parse(localStorage.getItem('savedApptTime'));
if (storedValue == null + storedTime == null) {
    cartList = [];
} else {
    cartList = [storedValue, storedTime];
} 


function createButton(apptTime) {
    let btn = document.createElement('button');
    btn.innerHTML = apptTime;
    btn.className = 'button button-hrs';
    btn.onclick = function () {
        localStorage.setItem('savedApptTime', JSON.stringify(apptTime));
        console.log(cartList);
    }
    console.log(cartList);
    document.getElementById('timeBox').appendChild(btn);
}



function confirmAppt() {
    document.getElementById('after-colon1').innerHTML = 'Date/Time: ' + cartList[cartList.length-2] + " @ " + cartList[cartList.length-1];
    console.log(cartList);

}





