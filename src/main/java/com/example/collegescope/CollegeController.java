package com.example.collegescope;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;
import java.util.List;

@RestController
@RequestMapping("/api/colleges")
@CrossOrigin(origins = "http://localhost:5173")
public class CollegeController {

    private final CollegeRepository collegeRepository;

    public CollegeController(CollegeRepository collegeRepository) {
        this.collegeRepository = collegeRepository;
    }

    @GetMapping
    public List<College> getAllColleges() {
        return collegeRepository.findAll();
    }

    @GetMapping("/{id}")
    public College getCollegeById(@PathVariable long id) {
        return collegeRepository.findById(id)
                .orElseThrow(() -> new CollegeNotFoundException(id));
    }

    @PostMapping
    @ResponseStatus(HttpStatus.CREATED)
    public College addCollege(@RequestBody College college) {
        return collegeRepository.save(college);
    }

    @PutMapping("/{id}")
    public College updateCollege(@PathVariable long id, @RequestBody College college) {
        College existing = collegeRepository.findById(id)
                .orElseThrow(() -> new CollegeNotFoundException(id));
        existing.setName(college.getName());
        existing.setDescription(college.getDescription());
        existing.setLocation(college.getLocation());
        return collegeRepository.save(existing);
    }

    @DeleteMapping("/{id}")
    @ResponseStatus(HttpStatus.NO_CONTENT)
    public void deleteCollege(@PathVariable long id) {
        collegeRepository.deleteById(id);
    }
}

// Custom Exception
@ResponseStatus(HttpStatus.NOT_FOUND)
class CollegeNotFoundException extends RuntimeException {
    public CollegeNotFoundException(long id) {
        super("College not found with id " + id);
    }
}
