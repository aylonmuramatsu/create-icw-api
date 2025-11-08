# create-icw-api

<div align="center">

**CLI para criar novos projetos ICW API**

[![npm version](https://img.shields.io/npm/v/create-icw-api)](https://www.npmjs.com/package/create-icw-api)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![Node.js](https://img.shields.io/badge/Node.js-%3E%3D18.0.0-brightgreen)](https://nodejs.org/)

</div>

## 🚀 Instalação

```bash
npm install -g create-icw-api
# ou use diretamente com npx (recomendado)
npx create-icw-api minha-api
```

## 📦 Uso

### Criar novo projeto

```bash
npx create-icw-api minha-api
```

Isso irá:
- ✅ Criar a estrutura do projeto
- ✅ Instalar `@insightcreativewebs/api` automaticamente
- ✅ Configurar TypeScript
- ✅ Configurar scripts do framework

### Estrutura criada

```
minha-api/
├── src/
│   ├── modules/          # Seus módulos aqui
│   └── server.ts         # Entry point
├── .env                  # Gerado automaticamente
├── .env.example          # Referência
├── package.json
├── tsconfig.json
└── README.md
```

## 🎯 Próximos Passos

Após criar o projeto:

```bash
cd minha-api
npm install
npm run dev
```

O servidor estará rodando em `http://localhost:3000`

## 📝 Scripts Disponíveis

Após criar o projeto, você terá acesso aos seguintes scripts:

- `npm run dev` - Inicia servidor em modo desenvolvimento
- `npm run build` - Compila TypeScript
- `npm run start` - Inicia servidor em produção
- `npm run generate:module <nome>` - Gera novo módulo
- `npm run generate:env` - Gera/atualiza arquivos .env

## 🔧 Configuração

### Variáveis de Ambiente

O projeto vem com um `envSchema` pré-configurado em `src/server.ts`. Execute:

```bash
npm run generate:env
```

Isso gerará o arquivo `.env` com todas as variáveis necessárias.

### Criar Módulos

```bash
npm run generate:module user
```

Isso cria:
- `src/modules/user/user.controller.ts`
- `src/modules/user/user.service.ts`
- `src/modules/user/user.rules.ts`
- `src/modules/user/user.module.ts`

## 📚 Documentação

Para mais informações sobre o framework, consulte:

- [@insightcreativewebs/api](https://www.npmjs.com/package/@insightcreativewebs/api)
- [Documentação Completa](https://github.com/aylonmuramatsu/icw-api-boilerplate)

## 🤝 Contribuindo

Contribuições são bem-vindas! Por favor, abra uma issue ou pull request.

## 📄 Licença

MIT © 2025 [Aylon Muramatsu](https://github.com/aylonmuramatsu)

## 🔗 Links

- [GitHub](https://github.com/aylonmuramatsu/create-icw-api)
- [NPM](https://www.npmjs.com/package/create-icw-api)
- [Framework](https://www.npmjs.com/package/@insightcreativewebs/api)

---

<div align="center">

Feito com ❤️ por [Insight Creative Webs](https://insightcreativewebs.com)

</div>

