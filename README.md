# simplifica-sesi-api

# Rotas

    # Turmas 

        # GET https://simplifica-sesi-api.vercel.app/api/turma/:id :
        Permite buscar uma turma pelo id;

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

        OBS: Se adicionado '"representante_id" : "{id}"', o representante pode adicionar uma atividade

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
        OBS 2: Se adicionado '"representante_id" : "{id}"', o representante pode atualizar um evento
        
        # DELETE https://simplifica-sesi-api.vercel.app/api/atividade/:id 
        Permite deletar uma atividade pelo id;

        # DELETE https://simplifica-sesi-api.vercel.app/api/atividades/:key (encontrada na pasta ./admin/key.js) :
        Deleta todas as atividades adicionando a senha chave na url;

    # Eventos

        # GET https://simplifica-sesi-api.vercel.app/api/eventos
        Mostra todas os eventos cadastrados;
        
        # GET https://simplifica-sesi-api.vercel.app/api/evento/:id 
        Permite buscar por um evento em especifico;

        # POST https://simplifica-sesi-api.vercel.app/api/eventos
        Permite criar um evento;

        Ex. de json: 

            {
                "turma_id": "66757e20ae3e81113663ece9",
                "titulo": "Feira de Ciência",
                "descricao": "Este projeto envolve a criação de um modelo de sistema solar.",
                "data": "2024-07-23T23:59:59Z"	
            }

        OBS: Se adicionado '"representante_id" : "{id}"', o representante pode adicionar uma atividade

        # PUT https://simplifica-sesi-api.vercel.app/api/evento/:id
        Permite atualizar algum campo do evento (exceto a turma ao qual ela está cadastrado) pelo id;

        Ex. de json: 

            {
                "titulo": "Feira de Ciência 2",
                "descricao": "Este projeto envolve a criação de um modelo de sistema solar.",
                "data": "2024-07-23T23:59:59Z"	
            }

        OBS: Se adicionado '"representante_id" : "{id}"', o representante pode atualizar uma atividade

        # DELETE https://simplifica-sesi-api.vercel.app/api/evento/:id 
        Permite deletar um evento pelo id;

        # DELETE https://simplifica-sesi-api.vercel.app/api/eventos/:key (encontrada na pasta ./admin/key.js) :
        Deleta todas os eventos adicionando a senha chave na url;

    # Representantes

        # GET https://simplifica-sesi-api.vercel.app/api/representante/:id 
        Permite buscar por um representante em especifico;

        # POST https://simplifica-sesi-api.vercel.app/api/representantes
        Permite criar um representante;

        # DELETE https://simplifica-sesi-api.vercel.app/api/representante/:id 
        Permite deletar um representante pelo id;

        # DELETE https://simplifica-sesi-api.vercel.app/api/representantes/:key (encontrada na pasta ./admin/key.js) :
        Deleta todas os representantes adicionando a senha chave na url;

    # Areas do conhecimento

        # GET https://simplifica-sesi-api.vercel.app/api/area-conhecimento/:id 
        Permite buscar por uma area do conhecimento em especifico;

        # POST https://simplifica-sesi-api.vercel.app/api/area-conhecimento
        Permite criar uma area do conhecimento;

        # DELETE https://simplifica-sesi-api.vercel.app/api/representante/area-conhecimento/:id 
        Permite deletar uma area do conhecimento pelo id;

        # GET https://simplifica-sesi-api.vercel.app/api/areas-conhecimento
        Permite visualizar todas as areas do conhecimento