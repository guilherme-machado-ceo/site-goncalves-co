# Gonçalves & Co. - Website

Site corporativo da Gonçalves & Co. com design moderno, efeitos LED, animações e suporte multilíngue.

## 🚀 Características

- ✅ **Design Responsivo** com Bootstrap 5
- ✅ **Efeitos LED** e animações JavaScript
- ✅ **Sistema Multilíngue** (Português, Inglês, Espanhol)
- ✅ **Animações de Scroll** e hover effects
- ✅ **Sistema de Partículas** em background
- ✅ **Deploy Automático** para AWS S3 via GitHub Actions

## 🛠️ Tecnologias

- **Frontend**: HTML5, CSS3 (SCSS), JavaScript (ES6+)
- **Framework**: Bootstrap 5
- **Build Tools**: Webpack, Sass
- **Deploy**: GitHub Actions + AWS S3

## 📁 Estrutura do Projeto

```
├── src/
│   ├── scss/          # Estilos SCSS
│   ├── js/            # JavaScript
│   └── assets/        # Imagens e recursos
├── dist/              # Arquivos compilados
├── .github/           # GitHub Actions
└── Imagens/           # Imagens originais
```

## 🚀 Como Executar

### Desenvolvimento Local
```bash
# Instalar dependências
npm install

# Build do projeto
npm run build

# Servidor local
npm run dev
```

### Produção
```bash
# Build para produção
npm run build

# Deploy (requer configuração AWS)
npm run deploy
```

## 🌐 Deploy Automático

O projeto está configurado para deploy automático na AWS S3 via GitHub Actions.

### Configuração AWS (GitHub Secrets)
- `AWS_ACCESS_KEY_ID`
- `AWS_SECRET_ACCESS_KEY`
- `AWS_REGION`
- `S3_BUCKET`
- `CLOUDFRONT_DISTRIBUTION_ID` (opcional)

## 🎨 Paleta de Cores

- **Primária**: #8B4513 (Marrom vintage)
- **Secundária**: #F5F5DC (Beige)
- **Destaque**: #DAA520 (Dourado)
- **Texto**: #000000 (Preto)
- **Background**: #F8F8FF (Alice Blue)

## 📱 Responsividade

- ✅ Mobile First
- ✅ Tablet
- ✅ Desktop
- ✅ 4K

## 🔧 Personalização

### Cores
Edite as variáveis SCSS em `src/scss/main.scss`

### Idiomas
Adicione novos idiomas em `src/js/main.js`

### Animações
Modifique as classes CSS e JavaScript para efeitos personalizados

## 📄 Licença

MIT License - Gonçalves & Co.

## 👥 Equipe

Desenvolvido para Gonçalves & Co. - Comércio, Gestão e Logística

