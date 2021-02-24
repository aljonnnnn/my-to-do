const append = document.querySelector('.todo__btn');



// append list and span function 
const addList = () => {
    const addItem = document.createElement("li");
    const input = document.querySelector('.todo__input').value;
    const textnode = document.createTextNode(input);
    addItem.appendChild(textnode);
    addItem.classList.add('todo__item');

    const addRemove = document.createElement('span');
    addRemove.textContent = 'remove';
    document.querySelector('.todo__input').value = '';

    if (input !== '') {
        document.querySelector(".todo___list").append(addItem);
        // add span sa last item
        document.querySelector(".todo___list").lastChild.appendChild(addRemove).classList.add('todo__remove');
    }
}


// add list when click plus button
append.addEventListener('click', addList);


// add list when click enter
const inputEnter =  document.querySelector('.todo__input');
inputEnter.addEventListener('keypress', function(event) {
    if (event.keyCode === 13) {
        addList();
    }
})


// add line class when click tage name
const addLine = document.querySelector('.todo___list');
addLine.addEventListener('click', function(event) {
    if (event.target.tagName === 'LI') {
        event.target.classList.toggle('line');
    }
});


// remove parent list when click remove btn 
let removeItem = document.querySelector('.todo___list');
removeItem.addEventListener('click', function(event) {
if (event.target.tagName === 'SPAN') {
    event.target.parentElement.remove();
}
});
