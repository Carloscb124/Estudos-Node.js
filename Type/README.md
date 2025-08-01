
# 📦 Projeto Type

Este é um projeto de estudos com foco em **Node.js + TypeScript**, utilizando ferramentas modernas como `tsup` e `tsx` para facilitar o desenvolvimento e build de aplicações.

## 🚀 Tecnologias Utilizadas

- **Node.js**
- **TypeScript**
- **tsup** – para empacotamento do código
- **tsx** – para execução de arquivos `.ts` sem compilação prévia
- **CommonJS** – saída configurada no `tsconfig.json`

## 📁 Estrutura do Projeto

```
Type/
├── src/
│   └── index.ts
├── dist/ (gerado pelo tsup)
├── package.json
└── tsconfig.json
```

## 📜 Scripts Disponíveis

| Script             | Descrição                                                              |
|--------------------|------------------------------------------------------------------------|
| `npm run dist`     | Compila o projeto com `tsup` e gera os arquivos em `/dist`             |
| `npm run start:dev`| Executa o projeto diretamente com `tsx` (modo desenvolvimento)          |
| `npm run start:dist`| Compila o projeto e executa o arquivo `dist/index.js`                 |

## ⚙️ Configuração do TypeScript (`tsconfig.json`)

```json
{
  "compilerOptions": {
    "target": "es2015",
    "module": "commonjs",
    "outDir": "./dist",
    "strict": true,
    "esModuleInterop": true
  }
}
```

### Explicação:

- `target: "es2015"` – gera código compatível com ES6+.
- `module: "commonjs"` – usa o sistema de módulos do Node.js.
- `outDir: "./dist"` – saída da compilação.
- `strict: true` – ativa todas as verificações de tipo mais rigorosas.
- `esModuleInterop: true` – permite importar pacotes CommonJS com `import`.

## 🛠️ Como Executar

1. Instale as dependências:

```bash
npm install
```

2. Execute em modo desenvolvimento:

```bash
npm run start:dev
```

3. Para compilar e rodar o projeto:

```bash
npm run start:dist
```

## 📌 Observações

- Certifique-se de que você tem o Node.js 16+ instalado.
- Embora o `tsconfig` use `commonjs`, o `package.json` está com `"type": "module"` para uso com `tsx`, então os imports devem seguir esse padrão (`import ... from`).

## 🧠 Objetivo

Este projeto serve como um ambiente de experimentação com TypeScript no Node.js, visando entender melhor a transpilação, execução e estrutura modular com ferramentas modernas.

---

🛠️ Em constante evolução  
📚 Parte do repositório de [Estudos em Node.js](https://github.com/Carloscb124/Estudos-Node.js)
