import React, { useEffect, useRef, useState } from "react";

function Body() {
  const heroRef = useRef(null);
  const ctaRef = useRef(null);

  const [colleges, setColleges] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    if (heroRef.current) {
      heroRef.current.classList.add("animate-fade-in-up");
    }

    if (ctaRef.current) {
      setTimeout(() => {
        ctaRef.current.classList.add("animate-fade-in-up");
      }, 800);
    }

    fetchColleges();
  }, []);

  async function fetchColleges() {
    try {
      const res = await fetch("http://localhost:8080/college"); 
      if (!res.ok) throw new Error("Failed to fetch colleges");
      const data = await res.json();
      setColleges(data);
    } catch (error) {
      console.error("Error fetching colleges:", error);
    }
  }

  const filteredColleges = colleges.filter(
    (college) =>
      college.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      college.location.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 via-white to-gray-100">
    

      <section className="relative">
        

        <div
          ref={heroRef}
          className="absolute inset-0 flex flex-col items-center justify-center opacity-0"
        >
          <h1 className="text-white text-4xl sm:text-6xl font-extrabold drop-shadow-lg text-center px-4">
            Find Great Colleges Near You
          </h1>
          <p className="mt-4 text-white text-xl sm:text-2xl font-medium drop-shadow text-center max-w-2xl">
            Discover, compare, and connect with top colleges to shape your future.
          </p>

          <form
            className="mt-8 flex w-full justify-center"
            onSubmit={(e) => e.preventDefault()}
          >
            <input
              type="text"
              placeholder="Search colleges, cities, or majors..."
              className="px-5 py-3 rounded-lg w-72 sm:w-96 text-gray-800 focus:outline-none shadow-xl border border-blue-200"
              aria-label="Search colleges, cities, or majors"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <button
              type="submit"
              className="ml-2 px-5 py-3 bg-blue-700 text-white rounded-lg font-semibold shadow-xl hover:bg-blue-800 transition"
            >
              Search
            </button>
          </form>
        </div>
      </section>

      
      <section className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 mt-10 px-4">
        {filteredColleges.length > 0 ? (
          filteredColleges.map((college) => (
            <CollegeCard key={college.id} college={college} />
          ))
        ) : (
          <p className="text-center col-span-full text-gray-600">
            No colleges found matching your search.
          </p>
        )}
      </section>

     
    </div>
  );
}

function CollegeCard({ college }) {
  return (
    <div className="bg-white rounded-2xl shadow-xl p-6 hover:shadow-2xl transition">
      <h3 className="text-xl font-semibold mb-2">{college.name}</h3>
      <p className="text-gray-600 mb-1">{college.location}</p>
      <p className="text-gray-500 text-sm">{college.description}</p>
    </div>
  );
}


export default Body;
