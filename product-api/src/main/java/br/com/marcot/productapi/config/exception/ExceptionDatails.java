package br.com.marcot.productapi.config.exception;

import lombok.Data;

@Data
public class ExceptionDatails {

    private int status;
    private String message;
}
