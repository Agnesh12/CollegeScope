package com.example.collegescope;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/contact")
@CrossOrigin(origins = "http://localhost:5173")  // your React app URL
public class ContactController {

    private final ContactMessageRepository repository;

    public ContactController(ContactMessageRepository repository) {
        this.repository = repository;
    }

    @PostMapping
    public ResponseEntity<?> submitMessage(@RequestBody ContactMessage message) {
        repository.save(message);
        return ResponseEntity.ok("Message received");
    }
}

