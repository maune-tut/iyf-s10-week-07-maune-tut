import { saveToStorage, getFromStorage } from './storage.js';

const todos = getFromStorage('my_todos');

console.log("Current Todos from storage:", todos);
// You can add your simple todo logic here later!