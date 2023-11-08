CREATE TABLE  public."User"
(
    id SERIAL,
    firstname character varying(256) COLLATE pg_catalog."default" NOT NULL,
    lastname character varying(256) COLLATE pg_catalog."default" NOT NULL,
    password text COLLATE pg_catalog."default" NOT NULL,
    account character varying(256) COLLATE pg_catalog."default",
    CONSTRAINT "User_pkey" PRIMARY KEY (id),
    CONSTRAINT account_unique UNIQUE (account)
);

CREATE TABLE  public."Product"
(
    id SERIAL,
    name character varying(256) COLLATE pg_catalog."default" NOT NULL,
    price numeric(10,2) NOT NULL,
    category character varying(256) COLLATE pg_catalog."default",
    CONSTRAINT product_pkey PRIMARY KEY (id)
);
