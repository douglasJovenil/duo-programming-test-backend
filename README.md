# DUO Programming Test Backend

## Configurações
É necessário configurar um arquivo .env para rodar a aplicação localmente. Há um template no projeto [.env.example](./docs/.env.example).

## Rodar a aplicação localmente
```bash
docker-compose up --build
```

## Ambiente Cloud
- Base URL: https://duo-programming-test.herokuapp.com
- FAQ endpoint: https://duo-programming-test.herokuapp.com/faq
- Swagger: https://duo-programming-test.herokuapp.com/docs
- Frontend: https://duo-programming-test-frontend.herokuapp.com/

## Descrição da API
Além da documentação descrita abaixo também é possível verificar a doc gerada pelo **Swagger** no endpoint `/docs`.

**/faq**:
  - Descrição: retorna todas as questões registrados no banco de dados
  - Retorno esperado com GET: 
    ```json
    [
      {
        "id": 1,
        "title": "O catálogo é grátis?",
        "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed a ligula risus. Quisque sagittis nunc ut diam sagittis tempor. Etiam mollis, felis a consectetur volutpat,",
        "updated_at": "2021-11-14T22:25:12.000Z",
        "created_at": "2021-11-14T22:25:12.000Z"
      },
      {
        "id": 2,
        "title": "Tenho que pagar alguma taxa para ser consultor(a)?",
        "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed a ligula risus. Quisque sagittis nunc ut diam sagittis tempor. Etiam mollis, felis a consectetur volutpat,",
        "updated_at": "2021-11-14T22:25:12.000Z",
        "created_at": "2021-11-14T22:25:12.000Z"
      },
    ]
    ```

  <br>

  - Descrição: salva uma questão no banco de dados
  - Formato de JSON esperado no corpo da requisição:
    ```JSON
    {
      "title": "Another Title example",
      "description": "Description example"
    }
    ```
  - Retorno esperado com POST: status code 201 no content

  <br>
  
  - Descrição: edita uma questão já existente no banco de dados
  - Formato de JSON esperado no corpo da requisição:
  ```JSON
  {
    "id": 10,
    "newDescription": "Edit question example"
  }
  ```
  - Retorno esperado com PUT: status code 204 no content 

  <br>
  
  - Descrição: deleta uma questão já existente no banco de dados
  - Formato de JSON esperado no corpo da requisição:
  ```JSON
  {
    "id": 12
  }
  ```
  - Retorno esperado com DELETE: status code 204 no content