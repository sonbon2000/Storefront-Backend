CREATE TABLE  public."Order_Product"
(
    order_id integer NOT NULL,
    product_id integer NOT NULL,
    quantity integer,
    CONSTRAINT "Order_Product_pkey" PRIMARY KEY (order_id, product_id),
    CONSTRAINT fk_order_id FOREIGN KEY (order_id)
        REFERENCES public."Orders" (id) MATCH SIMPLE
        ON UPDATE NO ACTION
        ON DELETE NO ACTION,
    CONSTRAINT fk_product_id FOREIGN KEY (product_id)
        REFERENCES public."Product" (id) MATCH SIMPLE
        ON UPDATE NO ACTION
        ON DELETE NO ACTION
);