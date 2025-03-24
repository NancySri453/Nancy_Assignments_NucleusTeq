package com.nucluesteq.hrportal.controller;

import com.nucluesteq.hrportal.model.HRUser;
import com.nucluesteq.hrportal.repository.HRUserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/hr")
public class HRUserController {

    @Autowired
    private HRUserRepository hrUserRepository;

    // Sign-up endpoint
    @PostMapping("/signup")
    public String signUp(@RequestBody HRUser hrUser) {
        // Check if username or email already exists
        if (hrUserRepository.findByUsername(hrUser.getUsername()) != null) {
            return "Username already exists!";
        }
        if (hrUserRepository.findByEmail(hrUser.getEmail()) != null) {
            return "Email already exists!";
        }

        // Save the HR user (password is stored in plain text)
        hrUserRepository.save(hrUser);
        return "HR user registered successfully!";
    }

    // Login endpoint
    @PostMapping("/login")
    public String login(@RequestParam String username, @RequestParam String password) {
        HRUser hrUser = hrUserRepository.findByUsername(username);
        if (hrUser == null) {
            return "Invalid username!";
        }

        // Check if the password matches (plain-text comparison)
        if (password.equals(hrUser.getPassword())) {
            return "Login successful! Redirecting to employee list...";
        } else {
            return "Invalid password!";
        }
    }
}