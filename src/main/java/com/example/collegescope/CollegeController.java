package com.example.collegescope;


import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/college")
public class CollegeController {

    private CollegeRepository collegeRepository;

    public CollegeController(CollegeRepository collegeRepository) {this.collegeRepository = collegeRepository;}

    @GetMapping
    public List<College> getAllColleges() {
        return collegeRepository.findAll();
    }

    @GetMapping("/{id}")
    public College getCollegeById(@PathVariable long id) {
        return collegeRepository.findById(id).orElseThrow(() -> (new RuntimeException(("College with id" + id + "not found"))));
    }
    @PostMapping
    public College addCollege(@RequestBody College college) {
        return collegeRepository.save(college);
    }
    @PutMapping("/{id}")
    public College updateCollege(@PathVariable long id, @RequestBody College college) {
        College existing = collegeRepository.findById(id).orElseThrow(() -> new RuntimeException("College not Found by" + id));
        existing.setName(college.getName());
        existing.setDescription(college.getDescription());
        existing.setLocation(college.getLocation());
        return collegeRepository.save(existing);
    }
    @DeleteMapping("/{id}")
    public void deleteCollege(@PathVariable long id) {
        collegeRepository.deleteById(id);
    }

}
