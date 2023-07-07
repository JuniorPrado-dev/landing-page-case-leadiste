# Nome do Projeto
- Landing Page Leadster  
## Descrição
- O projeto foi desenvolvido em React utilizando o framework NextJS 13. O projeto resume-se em uma Landing Page com algumas informações sobre a empresa Leadster. Até o presente commite cosnta o desenvolvimento de uma galeria de vídeos a partir de URLs armazenada em um arquivo.json, e o layout geral da página. Por tanto, algumas seções e links não estarão disponíveis. 
## Recursos
- Componenntização: Componetização de elementos da tela utilizandom React (JSX).
- Styled-Components: Estilização de componentes através de CSS mesclado com JS para a criação de elementos personalizados.
- Typescript: Uso de Typesript (V5) para a escrit.
- Eslint: Uso de Padronização de escrita e espaçamento do projeto.
- Renderização condicinal: Renderização condicinal de componentes baseando-se em estados dinamicos de variáveis.
- Responsividade: O projeto oferece dois layouts que se ajustam conforme o viewort(tamanho da tela) dos dispositivos(mobile/Desktop) que irão acessar a aplicação.
- Deploy: Deploy da aplicaçãso Next.js na plataforma Vercel.

## Requisitos de Instalação

Certifique-se de ter as seguintes ferramentas instaladas:
- Node.js - [Download Node.js](https://nodejs.org)
- npm - Gerenciador de pacotes do Node.js (normalmente vem com o Node.js)
## Como Iniciar o Projeto

1. Clone este repositório: `https://github.com/JuniorPrado-dev/landing-page-case-leadste.git`
2. Acesse o diretório do projeto: `cd landing-page-case-leadste`
3. Instale as dependências: `npm install`
4. Inicie o servidor de desenvolvimento: `npm run dev`
5. Abra o navegador e acesse: `http://localhost:3000`

## Estrutura
- O Projeto foi escrito seguindo a estrutua de componetização, tendo como principal driretório '**src**'. Os arquivo de imagens e outros arquivos estáticos estão localizados no dirwtório '**Public**'. Segue a estrurua de diretórios apartir de src.
```shell
  $ tree
├── src
    └──
    │ ├── components # Componentes que seram usados no layout
    |     ├── bannner
    |     |     ├── index.tsx
    |     |     ├── style.ts
    |     ├── busines
    |     |     ├── index.tsx
    |     |     ├── style.ts
    |     ├── footer
    |     |     ├── index.tsx
    |     |     ├── style.ts
    |     ├── header
    |     |     ├── index.tsx
    |     |     ├── style.ts
    |     ├── main-content
    |     |     ├── index.tsx
    |     |     ├── style.ts
    |     |     ├── main-content
    |     |     |   ├── sections
    |     |     |   |   ├── agencia
    |     |     |   |   |  ├── index.tsx
    |     |     |   |   |  ├── style.ts
    |     |     |   |   ├── chatbot
    |     |     |   |   |  ├── index.tsx
    |     |     |   |   |  ├── style.ts
    |     |     |   |   ├── geracao-leads
    |     |     |   |   |  ├── card-video
    |     |     |   |   |  |  ├── index.tsx
    |     |     |   |   |  |  ├── style.ts
    |     |     |   |   |  ├── menu-pages
    |     |     |   |   |  |  ├── index.tsx
    |     |     |   |   |  |  ├── style.ts
    |     |     |   |   |  ├── modal
    |     |     |   |   |  |  ├── index.tsx
    |     |     |   |   |  |  ├── style.ts
    |     |     |   |   |  ├── index.tsx
    |     |     |   |   |  ├── style.ts
    |     |     |   |   ├── marketing-digital
    |     |     |   |   |  ├── index.tsx
    |     |     |   |   |  ├── style.ts
    |     |     |   |   ├── midia-page
    |     |     |   |   |  ├── index.tsx
    |     |     |   |   |  ├── style.ts
    |     ├── menu
    |     |     ├── index.tsx
    |     |     ├── style.ts
    |     ├── sorting
    |     |     ├── index.tsx
    |     |     ├── style.ts
    │ ├── data # Arquivo json com URLs e infos dos videos
    |     ├── data.json 
    │ ├── fonts # Fontes externas
    |     ├── index.ts 
    │ ├── pages # diretório das párinas (rotas) da aplicação
    |     ├── _app.tsx
    |     ├── _document.tsx
    |     ├── index.tsx
    │ ├── styles # diretório dos arquivos CSS 
    │ ├── types # diretório dos arquivos com as tipagens utilizadas no projeto. 
```
## Deployer
- O projeto esta disponíve para visulização no seguinte link: `https://landing-page-case-leadste.vercel.app`
## Contato
Se você tiver alguma dúvida ou sugestão, entre em contato:

- Nome: Junior Prado 
- E-mail: juniorcvnnn@gmail.com
- linkedin: `www.linkedin.com/in/junior-prado-dev`
