package com.dbuu.greenroots.service;

import com.dbuu.greenroots.entity.User;
import com.dbuu.greenroots.repository.UserRepository;
import io.jsonwebtoken.Claims;
import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.SignatureAlgorithm;
import io.jsonwebtoken.security.Keys;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.crypto.SecretKey;
import java.util.Date;
import java.util.HashMap;
import java.util.Map;

@Service
public class AuthService {

    @Autowired
    private UserRepository userRepository;

    // Generate a secure HS256 key
    private static final SecretKey SECRET_KEY = Keys.secretKeyFor(SignatureAlgorithm.HS256);

    /**
     * Authenticate the user by email and password and generate a JWT token.
     */
    public String authenticateUser(String email, String password) throws Exception {
        User user = userRepository.findByEmail(email);

        if (user == null || !user.getPassword().equals(password)) {
            throw new Exception("Invalid email or password");
        }

        // Generate JWT token
        Map<String, Object> claims = new HashMap<>();
        claims.put("userId", user.getId());
        claims.put("email", user.getEmail());
        claims.put("role", user.getRole());

        return generateToken(claims, email);
    }

    /**
     * Generate a JWT token with custom claims.
     */
    private String generateToken(Map<String, Object> claims, String subject) {
        return Jwts.builder()
                .setClaims(claims)
                .setSubject(subject)
                .setIssuedAt(new Date(System.currentTimeMillis()))
                .setExpiration(new Date(System.currentTimeMillis() + 1000 * 60 * 60 * 10)) // 10 hours
                .signWith(SECRET_KEY) // Use the secure key
                .compact();
    }

    /**
     * Validate a given JWT token.
     * @return true if the token is valid, otherwise false.
     */
    public boolean validateToken(String token) {
        try {
            Jwts.parserBuilder().setSigningKey(SECRET_KEY).build().parseClaimsJws(token); // Parse and validate
            return true;
        } catch (Exception e) {
            return false; // Any exception means the token is invalid
        }
    }

    /**
     * Extract claims from a token.
     * This is useful for retrieving user information from the token.
     */
    public Claims extractClaims(String token) {
        return Jwts.parserBuilder().setSigningKey(SECRET_KEY).build().parseClaimsJws(token).getBody();
    }

    /**
     * Extract a specific claim (like email, userId) from the token.
     */
    public <T> T extractClaim(String token, String claimKey, Class<T> clazz) {
        Claims claims = extractClaims(token);
        return claims.get(claimKey, clazz);
    }
}
