const createRowBtn = document.querySelector('#createRowBtn');
const row = document.querySelector('.row');

createRowBtn.addEventListener('click', () => {
    if(row.value == '') {
       alert('Please replace the "#" with a number between 1 and 42, then try again.')
    }
     
})