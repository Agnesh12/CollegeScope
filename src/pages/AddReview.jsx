import React, { useState, useEffect } from "react";

function AddReview() {
  const [collegeName, setCollegeName] = useState("");
  const [reviewerName, setReviewerName] = useState("");
  const [comment, setComment] = useState("");
  const [facultyRating, setFacultyRating] = useState("");
  const [infraRating, setInfraRating] = useState("");
  const [placementRating, setPlacementRating] = useState("");
  const [colleges, setColleges] = useState([]);
  const [message, setMessage] = useState("");

  // Fetch list of colleges from backend
  useEffect(() => {
    fetch("http://localhost:8080/api/colleges")
      .then((res) => {
        if (!res.ok) throw new Error("Failed to fetch colleges");
        return res.json();
      })
      .then((data) => setColleges(data))
      .catch(() => setMessage("Failed to load colleges."));
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();

    // Find the college object matching the typed college name
    const matchedCollege = colleges.find(
      (college) => college.name.toLowerCase() === collegeName.toLowerCase()
    );

    if (!matchedCollege) {
      setMessage("College not found. Please enter a valid college name.");
      return;
    }

    // Build review object to send
    const review = {
      reviewerName,
      comment,
      facultyRating: Number(facultyRating),
      infraRating: Number(infraRating),
      placementRating: Number(placementRating),
    };

    // POST review to backend (corrected URL)
    fetch(`http://localhost:8080/api/reviews/college/${matchedCollege.id}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(review),
    })
      .then((res) => {
        if (!res.ok) throw new Error("Failed to submit review.");
        return res.json();
      })
      .then(() => {
        setMessage("Review submitted successfully!");
        // Reset form fields
        setReviewerName("");
        setComment("");
        setFacultyRating("");
        setInfraRating("");
        setPlacementRating("");
        setCollegeName("");
      })
      .catch((err) => setMessage(err.message));
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-100 via-purple-100 to-pink-100 py-8">
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-lg bg-white/90 backdrop-blur-md p-8 rounded-2xl shadow-2xl border border-blue-200"
      >
        <h2 className="text-3xl font-extrabold text-blue-700 mb-6 text-center tracking-tight">
          Submit a Review
        </h2>

        <div className="mb-4">
          <label className="block text-blue-700 font-semibold mb-1">
            College Name
          </label>
          <input
            type="text"
            list="college-names"
            placeholder="Select or type college name"
            value={collegeName}
            onChange={(e) => setCollegeName(e.target.value)}
            className="w-full p-3 border border-blue-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
            required
          />
          <datalist id="college-names">
            {colleges.map((college) => (
              <option key={college.id} value={college.name} />
            ))}
          </datalist>
        </div>

        <div className="mb-4">
          <label className="block text-blue-700 font-semibold mb-1">
            Your Name
          </label>
          <input
            type="text"
            placeholder="Enter your name"
            value={reviewerName}
            onChange={(e) => setReviewerName(e.target.value)}
            className="w-full p-3 border border-blue-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
            required
          />
        </div>

        <div className="mb-4">
          <label className="block text-blue-700 font-semibold mb-1">
            Your Comment
          </label>
          <textarea
            placeholder="Share your experience..."
            value={comment}
            onChange={(e) => setComment(e.target.value)}
            className="w-full p-3 border border-blue-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 transition resize-none"
            rows={4}
            required
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
          <div>
            <label className="block text-blue-700 font-semibold mb-1">
              Faculty Rating
            </label>
            <input
              type="number"
              min="1"
              max="5"
              placeholder="1-5"
              value={facultyRating}
              onChange={(e) => setFacultyRating(e.target.value)}
              className="w-full p-2 border border-blue-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
              required
            />
          </div>
          <div>
            <label className="block text-blue-700 font-semibold mb-1">
              Infrastructure Rating
            </label>
            <input
              type="number"
              min="1"
              max="5"
              placeholder="1-5"
              value={infraRating}
              onChange={(e) => setInfraRating(e.target.value)}
              className="w-full p-2 border border-blue-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
              required
            />
          </div>
          <div>
            <label className="block text-blue-700 font-semibold mb-1">
              Placement Rating
            </label>
            <input
              type="number"
              min="1"
              max="5"
              placeholder="1-5"
              value={placementRating}
              onChange={(e) => setPlacementRating(e.target.value)}
              className="w-full p-2 border border-blue-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
              required
            />
          </div>
        </div>

        <button
          type="submit"
          className="w-full bg-gradient-to-r from-blue-500 to-purple-500 text-white font-bold py-3 rounded-lg shadow-lg hover:from-blue-600 hover:to-purple-600 transition text-lg"
        >
          Submit Review
        </button>

        {message && (
          <p
            className={`mt-6 text-center text-base font-medium ${
              message.includes("success") ? "text-green-600" : "text-red-500"
            }`}
          >
            {message}
          </p>
        )}
      </form>
    </div>
  );
}

export default AddReview;
