package com.dbuu.greenroots.entity;

//import com.fasterxml.jackson.annotation.JsonSubTypes;
//import com.fasterxml.jackson.annotation.JsonTypeInfo;
import jakarta.persistence.*;

@Entity
/*@Inheritance(strategy = InheritanceType.JOINED) // Separate tables for subclasses
@JsonTypeInfo(
        use = JsonTypeInfo.Id.NAME, // Use a property to determine type
        include = JsonTypeInfo.As.PROPERTY,
        property = "role" // The property in the JSON (e.g., "BUYER" or "SELLER")
)
@JsonSubTypes({
        @JsonSubTypes.Type(value = Buyer.class, name = "BUYER"),
        @JsonSubTypes.Type(value = Seller.class, name = "SELLER")
})*/

public class User {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(nullable = false, unique = true)
    private String email;

    @Column(nullable = false)
    private String password;

    @Column(nullable = false)
    private String name;

    @Column(nullable = false)
    private String role; // "BUYER" or "SELLER"

    @Column(nullable= false)
    private String address;



    // Getters and Setters
    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getRole() {
        return role;
    }

    protected void setRole(String role) { // Protected access for subclasses
        this.role = role;
    }

    // Getters and Setters
    public String getaddress() {
        return address;
    }

    public void setaddress(String address) {
        this.address = address;
    }
}



