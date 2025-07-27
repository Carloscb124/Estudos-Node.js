# 🛠️ NPM Scripts em Node.js

Este diretório contém estudos e exemplos práticos sobre como utilizar scripts personalizados no `package.json` com o **npm** no ecossistema Node.js. Ideal para desenvolvedores que desejam automatizar tarefas e compreender o ciclo de vida de scripts no NPM.

---

## 📦 O que são NPM Scripts?

No Node.js, o campo `"scripts"` no `package.json` permite definir comandos que podem ser executados com:

```bash
npm run <script>
```

Além disso, o **npm** oferece suporte a scripts especiais como `pre`, `post` e hooks de ciclo de vida para automatizar processos em momentos-chave como instalação, testes, publicação e build.

---

## 🔄 Scripts de Ciclo de Vida

Esses scripts são executados automaticamente em determinadas etapas do ciclo de vida do pacote:

| Script           | Quando é executado                                      |
|------------------|---------------------------------------------------------|
| `prepare`        | Antes do empacotamento (`npm pack`, `npm publish`)     |
| `prepublishOnly` | Apenas antes de `npm publish`                          |
| `prepack`        | Antes de criar o tarball (`npm pack`, `npm publish`)   |
| `postpack`       | Depois de gerar o tarball                              |
| `dependencies`   | Após alterações em `node_modules`                      |

---

## ▶️ Ordem de Execução

### 🧩 Durante `npm install`:
```
preinstall → install → postinstall → prepublish → prepare
```

### 🚀 Durante `npm publish`:
```
prepublishOnly → prepack → prepare → postpack → publish → postpublish
```

### 🧪 Durante `npm test`:
```
pretest → test → posttest
```

---

## 🧾 Exemplo de Scripts no package.json

```json
"scripts": {
  "test": "echo \"ola error\" && exit 1",
  "iniciar": "node src/index.js"
}
```

Execute com:
```bash
npm run test
npm run iniciar
```

No **VS Code**, você também pode rodar clicando em **RUN SCRIPT** nos três pontos ao passar o mouse pelo script no `package.json`.

---

## 📌 Padrão de Scripts em Projetos

```json
"scripts": {
  "prebuild": "npm install",
  "start:dev": "node src/index.js",
  "start:watch": "node --watch src/index.js",
  "test": "jest",
  "test:watch": "jest --watch",
  "test:coverage": "jest --coverage",
  "lint": "eslint .",
  "lint:fix": "eslint . --fix",
  "format": "prettier --write .",
  "clean": "rm -rf dist",
  "precommit": "npm run lint && npm run test",
  "deploy": "bash ./scripts/deploy.sh",
  "analyze": "webpack-bundle-analyzer dist/stats.json",
  "storybook": "start-storybook -p 6006",
  "storybook:build": "build-storybook",
  "storybook:deploy": "storybook-to-ghpages"
}
```

---

## 📚 Referências

- [Documentação Oficial NPM Scripts](https://docs.npmjs.com/misc/scripts)
- [Node.js Docs](https://nodejs.org/)

---

## 👨‍💻 Autor

**Carlos Eduardo**  
Estudante e entusiasta de Node.js, explorando os fundamentos da automação de tarefas com NPM Scripts.

[🔗 GitHub](https://github.com/Carloscb124)

---