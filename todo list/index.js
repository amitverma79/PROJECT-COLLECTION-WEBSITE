function get_todos() {
    var todos = new Array;
    var todo_str = localStorage.getItem('todo');
    if (todo_str !== null)
        todos = JSON.parse(todo_str);
    return todos;
}

function add() {
    var task = document.getElementById('task').value;

    var todos = get_todos();
    var f = 1;
    for (var a = 0; a < task.length; a++) {
        if (task[a] == ' ') {
            f = 1;
        } else {
            f = 0;
            break;
        }

    }
    if (f == 0) {
        todos.push(task);
        localStorage.setItem('todo', JSON.stringify(todos));
    }
    show();
    return false;
}

function clearDefault() {
    if (a.defaultValue == a.value)
        a.value = "";

}

function remove() {
    var id = this.getAttribute('id');
    var todos = get_todos();
    todos.splice(id, 1);
    localStorage.setItem('todo', JSON.stringify(todos));
    show();
    return false;
}

function show() {
    var todos = get_todos();
    var html = '<ul>';
    for (var i = 0; i < todos.length; i++) {
        html += '<li>' + todos[i] + '<button class="remove" id=' + i + '>Delete</button></li>';
    }
    html += '</ul>';
    document.getElementById('todos').innerHTML = html;
    var buttons = document.getElementsByClassName('remove');
    for (var i = 0; i < buttons.length; i++) {
        buttons[i].addEventListener('click', remove);
    }
}
document.getElementById('add').addEventListener('click', add);
show();