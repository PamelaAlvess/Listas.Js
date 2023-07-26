let data = [];

// Função para renderizar a lista de tarefas
function renderTodo() {

  document.querySelector('.todo').innerHTML ='';


data.forEach(task => {

    let li = document.createElement('li');

     // Monta o HTML para cada tarefa
    li.innerHTML = `
       
    <input type="checkbox" id="task-${task.id}">
    <label for="task-${task.id}">${task.title}</label>
    <button type="button">x</button>
        
    `;

    // Adiciona um evento de mudança ao checkbox
    li.querySelector('input').addEventListener("change",e => {
        

      if (e.target.chacked) {
        li.classList.add('complete');


      } else {
        li.classList.remove('complete');

      }

    });


    // Adiciona um evento de clique ao botão de excluir
    li.querySelector('button').addEventListener('click',e => {



      let button = e.target;
      let li = button.parentNode;
      let input = li.querySelector('input');
      let id = input.id;
      let idArray = id.split('-');
      let todoId = idArray [1];
      let title = li.querySelector('label').innerText;


      // Confirmação de exclusão e remove a tarefa do array "data"
      if (confirm(`Deseja realmente excluir a tarefa ${title}?`)){
           


        data =  data.filter(task => task.id !== parseInt(todoId));

        renderTodo();


      }

    
     
    

    
    });


     // Adiciona o elemento "li" à lista
    document.querySelector('.todo').append(li);

  });

   
};


// Evento para adicionar tarefa ao pressionar "Enter" no input
    document.querySelector('#new-task').addEventListener('keyup', e =>{

       if (e.key === 'Enter') {
         

          data.push({
            id: data.length+1,
            title: e.target.value

          });


          e.target.value = "";

          renderTodo();

       }

    });
// Chama a função para renderizar a lista de tarefas ao carregar a página
renderTodo();