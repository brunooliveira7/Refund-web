# 🧾 React Refund

Aplicação web construída com **React** no front-end e **Node.js** no back-end, destinada à **solicitação e gerenciamento de reembolsos**. O projeto inclui autenticação, upload de arquivos, paginação, pesquisa e tratamento de diferentes perfis de usuário (admin e usuário comum).

---

## 🚀 Funcionalidades Implementadas

### 🔐 Autenticação e Autorização
- Criação de contas e login com validações via **Zod**.
- Persistência da sessão com **localStorage**.
- Redirecionamento e renderização condicional de rotas conforme o perfil do usuário.
- Logout com limpeza de dados de sessão.

### 📦 Reembolso
- Envio de solicitações de reembolso com:
  - Nome
  - Categoria
  - Valor (com formatação de moeda)
  - Upload de comprovante (arquivo)
- Validação de formulário antes do envio.
- Visualização detalhada da solicitação por ID.

### 📋 Listagem e Paginação
- Listagem paginada de reembolsos no dashboard.
- Pesquisa por nome.
- Cálculo e controle de páginas totais.
- Renderização reativa ao alterar de página.

---

## 🔧 Tecnologias Utilizadas

### Front-end
- React + TypeScript
- React Router DOM
- Axios
- Zod (validações)
- Context API (gerenciamento de autenticação)

### Back-end (via API)
- Node.js

---



