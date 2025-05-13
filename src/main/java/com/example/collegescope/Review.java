package com.example.collegescope;

import jakarta.persistence.*;

@Entity
@Table(name = "review")
public class Review {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;
    private String reviewerName;
    private String comment;
    private String facultyRating;
    private String infraRating;
    private String placementRating;

    @ManyToOne
    @JoinColumn(name = "college_id")
    private College college;


    public Review() {}


    public Review(String reviewerName, String comment, String facultyRating, String infraRating, String placementRating, College college) {
        this.reviewerName = reviewerName;
        this.comment = comment;
        this.facultyRating = facultyRating;
        this.infraRating = infraRating;
        this.placementRating = placementRating;
        this.college = college;
    }


    public long getId() {
        return id;
    }

    public String getReviewerName() {
        return reviewerName;
    }

    public String getComment() {
        return comment;
    }

    public String getFacultyRating() {
        return facultyRating;
    }

    public String getInfraRating() {
        return infraRating;
    }

    public String getPlacementRating() {
        return placementRating;
    }


    public void setCollege(College college) {
        this.college = college;
    }


    public void setReviewerName(String reviewerName) {
        this.reviewerName = reviewerName;
    }

    public void setComment(String comment) {
        this.comment = comment;
    }

    public void setFacultyRating(String facultyRating) {
        this.facultyRating = facultyRating;
    }

    public void setInfraRating(String infraRating) {
        this.infraRating = infraRating;
    }

    public void setPlacementRating(String placementrating) {
        this.placementRating = placementrating;
    }
}
