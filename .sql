Tabela Pet
CREATE TABLE Pet (
ID_Pet INT PRIMARY KEY AUTO_INCREMENT,
Nome VARCHAR(50) NOT NULL,
Raca VARCHAR(50),
Idade INT,
Peso DECIMAL(5,2) );

Tabela Alimentacao
CREATE TABLE Alimentacao (
ID_Alimentacao INT PRIMARY KEY AUTO_INCREMENT,
ID_Pet INT,
Data DATETIME NOT NULL,
Status_Alimentacao VARCHAR(20), --Por exemplo, 'Comido' ou 'Não comido'
Tempo_Tampa_Abriu DECIMAL(5,2), -- Tempo que a tampa ficou aberta em segundos
FOREIGN KEY (ID_Pet) REFERENCES Pet(ID_Pet));

Tabela Pedido
CREATE TABLE Pedido (
ID_Pedido INT PRIMARY KEY AUTO_INCREMENT, Data_Pedido DATETIME NOT NULL,
Status_Pedido VARCHAR(20),
Nivel_Estoque DECIMAL(5,2),
Preco_Selecionado DECIMAL(8,2),
Horario_Entrega DATETIME,
Fornecedor VARCHAR(50));

Tabela Comedouro
CREATE TABLE Comedouro (
 ID_Comedouro INT PRIMARY KEY AUTO_INCREMENT,
 ID_Pet INT,
 Data DATETIME NOT NULL,
 Status_Tampa VARCHAR(20),  -- Ex.: 'Aberta' ou 'Fechada'
 FOREIGN KEY (ID_Pet) REFERENCES Pet(ID_Pet));

Tabela Dashboard
CREATE TABLE Dashboard (
    ID_Dashboard INT PRIMARY KEY AUTO_INCREMENT,
    ID_Pet INT,
    Racao_Restante DECIMAL(5,2),
    Alertas TEXT,
    Status_Comedouro VARCHAR(20),
    FOREIGN KEY (ID_Pet) REFERENCES Pet(ID_Pet)
);


Tabela Alarme
CREATE TABLE Alarme (
    ID_Alarme INT PRIMARY KEY AUTO_INCREMENT,
    ID_Pet INT,
    Tipo_Alarme VARCHAR(50),  -- Por exemplo, 'Refeição', 'Erro'
    Horario DATETIME NOT NULL,
    Estado VARCHAR(20),  -- Ex.: 'Ativo' ou 'Inativo'
    FOREIGN KEY (ID_Pet) REFERENCES Pet(ID_Pet)
);
