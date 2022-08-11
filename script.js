window.addEventListener('load', () => {
    const form = document.querySelector('#todoBox');
    const input = document.querySelector('#inputField');
    const listElement = document.querySelector('#todoList');
    
    
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        
        //Cria todos os elementos e adiciona as classes e valores
        const task_el = document.createElement('div');
        task_el.classList.add('task');
    
        const task_content = document.createElement('div');
        task_content.classList.add('content');
    
        const task_text = document.createElement('input');
        task_text.classList.add('text');
        task_text.type = 'text';
        task_text.value = input.value;
        task_text.setAttribute('readonly', 'readonly');
        
        
    
        const buttons = document.createElement('div');
        buttons.classList.add('buttons');
    
        const editBtn = document.createElement('button');
        editBtn.classList.add('edit-btn')
        editBtn.innerText = 'Edit';
        const deleteBtn = document.createElement('button');
        deleteBtn.classList.add('delete-btn')
        deleteBtn.innerText = 'Delete';
    
        //Adiciona as funções para deletar, editar e marcar a caixa de input
        deleteBtn.addEventListener('click', (e) => {
            listElement.removeChild(task_el);
        })
    
        editBtn.addEventListener('click', (e) => {
            if (editBtn.innerText.toLowerCase() === 'edit') {
                editBtn.innerText = 'Save';
                task_text.removeAttribute('readonly');
                task_text.focus();
                
            } else {
                editBtn.innerText = 'Edit';
                task_text.setAttribute('readonly', 'readonly');
            }
        })
    
    
        //Adiciona Todos os elementos na página
        buttons.appendChild(editBtn);
        buttons.appendChild(deleteBtn);
        task_content.appendChild(task_text);
        task_el.appendChild(task_content);
        task_el.appendChild(buttons);
        listElement.appendChild(task_el);
        console.log(task_el)
    
        //Limpa o campo de texto do input
        input.value = '';
        
        
    })
    })
    