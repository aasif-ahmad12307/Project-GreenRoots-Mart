package com.dbuu.greenroots.repository;


import com.dbuu.greenroots.entity.User;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UserRepository extends JpaRepository<User, Long> {
     User findByEmail(String email);
}

