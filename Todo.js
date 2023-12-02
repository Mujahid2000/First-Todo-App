let input = document.getElementById('inputValue');
let text = document.querySelector('.text');


function add() {
    if(input.value == ' '){
        alert('Please add a task')
    }else{
        let newTask = document.createElement('ul');
        newTask.innerHTML = `${input.value} <i class="fas fa-trash"></i>`
        text.appendChild(newTask);
        input.value = '';
        newTask.querySelector('i').addEventListener('click', remove);
        function remove(){
            newTask.remove()
        }

    }
}