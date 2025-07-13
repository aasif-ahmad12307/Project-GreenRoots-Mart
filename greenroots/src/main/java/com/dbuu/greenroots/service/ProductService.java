package com.dbuu.greenroots.service;

import com.dbuu.greenroots.entity.Product;
import com.dbuu.greenroots.repository.ProductRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ProductService {
    @Autowired
    private ProductRepository productRepository;
    //read all products
    public List<Product> getAllProducts() {
        return productRepository.findAll();
    }
    //create a product
    public Product saveProduct(Product product) {
        return productRepository.save(product);
    }

    //search a product
    public List<Product> searchProducts(String keyword) {
        return productRepository.searchProducts(keyword);
    }

    // Update a product
    public Product updateProduct(Long id, Product updatedProduct) {
        return productRepository.findById(id).map(product -> {
            product.setName(updatedProduct.getName());
            product.setPrice(updatedProduct.getPrice());
            product.setQuantity(updatedProduct.getQuantity());
            product.setDescription(updatedProduct.getDescription());
            return productRepository.save(product);
        }).orElseThrow(() -> new RuntimeException("Product not found with id " + id));
    }

    // Delete a product
    public void deleteProduct(Long id) {
        productRepository.deleteById(id);
    }


}

