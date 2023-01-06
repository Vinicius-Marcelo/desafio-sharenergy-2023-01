interface Message {
    clientCreate: string,
    clientUpdated: string,
    clientDel: string,
    ok: string,
    created: string,
    noContent: string
}

const success: Message = {
    clientCreate: 'Cliente cadastrado com sucesso',
    clientUpdated: 'Cliente atualizado com sucesso',
    clientDel: 'O cliente foi deletado com sucesso',
    ok: 'Requisição bem sucedida',
    created: 'Requisição bem sucedida e algo foi criado',
    noContent: 'Requisição bem sucedida, sem conteúdo no corpo da resposta',
}

// 200 (OK) = requisição bem sucedida
// 201 (Created) = requisição bem sucedida e algo foi criado
// 204 (No Content) = requisição bem sucedida, sem conteúdo no corpo da resposta

export default success;