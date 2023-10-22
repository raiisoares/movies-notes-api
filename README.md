# movies-notes-api

Bem-vindo ao Moovies Notes API, um projeto proposto pelo programa Explorer da Rocketseat. Esta API é dedicada à uma aplicação de cadastro de notas sobre filmes. Aqui estão os principais recursos e tecnologias envolvidas no projeto:

**link para consumir a api:** https://movies-notes-exp-api.onrender.com

## Funcionalidades

1. **Adicionar Notas:** Adicione novos notas à base de dados, incluindo detalhes como nome, nota, descrição e tags.

2. **Excluir Notas:** Remova Notas existentes da base de dados.

3. **Pesquisar pelo título:** Realize buscas eficientes por notas com base no seus títulos.

4. **Cadastro de Usuários:** Utilize JWT (JSON Web Tokens) e cookies para autenticação segura e gerenciamento de usuários.

5. **Upload de Imagens:** Permita o envio e armazenamento de imagens de perfil dos usuários.

## Tecnologias Utilizadas

- **Node.js:** Ambiente de execução JavaScript do lado do servidor.

- **JavaScript:** Linguagem de programação principal para a lógica do aplicativo.

- **Express:** Framework web para Node.js, facilitando o desenvolvimento de APIs.

- **pm2:** Gerenciador de processos para Node.js.

- **SQLite:** Banco de dados leve e eficiente para armazenamento de dados.

- **knex:** ORM, utilizado para interagir com o banco de dados.

## Como Iniciar

1. **Instalação de Dependências:**
``npm isntall``
2. **Configuração do Banco de Dados:**
``npm run migrate``
3. **Iniciar o Servidor de desenvolvimento:**
``npm run dev``
4. **Iniciar o Servidor:**
``npm start``
5. **Executar Testes:**
``npm run test``

## Contas pré-definidas

### Dados para logIn 
- **nome:** Client
- **email:** client@email.com
- **senha:** 123456

## Funcionalidades a serem Adicionadas

1. **Testes:** Adição de testes unitários.
2. **Atualizar notas**: Adição da funcionalidade de update nas notas cadastradas.

# Documentação das requisições
### Criar Novo Usuário

**Endpoint:** `POST /users`

```http
POST /users
Content-Type: application/json

{
  "name": "Nome do Usuário",
  "email": "usuario@email.com",
  "password": "senha123"
}
```
### Atualizar Usuário
Descrição: Atualiza informações de um usuário, os dados a serem atualizados são opcionais, podendo ser um ou todos..

**Endpoint:** `PUT /users`

```http
PUT /users
Content-Type: application/json

{
  "name": "Novo Nome do Usuário",
  "email": "novo@email.com",
  "password": "novasenha",
  "old_password": "senhaantiga"
}
```
### Excluir Usuário

**Endpoint:** `POST /users`

### Atualizar Avatar do Usuário

**Endpoint:** `PATCH /users/avatar`

```http
PATCH /users/avatar
Content-Type: multipart/form-data

[Arquivo da Imagem]

```

### Criar Nova Sessão (Login)
Autentica um usuário e retorna um token JWT para autorização subsequente.

**Endpoint:**  `POST /sessions`

```http
POST /sessions
Content-Type: application/json

{
  "email": "usuario@email.com",
  "password": "senha123"
}
```

### Criar Nova Anotação (Note)

**Endpoint:** `POST /notes`

```http
POST /notes
Content-Type: application/json
Authorization: Bearer [TOKEN_JWT]

{
  "title": "Título da Anotação",
  "description": "Descrição da Anotação",
  "rating": 4,
  "tags": ["Tag1", "Tag2"]
}
```

### Excluir Anotação

**Endpoint:** `DELETE /notes/:id`
```http
DELETE /notes/[ID_DA_ANOTACAO]
Authorization: Bearer [TOKEN_JWT]
```

### Mostrar Detalhes da Anotação
Retorna detalhes de uma anotação específica.

**Endpoint:** `GET /notes/:id`

```http
GET /notes/[ID_DA_ANOTACAO]
Authorization: Bearer [TOKEN_JWT]
```
### Listar Anotações
Lista anotações com base em filtros opcionais.

**Endpoint:** `GET /notes`

```http
GET /notes?title=Título&tags=Tag1,Tag2
Authorization: Bearer [TOKEN_JWT]
```

### Listar Tags das Anotações
**Endpoint:** `GET /tags`

```http
GET /tags
Authorization: Bearer [TOKEN_JWT]
```
