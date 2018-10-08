document.querySelectorAll('.digits, .operation')
        .forEach(el => el.addEventListener('click', digitOperClick) );
        
function digitOperClick(e) {
    const target = e.target;
    const display = document.querySelector('.display');
    display.value += target.innerText;
}

document.querySelector('.equal')
        .addEventListener('click', equal);
        
document.querySelector('.clear') 
        .addEventListener('click', clear );
        
function equal() {
    const display = document.querySelector('.display');
    display.value = eval(display.value);
}
function clear()
{   
   document.getElementById("myForm").reset();
}