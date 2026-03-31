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

<img width="1920" height="955" alt="cadastro" src="https://github.com/user-attachments/assets/cd81c58b-278c-442f-8d41-dca9dbd6d00f" />

---

### 💙 Login
Implementei o login permitindo que o usuário entre com email e senha. O sistema valida com o Firebase e mostra mensagens de sucesso ou erro.

<img width="1920" height="963" alt="login" src="https://github.com/user-attachments/assets/9991d14e-d0d4-4632-af33-d1fb15f26875" />

---

### 💜 Controle de sessão
Utilizei o `onAuthStateChanged` para verificar se o usuário está logado e manter a sessão ativa mesmo após recarregar a página.
<img width="1920" height="963" alt="logado" src="https://github.com/user-attachments/assets/399a2a63-08fd-43e3-9888-4f0c38d139e5" />

---

### 🌈 Interface dinâmica
A interface muda dependendo do estado do usuário:
- Não autenticado: tela de login/cadastro  
- Autenticado: mostra o email e botão de logout  
---

### ✨ Loading

Adicionei um loading simples enquanto o sistema verifica a autenticação ou realiza login/cadastro.

---

### 🚪 Logout
Implementei um botão de logout que encerra a sessão do usuário com Firebase.

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
