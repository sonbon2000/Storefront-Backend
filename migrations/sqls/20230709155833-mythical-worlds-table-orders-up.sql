CREATE TABLE  public."Orders"
(
    id SERIAL,
    user_id integer NOT NULL,
    status_of_order character varying(1) COLLATE pg_catalog."default",
    CONSTRAINT "Orders_pkey" PRIMARY KEY (id)
);
