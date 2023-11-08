CREATE TABLE  public."Product"
(
    id SERIAL,
    name character varying(256) COLLATE pg_catalog."default" NOT NULL,
    price numeric(10,2) NOT NULL,
    category character varying(256) COLLATE pg_catalog."default",
    CONSTRAINT product_pkey PRIMARY KEY (id)
);