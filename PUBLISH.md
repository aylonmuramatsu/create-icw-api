# 📦 Guia de Publicação - create-icw-api (Wrapper)

Este é o pacote wrapper que permite usar `npx create-icw-api` ao invés de `npx @insightcreativewebs/create-icw-api`.

## 🚀 Publicação

### Pré-requisito

**IMPORTANTE**: Publique primeiro o pacote `@insightcreativewebs/create-icw-api` antes deste wrapper!

### Passos

```bash
cd create-icw-api-wrapper

# Verificar
npm pack --dry-run

# Publicar
npm publish --access public
```

## ✅ Após publicação

Os usuários poderão usar:

```bash
npx create-icw-api minha-api
```

O wrapper automaticamente redireciona para `@insightcreativewebs/create-icw-api` usando `npx -y`.

## 🔄 Atualizações

Para atualizar, siga o mesmo processo:

```bash
npm version patch
npm publish
```

