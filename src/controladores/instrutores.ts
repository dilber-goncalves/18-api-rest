import { Request, Response } from "express";
import bancoDeDados from '../banco-de-dados'


export function listar(req: any, res: any) {
    return res.status(200).json(bancoDeDados.instrutores)
}

export function detalhar(req: any, res: any) {
    const { id } = req.params

    const instrutor = bancoDeDados.instrutores.find((item) => {
        return item.id === Number(id)
    })

    if(!instrutor) {
        return res.status(404).json({mensagem: "Instrutor não encontrado"})
    }

    return res.status(200).json(instrutor)
}

export function cadastrar(req: any, res: any) {
    const { nome, email } = req.body
    const id = bancoDeDados.instrutores.length + 1
    bancoDeDados.instrutores.push({id, nome, email})
    return res.status(201).json({id, nome, email})
}