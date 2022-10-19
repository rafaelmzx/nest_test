CREATE TABLE IF NOT EXISTS usuarios
(
  id INT NOT NULL PRIMARY KEY SERIAL,
  nome varchar(255) NOT NULL,
  ativo BOOLEAN NOT NULL,
  criado_em TIMESTAMP,
  atualizado_em TIMESTAMP
);

INSERT INTO usuarios  
(
	id, nome, ativo, criado_em, atualizado_em
)
VALUES
(
	1, 'Rafael', true, NOW()::timestamp, NOW()::timestamp
);