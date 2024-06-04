## 📃 Documentação da API - Geral

### 💠 Nóticias

`GET` /noticia

Lista todos as notícias disponíveis.

#### Resposta

```json
[
    {
        "id": <string>,
        "titulo": <string>,
        "descricao": <string>,
        "conteudo": <string>,
        "data": <string>,
        "img": <string>,
    },
    {...}
]
```

<hr/>

`GET` /noticia/{id}

Lista notícia específica.

#### Resposta

```json
{
    "id": <string>,
    "titulo": <string>,
    "descricao": <string>,
    "conteudo": <string>,
    "data": <string>,
    "img": <string>,
}
```

<hr/>

## 📃 Documentação Clerk

Neste projeto, utilizamos os serviços do @Clerk para obter o e-mail do usuário a partir de sua conta do Google ou da Apple. Esse método é mais rápido, prático e seguro, pois elimina a necessidade de validar se o e-mail é real.
Basta conectar-se ao @Clerk para obter os e-mails cadastrados e enviá-los ao nosso banco de dados na plataforma deles.
