// routes.ts
import express from 'express';

import { CreateUser } from '../controllers/Users/CreateUser'
import { GetUsers } from '../controllers/Users/GetUsers';
import { GetOneUser } from '../controllers/Users/GetOneUser';
import { UpdatedOneUser } from '../controllers/Users/UpdatedOneUser';
import { DeleteOneUser } from '../controllers/Users/DeleteOneUser';

const router = express.Router();

// CRUD Users
router.get('/users', GetUsers) // Lógica para obter todos os usuários
router.get('/users/:id', GetOneUser)// Lógica para obter um usuário por ID
router.post('/users', CreateUser) // Lógica para criar um usuário
router.put('/users/:id', UpdatedOneUser) // Lógica para atualizar um usuário por ID
router.delete('/users/:id', DeleteOneUser) // Lógica para excluir um usuário por ID

// Login

export default router;
