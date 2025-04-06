# 📸 Photo Gallery App - Ionic + Angular + Capacitor

Este projeto é uma galeria de fotos construída com **Ionic Framework**, utilizando **Angular** como framework base e **Capacitor** para acesso a funcionalidades nativas do dispositivo, como a câmera e o sistema de arquivos.

---

## 🚀 Funcionalidades

- Captura de fotos usando a câmera do dispositivo
- Salvamento das imagens localmente no dispositivo
- Exibição das fotos em uma grade
- Persistência das imagens entre sessões (armazenamento local)

---

## 🛠️ Tecnologias Utilizadas

- [Ionic Framework](https://ionicframework.com/)
- [Angular](https://angular.io/)
- [Capacitor](https://capacitorjs.com/)
  - @capacitor/camera
  - @capacitor/filesystem
  - @capacitor/preferences

---

## ▶️ Como rodar o projeto

### Pré-requisitos

- Node.js (recomendado via [nvm](https://github.com/nvm-sh/nvm))
- npm ou yarn
- Ionic CLI (`npm install -g @ionic/cli`)

### Passos para rodar:

```bash
# Clonar o repositório
git clone https://github.com/seu-usuario/photo-gallery-ionic.git
cd photo-gallery-ionic

# Instalar as dependências
npm install

# Rodar o app em ambiente web
ionic serve
```

---

## 📱 Executar em dispositivos

### Android/iOS:

```bash
# Build do projeto
npm run build

# Sincronizar com Capacitor
npx cap sync

# Abrir no Android Studio ou Xcode
npx cap open android
npx cap open ios
```

---

## 📂 Estrutura de Diretórios

```
src/
├── app/
│   ├── services/photo.service.ts   # Serviço de captura, salvamento e leitura de fotos
│   └── tab2/tab2.page.*            # Página que exibe e gerencia a galeria
├── assets/
├── theme/
└── index.html
```

---

## ✨ Telas

- Botão flutuante para tirar fotos
- Galeria de imagens exibidas em grid
- Salvamento persistente entre sessões

---

## 📚 Baseado em:

Tutorial oficial do Ionic Framework:  
[https://ionicframework.com/docs/angular/your-first-app](https://ionicframework.com/docs/angular/your-first-app)

---

## 🧑‍💻 Autor

Projeto desenvolvido por Jesse B. como parte dos estudos em Desenvolvimento de Sistemas Mobile com Ionic.

---

## 📄 Licença

Este projeto está licenciado sob a [MIT License](LICENSE).