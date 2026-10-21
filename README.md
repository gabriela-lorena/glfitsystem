# Gabriela Lorena — Consultoria On-line

Landing page do método **GL FIT SYSTEM**. HTML estático, pronto para o GitHub Pages.

## Publicar no GitHub Pages

1. Crie um repositório e envie todos os arquivos desta pasta (inclusive o `.nojekyll`).
2. No repositório: **Settings → Pages → Build and deployment → Deploy from a branch**, branch `main`, pasta `/ (root)`.
3. Marque **Enforce HTTPS**.

## Antes de publicar

No `index.html`, troque os dois textos entre colchetes:

- `[SEU NÚMERO CREF]`
- `[SUA FORMAÇÃO, ESPECIALIZAÇÕES E CONQUISTAS NO PALCO]`

## Segurança

O GitHub Pages não permite configurar cabeçalhos HTTP, então a proteção foi feita assim:

| Proteção | Como está implementada |
|---|---|
| CSP | `<meta http-equiv="Content-Security-Policy">`: só scripts do próprio site, fontes do Google Fonts, sem plugins, sem formulários externos |
| Anti-clickjacking | `assets/js/seguranca.js`: a página não aparece dentro de iframe de outro site (padrão OWASP) |
| HTTPS / HSTS | "Enforce HTTPS" do GitHub Pages; domínios `*.github.io` já são servidos com HSTS |
| Links externos | `target="_blank" rel="noopener noreferrer"` em todos |
| Referrer | `strict-origin-when-cross-origin` |

Se um dia usar domínio próprio atrás da Cloudflare (ou migrar para Netlify/Vercel), dá para adicionar `X-Frame-Options: DENY`, `frame-ancestors 'none'` e HSTS com preload como cabeçalhos reais.

## Performance

- Fotos abaixo da dobra e logo do rodapé com `loading="lazy"`.
- Foto principal e logo do topo carregam imediatamente (com `preload`), porque lazy loading no que aparece primeiro deixa a página mais lenta.
