BEGIN TRANSACTION;
CREATE TABLE IF NOT EXISTS "reservas" (
	"id"	TEXT,
	"mesa"	TEXT,
	"cleinte_name"	TEXT,
	"horario_entrada"	TEXT,
	"tempo"	TEXT,
	"created_at"	TEXT,
	"updated_at"	TEXT,
	PRIMARY KEY("id")
);
CREATE TABLE IF NOT EXISTS "pedidos" (
	"id"	TEXT,
	"numero_pedido"	INTEGER,
	"fk_produto"	TEXT,
	"fk_usuario"	TEXT,
	"nome_produto"	TEXT,
	"descricao_produto"	TEXT,
	"preco_produto"	NUMERIC,
	"obs"	TEXT,
	FOREIGN KEY("descricao_produto") REFERENCES "produtos"("preco"),
	FOREIGN KEY("fk_produto") REFERENCES "produtos"("id"),
	FOREIGN KEY("nome_produto") REFERENCES "produtos"("nome"),
	FOREIGN KEY("fk_usuario") REFERENCES "usuarios"("id"),
	FOREIGN KEY("preco_produto") REFERENCES "produtos"("preco"),
	PRIMARY KEY("id")
);
CREATE TABLE IF NOT EXISTS "produtos" (
	"nome"	TEXT,
	"descricao"	TEXT,
	"preco"	NUMERIC,
	"id"	INTEGER,
	"categoria"	TEXT,
	"status"	INTEGER,
	PRIMARY KEY("id")
);
CREATE TABLE IF NOT EXISTS "usuarios" (
	"nome"	TEXT,
	"email"	TEXT,
	"senha"	TEXT,
	"administrador"	TEXT,
	"created_at"	TEXT,
	"updated_at"	TEXT,
	"id"	TEXT,
	PRIMARY KEY("id")
);
COMMIT;
