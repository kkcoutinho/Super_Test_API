# 🧪 Testes Automatizados de API com SuperTest e Jest  

Este repositório contém testes automatizados para validar endpoints da **API PetStore Swagger**, utilizando **SuperTest** e **Jest**. 
Os testes abrangem operações **POST, GET, PUT e DELETE**, garantindo precisão na manipulação de dados e integração da API.  

## 📌 Funcionalidades  
- ✅ **POST** ➝ Criação de usuários individuais e múltiplos.  
- ✅ **GET** ➝ Recuperação de informações de um usuário.  
- ✅ **PUT** ➝ Atualização de dados de um usuário existente.  
- ✅ **DELETE** ➝ Exclusão de um usuário.  

## 🚀 Estrutura do Projeto  

📂 **Projeto**  
- 📁 `test`  
- 📄 `user.spec.js` ➝ Testes de API para operações CRUD.  
- 📁 `users`  
- 📄 `massaUser.js` ➝ Massa de dados para testes parametrizados de múltiplos usuários.  
- 📄 `user.json` ➝ Dados de entrada para teste de criação.  
- 📄 `userPut.json` ➝ Dados de atualização para teste de PUT.  
- 📄 `.gitignore` ➝ Arquivos ignorados pelo Git.  
- 📄 `package-lock.json` ➝ Gerenciamento de dependências.  
- 📄 `package.json` ➝ Configuração do projeto e dependências.  

## 🛠 Tecnologias Utilizadas  
- **JavaScript** 🚀  
- **SuperTest** para testes de API  
- **Jest** para execução e validação de testes  
- **Node.js** como ambiente de execução  

## 🔥 Como Executar os Testes  
1️⃣ Clone o repositório:  
   ```bash
   git clone https://github.com/seu-usuario/nome-do-repositorio.git
   ```  
2️⃣ Instale as dependências:  
   ```bash
   npm install
   ```  
3️⃣ Execute os testes:  
   ```bash
   npx jest
   ```  

## 📖 Licença  
Este projeto está sob a licença MIT. Sinta-se à vontade para explorar e contribuir!  
