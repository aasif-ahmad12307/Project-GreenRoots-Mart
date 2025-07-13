package com.dbuu.greenroots.controller;

import com.dbuu.greenroots.entity.Product;
import com.dbuu.greenroots.service.ProductService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import java.util.List;


@RestController
@RequestMapping("/Home")
public class ProductController {
    //private ProductService productService;

   @GetMapping("/search")
    public ResponseEntity<List<Product>> searchProducts(@RequestParam String keyword) {
        List<Product> products = productService.searchProducts(keyword);
        return ResponseEntity.ok(products);
    }
    @GetMapping("/start")
    public String welcome(){
        return "Hello, Welcome to our app GreenRoots Mart";
    }

    @Autowired
    private  ProductService productService;

    //get all products
    @GetMapping("show-all")
    public List<Product> getAllProducts() {
        return productService.getAllProducts();
    }
    //create a product
    @PostMapping("/create")
    public Product createProduct(@RequestBody Product product) {
        return productService.saveProduct(product);
    }

    // Update a product
    @PutMapping("/{id}")
    public ResponseEntity<Product> updateProduct(@PathVariable Long id, @RequestBody Product product) {
        return ResponseEntity.ok(productService.updateProduct(id, product));
    }

    // Delete a product
    @DeleteMapping("/{id}")
    public ResponseEntity<String> deleteProduct(@PathVariable Long id) {
        productService.deleteProduct(id);
        return ResponseEntity.ok("Product deleted successfully!");
    }

}
