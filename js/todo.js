import { saveToStorage, getFromStorage } from './storage.js';

const todos = getFromStorage('my_todos');

console.log('Current Todos from storage:', todos);
// You can add your simple todo logic here later!
// 1. Import the helpers we already made
import { saveCart, loadCart } from './storage.js';

// Note: Since 'storage.js' was named for the cart, let's just
// use simple localStorage here to keep it separate for your Todo list.

const TODO_KEY = 'iyf_todos';

export function saveTodos(todos) {
    localStorage.setItem(TODO_KEY, JSON.stringify(todos));
}

export function loadTodos() {
    const saved = localStorage.getItem(TODO_KEY);
    return saved ? JSON.parse(saved) : [];
}
