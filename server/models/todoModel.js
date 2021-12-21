import dbConnect from '../config/db-config.js';

const findAll = () => {
    return new Promise((resolve, reject) => {
        dbConnect.query('SELECT todo.id, todo.title, todo.description, todo.state_id, state.value as state_value, todo.priority_id, priority.value as priority_value FROM todo JOIN state ON todo.state_id = state.id JOIN priority ON todo.priority_id = priority.id', (err, results) => {
            if (err) reject(err);
            else resolve(results);
        })
    })
}

const changeState = (idTodo, idState) => {
    return new Promise((resolve, reject) => {
        dbConnect.query('UPDATE todo SET state_id = ? WHERE id = ?', [idState, idTodo], (err, results) => {
            if (err) reject(err);
            else resolve(results);
        })
    })
}

export default { findAll, changeState };