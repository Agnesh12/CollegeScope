package com.example.collegescope;

import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/review")
public class ReviewController {
    private final ReviewRepository reviewRepository;
    public ReviewController(ReviewRepository reviewRepository) {
        this.reviewRepository = reviewRepository;
    }
    @GetMapping
    public List<Review> getReviews() {
        return reviewRepository.findAll();
    }
    @GetMapping("{id}")
    public Review getReview(@PathVariable long id) {
        return reviewRepository.findById(id).orElseThrow(() -> new RuntimeException("Review not Found"));
    }

    @PostMapping
    public Review addReview(@RequestBody Review review) {
        return reviewRepository.save(review);
    }
    @PutMapping("{id}")
    public Review updateReview(@PathVariable long id, @RequestBody Review review) {
        Review existingreview = reviewRepository.findById(id).orElseThrow(() -> new RuntimeException((id + "Review not found")));
        existingreview.setReviewerName(review.getReviewerName());
        existingreview.setComment(review.getComment());
        existingreview.setFacultyRating(review.getFacultyRating());
        existingreview.setInfraRating(review.getInfraRating());
        existingreview.setPlacementRating(review.getPlacementRating());
        return reviewRepository.save(existingreview);
    }

    @DeleteMapping("{id}")
    public String deleteReview(@PathVariable long id) {
        Review existingReview = reviewRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Review not found"));
        reviewRepository.delete(existingReview);
        return "Review deleted successfully";
    }

}
