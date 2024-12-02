type TIdentificador = number
type TAulas = {
    id: number,
    nome: string,
}
type TBancodedados = {
    proximoIdentificador: number
    instrutores: TInstrutores[]
}
type TInstrutores = {
    id: number,
    nome: string,
    email: string
    aulas: TAulas[]
} 


const bancoDeDados: TBancodedados = {
    proximoIdentificador: 3,
    instrutores: [
        {
            id: 1,
            nome: "Maria",
            email: "maria@email.com",
            aulas: [
                {id: 1 , nome: 'Aula de API REST'}
            ]
        },
        {
            id: 2,
            nome: "João",
            email: "joao@email.com",
            aulas: []
        }
    ]
}

export default bancoDeDados