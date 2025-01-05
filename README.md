# Comedouro Inteligente 🐾

O **Comedouro Inteligente** é um projeto desenvolvido para facilitar e automatizar a alimentação de animais de estimação, integrando hardware com Arduino e software com um cliente web e uma API. Este sistema monitora e gerencia a alimentação, envia notificações de saúde e permite automação, como o pedido automático de ração.

## Estrutura do Projeto

O projeto está dividido em duas partes principais:

### 1. **Client** (Frontend)

- Desenvolvido com **HTML**, **CSS** e **JavaScript**.
- Responsável por oferecer uma interface amigável para interação do usuário.
- Funcionalidades:
  - Visualização dos dados do pet (alimentação, notificações).
  - Configuração da programação do comedouro.
  - Histórico e relatórios.
  - Gerenciamento de fornecedores e pedidos de ração.

### 2. **Server** (Backend)

- Construído com **NestJS**.
- Gerencia a lógica do sistema, processa os dados do comedouro e integra-se ao banco de dados.
- Banco de dados hospedado no **Supabase**.
- Funcionalidades:
  - CRUD de pets.
  - Controle de alimentação e notificações.
  - API para sincronização com o cliente web e o hardware.

---

## Tecnologias Utilizadas

### Client:

- **HTML5**: Estrutura da aplicação.
- **CSS3**: Estilização da interface.
- **JavaScript**: Dinamismo e manipulação da interface.

### Server:

- **NestJS**: Framework backend para criação da API.
- **TypeORM**: Integração e manipulação do banco de dados.
- **Supabase**: Banco de dados em nuvem para armazenar informações do sistema.

### Hardware:

- **Arduino**: Controle do comedouro automatizado, utilizando sensores para monitorar abertura de tampa e tempo de alimentação.

---

## Instalação e Execução

### Requisitos:

- **Node.js** (v16 ou superior)
- **NPM** ou **Yarn**
- **Arduino IDE** (para programar o hardware)
- Conta no **Supabase** (para configuração do banco de dados)

### Passo a Passo:

#### 1. Clone o repositório:

```bash
git clone https://github.com/seu-usuario/comedouro-inteligente.git
cd comedouro-inteligente-api
```

#### 2. Configuração do Server:

```bash
npm install
```

- Configure as variáveis de ambiente no arquivo .env:

```bash
SUPABASE_URL=
SUPABASE_KEY=
```

- Execute o servidor:

```bash
npm run start:dev
```

## Funcionalidades

### 💻 Interface Web (Client):

- Gerenciamento de pets: nome, raça, peso e idade.
- Histórico de alimentação e notificações de saúde.
- Configuração do comedouro inteligente: horários, porções.
- Relatórios e acompanhamento de saúde do pet.

### 🌐 API (Server):

- Endpoints REST para CRUD de pets e controle de alimentação.
- Integração com o Arduino para sincronizar dados em tempo real.
- Gerenciamento de notificações e pedidos de ração.

### 🛠️ Hardware (Arduino):

- Controle da tampa do comedouro baseado em sensores.
- Monitoramento de tempo de alimentação.
- Notificações automáticas via API.

### Licença

Este projeto está licenciado sob a **MIT License**. Consulte o arquivo [LICENSE](./LICENSE) para mais detalhes.

Desenvolvido por ...
