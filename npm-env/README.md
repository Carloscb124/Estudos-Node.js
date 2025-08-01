# 🌱 NPM Environment – Variáveis de Ambiente no Node.js

Este projeto faz parte dos meus estudos com Node.js e explora o uso de **variáveis de ambiente** para manter configurações seguras e flexíveis, como tokens, portas, e chaves secretas.

---

## 📂 Estrutura do Projeto

```
09-npm-enviroment/
├── .env               # Arquivo de variáveis de ambiente (não versionado)
├── .gitignore         # Ignora o .env e node_modules
├── index.js           # Arquivo principal que lê as variáveis de ambiente
├── package.json       # Configurações do projeto
└── README.md          # Documentação do módulo
```

---

## 📦 Dependências

Utilizamos a biblioteca [`dotenv`](https://www.npmjs.com/package/dotenv) para carregar as variáveis do arquivo `.env` para o ambiente de execução Node.js.

Instalação:

```bash
npm install dotenv
```

---

## 📄 Exemplo de `.env`

```env
PORT=3000
API_KEY=abc123def456
NODE_ENV=development
```

> ⚠️ **Importante**: Nunca versionar o arquivo `.env`. Sempre inclua-o no `.gitignore`.

---

## 🚀 Como Executar

1. Crie um arquivo `.env` com as variáveis desejadas.
2. No `index.js`, carregue com:

```js
require('dotenv').config();

console.log(process.env.PORT);
```

3. Execute o projeto:

```bash
node index.js
```

---

## 🛡️ Boas Práticas

- 🔐 Nunca subir informações sensíveis para o repositório.
- ✅ Utilize `.env.example` como modelo para versionar o formato.
- 🌍 Use `process.env.NODE_ENV` para detectar o ambiente (desenvolvimento, produção etc).
- 💡 Organize variáveis por responsabilidade: banco de dados, autenticação, ambiente etc.

---

## 👨‍💻 Autor

**Carlos Eduardo**  

[🔗 GitHub](https://github.com/Carloscb124)
