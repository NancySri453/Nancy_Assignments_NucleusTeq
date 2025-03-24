package com.nucluesteq.hrportal.repository;

import com.nucluesteq.hrportal.model.HRUser;
import org.springframework.data.jpa.repository.JpaRepository;

public interface HRUserRepository extends JpaRepository<HRUser, Long> {
    HRUser findByUsername(String username); // Find HR user by username
    HRUser findByEmail(String email); // Find HR user by email
}