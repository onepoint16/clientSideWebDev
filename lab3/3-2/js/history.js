let count = 0;

function getTime(){
    const today = new Date();
    const date = today.getFullYear()+'-'+
    (today.getMonth()+1)+'-'+today.getDate();
    const time = today.getHours() + ":" + today.getMinutes() +
    ":" + today.getSeconds();
    const dateTime = date+' '+time;
    return dateTime;
}

const addState = function() {
    const url = "state"+(++count);
    //window.history.pushState({}, '', url);

    window.history.pushState({savedurl:url, time:getTime()},"",url);
}

window.onload = function(){
    const button = document.getElementById('addstate');
    button.addEventListener("click", addState, false);

    window.addEventListener('popstate', (event) => {
        const {state: {savedurl}, state: {time}} = event;  // destructuring
        const content = document.getElementById('content');
        content.innerHTML = `<p>State saved: ${savedurl} at ${time}</p>`;
    });
}