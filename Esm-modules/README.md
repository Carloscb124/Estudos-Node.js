# 📦 Módulo 05 - ECMAScript Modules (ESM)

Este repositório faz parte da **Formação Node.js** da [Digital Innovation One (DIO)](https://www.dio.me/), especificamente do módulo **ECMAScript Modules (ESM)**, que apresenta o sistema moderno de módulos JavaScript baseado em `import` e `export`.

---

## 📚 Objetivo

Aprender a utilizar os **módulos ECMAScript (ESM)** no Node.js, compreendendo como organizar e reutilizar código com a sintaxe moderna `import/export`, amplamente utilizada em aplicações JavaScript atuais e compatível com padrões web.

---

## 🧠 Conteúdo Abordado

- Diferença entre CommonJS e ECMAScript Modules (ESM)
- Como utilizar `import` e `export` no Node.js
- Configuração do `"type": "module"` no `package.json`
- Execução de arquivos `.mjs`
- Boas práticas de modularização

## 💡 Exemplo de Uso

import { add, sub } from './math.mjs';

console.log("Soma:", add(10, 5));       // 15
console.log("Subtração:", sub(10, 5));  // 5
