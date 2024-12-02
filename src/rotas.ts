import { Router } from "express";
import { cadastrar, detalhar, listar } from "./controladores/instrutores";

const rotas = Router();

rotas.get("/instrutores", listar)
rotas.get("/instrutores/:id", detalhar)
rotas.post("/instrutores", cadastrar)

export default rotas
