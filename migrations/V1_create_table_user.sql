CREATE TABLE IF NOT EXISTS usuarios
(
  id INT NOT NULL PRIMARY KEY,
  nome varchar(255) NOT NULL,
  ativo BOOLEAN NOT NULL,
  criado_em TIMESTAMP,
  atuailizado_em TIMESTAMP
);