package com.dbuu.greenroots.controller;

import java.util.Map;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import com.dbuu.greenroots.service.AuthService;
import io.jsonwebtoken.Claims;
import org.springframework.beans.factory.annotation.Autowired;

@RestController
@RequestMapping("/Home/users")
public class AuthController {

    @Autowired
    private AuthService authService;

    /**
     * Endpoint to authenticate the user and return a token if login is successful.
     */
    @PostMapping("/login")
    public ResponseEntity<?> loginUser(@RequestBody Map<String, String> loginDetails) {
        try {
            String email = loginDetails.get("email");
            String password = loginDetails.get("password");

            // Authenticate user and generate token
            String token = authService.authenticateUser(email, password);

            // Respond with user details and token
            return ResponseEntity.ok(Map.of(
                    "message", "Login successful!",
                    "token", token,
                    "email", email
            ));
        } catch (Exception e) {
            return ResponseEntity.status(401).body(Map.of(
                    "error", e.getMessage()
            ));
        }
    }

    /**
     * Endpoint to check login status based on the provided token.
     */
    @PostMapping("/auth/status")
    public ResponseEntity<?> checkLoginStatus(@RequestHeader("Authorization") String token) {
        try {
            // Validate token
            boolean isValid = authService.validateToken(token);
            if (isValid) {
                // Extract claims if needed (e.g., user details)
                Claims claims = authService.extractClaims(token);
                return ResponseEntity.ok(Map.of(
                        "isLoggedIn", true,
                        "email", claims.get("email"),
                        "userId", claims.get("userId"),
                        "role", claims.get("role")
                ));
            } else {
                return ResponseEntity.status(401).body(Map.of(
                        "isLoggedIn", false,
                        "error", "Invalid or expired token"
                ));
            }
        } catch (Exception e) {
            return ResponseEntity.status(401).body(Map.of(
                    "isLoggedIn", false,
                    "error", e.getMessage()
            ));
        }
    }
}
