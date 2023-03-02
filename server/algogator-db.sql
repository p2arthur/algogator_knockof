CREATE TABLE assets(
	id SERIAL PRIMARY KEY,
	asset_id INT,
	deleted BOOLEAN,
	is_frozen BOOLEAN,
	decimals INTEGER,
	unit_name VARCHAR(6),
	name VARCHAR(255),
	price FLOAT,
	tvl_change_24h FLOAT,
	price_change_24h FLOAT
);


CREATE TABLE app_user(
	id SERIAL PRIMARY KEY,
	wallet_address VARCHAR(58),
	nfd_address VARCHAR(58),
	email_address VARCHAR(255),
	is_member BOOLEAN
);


CREATE TABLE app_user_assets(
	id SERIAL PRIMARY KEY,
	asset_id INTEGER REFERENCES assets(id),
	user_id INTEGER REFERENCES users(id) ON DELETE CASCADE,
	balance INTEGER,
	value FLOAT
);


SELECT * FROM assets

INSERT INTO assets (
	asset_id, deleted, is_frozen, decimals, unit_name, name, price, tvl_change_24h, price_change_24h
)
VALUES (12378, false, false, 6, 'OPUL', 'Opulous', 0.22, -0.1, -0.12);

SELECT * FROM assets