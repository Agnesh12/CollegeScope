import { useEffect, useState } from "react";

function ExploreColleges() {
  const [colleges, setColleges] = useState([
    {
      name: "IIT Delhi",
      description: "Top-tier engineering college known for innovation and tech leadership.",
    },
    {
      name: "NIT Trichy",
      description: "Well-ranked national institute with excellent placement records.",
    },
    {
      name: "VIT Vellore",
      description: "Popular private university offering industry-focused courses.",
    },
  ]);

  const [newCollege, setNewCollege] = useState({ name: "", description: "" });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  useEffect(() => {
    // Animation logic (optional)
    const cards = document.querySelectorAll(".college-card");
    cards.forEach((card, i) => {
      card.style.opacity = 0;
      card.style.transform = "translateY(40px)";
      setTimeout(() => {
        card.style.transition =
          "opacity 0.6s cubic-bezier(.4,0,.2,1), transform 0.6s cubic-bezier(.4,0,.2,1)";
        card.style.opacity = 1;
        card.style.transform = "translateY(0)";
      }, 150 * i);
    });
  }, [colleges]); // Run animation when colleges change

  const handleChange = (e) => {
    setNewCollege({ ...newCollege, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    setSuccess("");

    try {
      // Replace with your backend API URL
      const response = await fetch("http://localhost:8080/api/colleges", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newCollege),
      });

      if (!response.ok) {
        throw new Error("Failed to add college");
      }

      const savedCollege = await response.json();

      // Add newly saved college to the list
      setColleges((prev) => [...prev, savedCollege]);

      setNewCollege({ name: "", description: "" });
      setSuccess("College added successfully!");
    } catch (err) {
      setError(err.message || "Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-white px-4 py-10">
      <h1 className="text-4xl font-extrabold text-center text-blue-900 mb-10 tracking-tight drop-shadow animate__animated animate__fadeInDown">
        Explore Colleges
      </h1>

      {/* College list */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 max-w-6xl mx-auto mb-12">
        {colleges.map((college, idx) => (
          <div
            key={college.name + idx}
            className="college-card bg-white border border-blue-100 p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-200 flex flex-col items-center hover:scale-105 hover:-translate-y-2 transform"
            style={{ transition: "box-shadow 0.2s, transform 0.2s" }}
          >
            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-4 animate-bounce">
              <span className="text-2xl font-bold text-blue-700">{idx + 1}</span>
            </div>
            <h2 className="text-xl font-semibold mb-2 text-blue-800">{college.name}</h2>
            <p className="text-gray-600 text-center">{college.description}</p>
          </div>
        ))}
      </div>

      {/* Add college form */}
      <div className="max-w-md mx-auto bg-white p-8 rounded-xl shadow-lg">
        <h2 className="text-2xl font-semibold mb-6 text-center text-blue-800">Add New College</h2>
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <input
            type="text"
            name="name"
            placeholder="College Name"
            value={newCollege.name}
            onChange={handleChange}
            required
            className="border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
          <textarea
            name="description"
            placeholder="College Description"
            value={newCollege.description}
            onChange={handleChange}
            required
            rows={4}
            className="border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 resize-none"
          />
          <button
            type="submit"
            disabled={loading}
            className="bg-blue-700 text-white py-3 rounded-lg font-semibold hover:bg-blue-800 transition-colors disabled:opacity-50"
          >
            {loading ? "Adding..." : "Add College"}
          </button>
        </form>
        {error && <p className="text-red-600 mt-4 text-center">{error}</p>}
        {success && <p className="text-green-600 mt-4 text-center">{success}</p>}
      </div>
    </div>
  );
}

export default ExploreColleges;
