CREATE TABLE "usuarios" (
	"nome"	TEXT,
	"email"	TEXT,
	"senha"	TEXT,
	"administrador"	BOOLEAN,
	"created_at"	TEXT,
	"updated_at"	TEXT,
	"id"	TEXT,
	PRIMARY KEY("id")
);
CREATE TABLE "reservas" (
	"id"	TEXT,
	"mesa"	TEXT,
	"cleinte_name"	TEXT,
	"horario_entrada"	TEXT,
	"tempo"	TEXT,
	"created_at"	TEXT,
	"updated_at"	TEXT,
	PRIMARY KEY("id")
);
CREATE TABLE "produtos" (
	"nome"	TEXT,
	"descricao"	TEXT,
	"preco"	NUMERIC,
	"id"	INTEGER,
	"categoria"	TEXT,
	"status"	BOOLEAN,
	PRIMARY KEY("id")
);
CREATE TABLE "pedidos" (
	"id"	TEXT,
	"numero_pedido"	INTEGER,
	"fk_produto"	TEXT,
	"fk_usuario"	TEXT,
	"nome_produto"	TEXT,
	"descricao_produto"	TEXT,
	"preco_produto"	NUMERIC,
	"obs"	TEXT,
	PRIMARY KEY("id"),
	FOREIGN KEY("descricao_produto") REFERENCES "produtos"("preco"),
	FOREIGN KEY("nome_produto") REFERENCES "produtos"("nome"),
	FOREIGN KEY("fk_produto") REFERENCES "produtos"("id"),
	FOREIGN KEY("fk_usuario") REFERENCES "usuarios"("id"),
	FOREIGN KEY("preco_produto") REFERENCES "produtos"("preco")
);