import { Router } from 'express';
import CharacterController from './controllers/CharacterController';
const routes = new Router();

routes.get('/', (req, res) => {
  res.status(200).json({message: 'Olou'});
})

routes.get('/character', CharacterController.index);
routes.get('/character/:id', CharacterController.show);

export default routes;