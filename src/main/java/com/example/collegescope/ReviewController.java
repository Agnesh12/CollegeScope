package com.example.collegescope;

import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/reviews")
@CrossOrigin(origins = "http://localhost:5173")
public class ReviewController {
    private final ReviewRepository reviewRepository;
    private final CollegeRepository collegeRepository;

    public ReviewController(ReviewRepository reviewRepository, CollegeRepository collegeRepository) {
        this.reviewRepository = reviewRepository;
        this.collegeRepository = collegeRepository;
    }

    @GetMapping
    public List<Review> getReviews() {
        return reviewRepository.findAll();
    }

    @GetMapping("{id}")
    public Review getReview(@PathVariable long id) {
        return reviewRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Review not Found"));
    }

    @PostMapping("/college/{collegeId}")
    public Review addReview(@PathVariable long collegeId, @RequestBody Review review) {
        College college = collegeRepository.findById(collegeId)
                .orElseThrow(() -> new RuntimeException("College Not Found"));

        review.setCollege(college);
        return reviewRepository.save(review);
    }

    @PutMapping("{id}")
    public Review updateReview(@PathVariable long id, @RequestBody Review review) {
        Review existingReview = reviewRepository.findById(id)
                .orElseThrow(() -> new RuntimeException(id + " Review not found"));

        existingReview.setReviewerName(review.getReviewerName());
        existingReview.setComment(review.getComment());
        existingReview.setFacultyRating(review.getFacultyRating());
        existingReview.setInfraRating(review.getInfraRating());
        existingReview.setPlacementRating(review.getPlacementRating());

        return reviewRepository.save(existingReview);
    }

    @DeleteMapping("{id}")
    public String deleteReview(@PathVariable long id) {
        Review existingReview = reviewRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Review not found"));

        reviewRepository.delete(existingReview);
        return "Review deleted successfully";
    }
}
