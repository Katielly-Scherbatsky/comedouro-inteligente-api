Tabela Usuario
CREATE TABLE usuario (
    id INT PRIMARY KEY AUTO_INCREMENT,
    nome VARCHAR(50) NOT NULL,
    email VARCHAR(50) NOT NULL,
    senha VARCHAR(50) NOT NULL
);

Tabela Pet
CREATE TABLE pet (
    id INT PRIMARY KEY AUTO_INCREMENT,
    usuario_id VARCHAR(50) NOT NULL,
    nome VARCHAR(50) NOT NULL,
    raca VARCHAR(50),
    idade INT,
    tipo INT,
    peso DECIMAL(5,2))
    FOREIGN KEY (usuario_id) REFERENCES usuario(id)
);

Tabela Comedouro
CREATE TABLE comedouro (
    id INT PRIMARY KEY AUTO_INCREMENT,
    nome VARCHAR(50) NOT NULL,
    pet_id INT NOT NULL,
    produto_id INT NOT NULL,
    data DATETIME NOT NULL,
    status INT NOT NULL,  -- Ex.: 'Cheio' ou 'Vazio'
    situacao_tampa INT NOT NULL,  -- Ex.: 'Aberta' ou 'Fechada'
    FOREIGN KEY (pet_id) REFERENCES pet(id),
    FOREIGN KEY (produto_id) REFERENCES produto(id)
);

Tabela Alimentacao
    CREATE TABLE alimentacao (
    id INT PRIMARY KEY AUTO_INCREMENT,
    comedouro_id INT NOT NULL,
    produto_id INT NOT NULL,
    data DATETIME NOT NULL,
    status INT NOT NULL, --Por exemplo, 'Comido' ou 'Não comido'
    tempo_tampa_aberta DECIMAL(5,2),
    FOREIGN KEY (comedouro_id) REFERENCES comedouro(id),
    FOREIGN KEY (produto_id) REFERENCES produto(id)
);

Tabela Pedido
CREATE TABLE pedido (
    id INT PRIMARY KEY AUTO_INCREMENT,
    data DATETIME NOT NULL,
    status INT,
    produto_id INT NOT NULL,
    preco DECIMAL(8,2),
    fornecedor_id INT NOT NULL,
    FOREIGN KEY (produto_id) REFERENCES produto(id),
    FOREIGN KEY (fornecedor_id) REFERENCES fornecedor(id)
);

Tabela Alarme
CREATE TABLE alarme (
    id INT PRIMARY KEY AUTO_INCREMENT,
    nome VARCHAR(50) NOT NULL,
    comedouro_id INT NOT NULL,
    tipo_alarme VARCHAR(50) NOT NULL,  -- Por exemplo, 'Refeição', 'Erro'
    data DATETIME NOT NULL,
    status INT NOT NULL,  -- Ex.: 'Ativo' ou 'Inativo'
    FOREIGN KEY (comedouro_id) REFERENCES comedouro(id)
);

Tabela Produto
CREATE TABLE produto (
    id INT PRIMARY KEY AUTO_INCREMENT,
    nome VARCHAR(50) NOT NULL,
    estoque INT NOT NULL,
    preco DECIMAL(8,2),
);

Tabela Produto Fornecedor
CREATE TABLE produto_fornecedor (
    id INT PRIMARY KEY AUTO_INCREMENT,
    fornecedor_id INT NOT NULL,
    produto_id INT NOT NULL,
    FOREIGN KEY (produto_id) REFERENCES produto(id)
);

Tabela Fornecedor
CREATE TABLE fornecedor (
    id INT PRIMARY KEY AUTO_INCREMENT,
    nome VARCHAR(50) NOT NULL,
    endereco VARCHAR(50) NOT NULL,
    tempo_entrega VARCHAR(50),
);

Tabela Opções
CREATE TABLE opcoes (
    id INT PRIMARY KEY AUTO_INCREMENT,
    descricao VARCHAR(50) NOT NULL,
    tipo INT NOT NULL,
);

Tabela Opção Item
CREATE TABLE opcaco_item (
    id INT PRIMARY KEY AUTO_INCREMENT,
    descricao VARCHAR(50) NOT NULL,
    opcoes_id INT NOT NULL,
    FOREIGN KEY (opcoes_id) REFERENCES opcoes(id)
);
