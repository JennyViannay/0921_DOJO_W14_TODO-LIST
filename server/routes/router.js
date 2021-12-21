import homeController from '../controllers/homeController.js';
import todoController from '../controllers/todoController.js';

export const setupRoutes = (app) => {
    app.use('/home', homeController);
    app.use('/todos', todoController);
}