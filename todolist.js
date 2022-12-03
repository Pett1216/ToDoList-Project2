function addTodo()
{
    let input = document.getElementById (formName);
    let tarea = document.getElementById (formDiscription);
    let listE1 = addTodoElement(input.value);
    let addTodo = document.getElementById (form-list);

    addTodo.append (listE1);

    console.log("input : ", input.value);
    console.log("tarea : ", tarea.value);
}

function addTodoElement( value )
{
    let h4 = document.createElement('h4');
    let p = document.createElement('p');

    h4.innerText = "Name";
    p.innerHTML = "<span>Discription<span/>";

    let li = document.createElement('li');
    li.classList.add('list-group-item');
    li.append(h4);
    li.append(p);

    return li;
}
