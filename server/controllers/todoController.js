import express from 'express';
import Todo from '../models/todoModel.js';
import State from '../models/stateModel.js';

const router = express.Router(); 

// list todo
router.get('/', async (req, res) => {
    try {
        const todos = await Todo.findAll();
        res.json(todos).status(200);
    } catch (error) {
        res.json(error).status(500);
    }   
})

// change-state
router.put('/change-state', async (req, res) => {
    const { idTodo, idState } = req.body;
    console.log(idTodo, idState);
    try {
        const todo = await Todo.changeState(idTodo, idState);
        res.json(todo.message).status(200);
    } catch (error) {
        res.json(error).status(500);
    }
})

router.get('/states', async (req, res) => {
    try {
        const states = await State.findAll();
        res.json(states).status(200);
    } catch (error) {
        res.json(error).status(500);
    }
})

export default router;