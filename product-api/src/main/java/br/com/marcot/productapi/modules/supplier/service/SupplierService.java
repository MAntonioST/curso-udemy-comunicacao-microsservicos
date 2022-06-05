package br.com.marcot.productapi.modules.supplier.service;

import br.com.marcot.productapi.config.exception.ValidationException;
import br.com.marcot.productapi.modules.supplier.dto.SupplierRequest;
import br.com.marcot.productapi.modules.supplier.dto.SupplierResponse;
import br.com.marcot.productapi.modules.supplier.model.Supplier;
import br.com.marcot.productapi.modules.supplier.repository.SupplierRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import static org.springframework.util.ObjectUtils.isEmpty;


@Service
public class SupplierService {

    @Autowired
    private SupplierRepository supplierRepository;

    public Supplier findById(Integer id){
        return supplierRepository
                .findById(id)
                .orElseThrow(() -> new ValidationException("There's no supplier for the given ID!" + id));
    }

    public SupplierResponse save(SupplierRequest request){
        validationSupplierNameInformed(request);
        var supplier = supplierRepository.save(Supplier.of(request));
        return SupplierResponse.of(supplier);
    }

    private void validationSupplierNameInformed(SupplierRequest request){
        if(isEmpty(request.getName())){
            throw  new ValidationException("The supplier's name was not informed!");
        }
    }
}
