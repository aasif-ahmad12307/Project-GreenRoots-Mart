package com.dbuu.greenroots.service;

import com.dbuu.greenroots.entity.User;
import com.dbuu.greenroots.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class UserService {

    @Autowired
    private UserRepository userRepository;

    public User registerUser(User user) {
        // Check if the email is already in use
        if (userRepository.findByEmail(user.getEmail()) != null) {
            throw new RuntimeException("Email is already registered.");
        }

        // Save the user in the repository
        return userRepository.save(user);
    }
}
