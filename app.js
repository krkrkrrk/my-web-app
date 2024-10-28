// DOM要素を取得
const todoInput = document.getElementById('todo-input');
const addButton = document.getElementById('add-button');
const todoList = document.getElementById('todo-list');

// タスクを追加する関数
function addTask() {
    const taskText = todoInput.value;
    if (taskText === '') {
        alert('Please enter a task.');
        return;
    }

    // 新しいタスクのli要素を作成
    const listItem = document.createElement('li');
    listItem.textContent = taskText;

    // 削除ボタンを作成
    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'Delete';
    deleteButton.onclick = function() {
        todoList.removeChild(listItem);
    };

    // タスクに削除ボタンを追加
    listItem.appendChild(deleteButton);

    // タスクリストに新しいタスクを追加
    todoList.appendChild(listItem);

    // 入力フィールドをクリア
    todoInput.value = '';
}

// "Add Task"ボタンをクリックした時のイベントリスナーを追加
addButton.addEventListener('click', addTask);
