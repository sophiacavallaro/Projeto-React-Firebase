# 💜✨ Firebase Authentication | React + Vite ✨💙

## 🌸 Sobre o projeto

Neste projeto, eu desenvolvi uma aplicação web utilizando **React com Vite** integrado ao **Firebase Authentication**, com o objetivo de praticar o cadastro, login e controle de sessão de usuários.

A aplicação permite que o usuário crie uma conta, faça login e continue autenticado mesmo após recarregar a página, tudo com uma interface simples e funcional 💖

---

## 💖 O que eu fiz

Durante o desenvolvimento, eu:

- 💜 Criei um projeto no Firebase  
- 💙 Ativei o **Authentication**  
- 💖 Habilitei o login com **email e senha**  
- ⚛️ Configurei o projeto com **React + Vite**  
- 🔥 Integrei o Firebase com a aplicação  

---

## 🌷 Funcionalidades implementadas

### 💌 Cadastro de usuário
Criei um formulário onde o usuário pode se cadastrar com email e senha e utilizei o Firebase para registrar. Também tratei erros como email inválido, senha fraca e usuário já existente.

<!-- COLE A IMAGEM DO CADASTRO AQUI -->
![Cadastro](COLE_AQUI)

---

### 💙 Login
Implementei o login permitindo que o usuário entre com email e senha. O sistema valida com o Firebase e mostra mensagens de sucesso ou erro.

<!-- COLE A IMAGEM DO LOGIN AQUI -->
![Login](COLE_AQUI)

---

### 💜 Controle de sessão
Utilizei o `onAuthStateChanged` para verificar se o usuário está logado e manter a sessão ativa mesmo após recarregar a página.

<!-- COLE A IMAGEM DO USUÁRIO LOGADO AQUI -->
![Usuário Logado](COLE_AQUI)

---

### 🌈 Interface dinâmica
A interface muda dependendo do estado do usuário:
- Não autenticado: tela de login/cadastro  
- Autenticado: mostra o email e botão de logout  

<!-- COLE A IMAGEM DA INTERFACE AQUI -->
![Interface](COLE_AQUI)

---

### ✨ Loading
Adicionei um loading simples enquanto o sistema verifica a autenticação ou realiza login/cadastro.

<!-- COLE A IMAGEM DO LOADING AQUI -->
![Loading](COLE_AQUI)

---

### 🚪 Logout
Implementei um botão de logout que encerra a sessão do usuário com Firebase.

<!-- COLE A IMAGEM DO LOGOUT AQUI -->
![Logout](COLE_AQUI)

---

## 🧁 Tecnologias utilizadas

- ⚛️ React  
- ⚡ Vite  
- 🔥 Firebase Authentication  
- 🎨 CSS  

---

## ⚙️ Como executar o projeto

```bash
npm install
npm run dev