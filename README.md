# simplifica-sesi-api

# Rotas

    # Turmas 

        # GET https://simplifica-sesi-api.vercel.app/api/turmas :
        Pega todas as turmas cadastradas;

        # POST https://simplifica-sesi-api.vercel.app/api/turmas : 
        Permite criar turmas;
        
        Ex. de json: 

            {
                "ano": "3",
                "identificador": "A"
            }

        # DELETE https://simplifica-sesi-api.vercel.app/api/turmas/:key (encontrada na pasta ./admin/key.js) :
        Deleta todas as turmas adicionando a senha chave na url;

        # DELETE https://simplifica-sesi-api.vercel.app/api/turma/:id
        Permite deletar uma turma pelo id;

    # Atividades

        # GET https://simplifica-sesi-api.vercel.app/api/atividades
        Mostra todas as atividades cadastradas;
        
        # GET https://simplifica-sesi-api.vercel.app/api/atividade/:id 
        Permite buscar por uma atividade em especifico;

        # POST https://simplifica-sesi-api.vercel.app/api/atividades
        Permite criar uma atividade;

        Ex. de json: 

            {
                "turma_id": "66757e20ae3e81113663ece9",
                "titulo": "Projeto de Ciência",
                "descricao": "Este projeto envolve a criação de um modelo de sistema solar.",
                "prazo": "2024-07-31T23:59:59Z",
                "habilidades": "H1, H2, H3",
                "competencias": "C3, C21",
                "links": [
                    {
                        "link": "http://example.com/modelo-sistema-solar"
                    },
                    {
                        "link": "http://example.com/recursos-adicionais"
                    }
                ]
            }

        # PUT https://simplifica-sesi-api.vercel.app/api/atividade/:id
        Permite atualizar algum campo da atividade (exceto a turma ao qual ela está cadastrada) pelo id;

        Ex. de json: 

            {
                "titulo": "Feira de Ciência",
                "habilidades": "H1, H2, H3",
                "competencias": "C3, C21",
                "links": [
                    {
                        "link": "https://example.com/casadas-agora"
                    },
                    {
                        "link": "http://example.com/recursos-removiveis"
                    }
                ]
            }

        OBS: Não existe a função de deletar os links de cada atividade, e não há uma verificação no back end para o envio do link

        # DELETE https://simplifica-sesi-api.vercel.app/api/atividade/:id 
        Permite deletar uma atividade pelo id;

        # DELETE https://simplifica-sesi-api.vercel.app/api/atividades/:key (encontrada na pasta ./admin/key.js) :
        Deleta todas as atividades adicionando a senha chave na url;