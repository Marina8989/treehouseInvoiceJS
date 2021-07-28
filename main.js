const createRowBtn = document.querySelector('#createRowBtn');
const row = document.querySelector('.row');
const clearBtn = document.querySelector('#clearBtn');
const stop = document.querySelector('.stop');
const container = document.querySelector('.container');
const closeAlertBtn = document.querySelector('.closeAlertBtn');

createRowBtn.addEventListener('click', () => {
    if(row.value == '') {
       alert('Please replace the "#" with a number between 1 and 42, then try again.')
    }
    //  else add table to html 
})

clearBtn.addEventListener('click', () => {
    container.style.position = 'relative';
    stop.style.display = 'block';
    stop.style.padding = '4rem';
    stop.style.border = '7rem solid rgba(0,0,0, .7)'
    stop.style.position = 'absolute';
    stop.style.top = '7.2rem';
    stop.style.left = '12rem';
    stop.style.background = 'rgba(250, 250, 250, .9)';
    stop.style.zIndex = '10';
})

closeAlertBtn.addEventListener('click', () => {
    stop.style.display = 'none';
})