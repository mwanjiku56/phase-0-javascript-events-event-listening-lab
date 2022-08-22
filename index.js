

function addingEventListener() {
    const input = document.getElementById('input');
    input.addEventListener('click', clickEvent);

}

function clickEvent (){
    alert('I was clicked!');

}
addingEventListener();
