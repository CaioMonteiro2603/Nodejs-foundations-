import { Router } from "express";

const routes = Router();

routes.get('/usuarios', (req, res) => {
    console.log(req.query);
    try {
        const response = {
            nome: "Caio",
            Idade: 24,
            Endereco: "Hugo Carandina"
        }
        return res.status(403).json(response); 
    } catch (error) {
        return res.status(500).json({ message: 'internal server error '}); 
    }
    
})

routes.post('/usuarios/', (req, res) => {
    console.log(req.body); // body não é usado com get
    return res.status(201).json(req.body); 
}); 

export default routes;