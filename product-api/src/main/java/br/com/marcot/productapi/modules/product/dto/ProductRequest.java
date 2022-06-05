package br.com.marcot.productapi.modules.product.dto;

import lombok.Data;

@Data
public class ProductRequest {

    private Integer id;
    private String name;
    private Integer quantityAvailable;
    private Integer supplierId;
    private Integer categoryId;
}
