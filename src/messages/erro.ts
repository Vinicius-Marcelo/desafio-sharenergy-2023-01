interface Message {
    emailExist: string,
    cpfExist: string,
    clientNotCreate: string,
    clientNotUpdated: string,
    clientDontDel: string,
    forbidden: string,
    notFound: string,
    fieldEmpty: string,
    loginWrong: string,
    unauthorized: string
}

const erro: Message = {
    emailExist: 'O e-mail já está em uso, por favor tente outro',
    cpfExist: 'CPF já cadastrado',
    clientNotCreate: 'Não foi possivel cadastrar o client, por favor tente novamente',
    clientNotUpdated: 'Não foi possivel atualizar o cliente, por favor tente novamente',
    clientDontDel: 'Não foi possivel deletar o cliente, por favor tente novamente',
    forbidden: 'O usuário não tem permissão de acessar o recurso solicitado',
    notFound: 'Não foi possível encontrar o que foi solicitado',
    fieldEmpty: 'Um dos campos obrigatório está vazio',
    loginWrong: 'Username ou senha invalidos',
    unauthorized: 'o usuário não está autenticado (logado)'
};

// 400 (Bad Request) = o servidor não entendeu a requisição pois está com uma sintaxe/formato inválido
// 401 (Unauthorized) = o usuário não está autenticado (logado)
// 403 (Forbidden) = o usuário não tem permissão de acessar o recurso solicitado
// 404 (Not Found) = o servidor não pode encontrar o recurso solicitado

export default erro;