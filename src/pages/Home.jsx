import React from "react";

function Home() {
    return (
        <div className="min-h-screen bg-gradient-to-b from-blue-50 via-white to-gray-100 flex flex-col">
            
           
            <section className="flex flex-col items-center justify-center py-20 px-4 text-center bg-white shadow-md rounded-b-3xl animate-fade-in">
                <h1 className="text-5xl font-extrabold text-blue-700 mb-4 animate-slide-down">Welcome to CollegeScope</h1>
                <p className="text-lg text-gray-600 mb-8 max-w-2xl animate-fade-in-delay">
                    Discover, compare, and connect with colleges that fit your dreams. Your journey to higher education starts here.
                </p>
                <a
                    href="#features"
                    className="inline-block bg-blue-600 text-white px-8 py-3 rounded-full font-semibold shadow hover:bg-blue-700 transition transform hover:scale-105 animate-bounce-short"
                >
                    Explore Features
                </a>
            </section>

           
            <section id="features" className="py-16 px-4 max-w-5xl mx-auto">
                <h2 className="text-3xl font-bold text-center text-blue-800 mb-10 animate-fade-in">Features</h2>
                <div className="grid md:grid-cols-3 gap-8">
                    <div className="bg-white rounded-lg shadow p-6 flex flex-col items-center transition-transform duration-300 hover:scale-105 animate-fade-in-up">
                        <span className="text-blue-600 text-4xl mb-4 animate-bounce">🎓</span>
                        <h3 className="font-semibold text-xl mb-2">College Search</h3>
                        <p className="text-gray-600 text-center">
                            Find colleges by location, major, ranking, and more.
                        </p>
                    </div>
                    <div className="bg-white rounded-lg shadow p-6 flex flex-col items-center transition-transform duration-300 hover:scale-105 animate-fade-in-up delay-100">
                        <span className="text-blue-600 text-4xl mb-4 animate-bounce">📊</span>
                        <h3 className="font-semibold text-xl mb-2">Compare Colleges</h3>
                        <p className="text-gray-600 text-center">
                            Compare colleges side-by-side to make informed decisions.
                        </p>
                    </div>
                    <div className="bg-white rounded-lg shadow p-6 flex flex-col items-center transition-transform duration-300 hover:scale-105 animate-fade-in-up delay-200">
                        <span className="text-blue-600 text-4xl mb-4 animate-bounce">🤝</span>
                        <h3 className="font-semibold text-xl mb-2">Connect & Apply</h3>
                        <p className="text-gray-600 text-center">
                            Connect with admissions and start your application process.
                        </p>
                    </div>
                </div>
            </section>

           
            <section className="py-12 bg-blue-50 flex flex-col items-center animate-fade-in">
                <h2 className="text-2xl font-bold text-blue-700 mb-4">Ready to find your college?</h2>
                <a
                    href="/signup"
                    className="bg-blue-600 text-white px-6 py-3 rounded-full font-semibold shadow hover:bg-blue-700 transition transform hover:scale-105 animate-bounce-short"
                >
                    Get Started
                </a>
            </section>

           
            <footer className="mt-auto py-6 bg-white border-t text-center text-gray-500 text-sm animate-fade-in">
                &copy; {new Date().getFullYear()} CollegeScope. All rights reserved.
            </footer>

          
            <style>
                {`
                @keyframes fadeIn {
                    from { opacity: 0; }
                    to { opacity: 1; }
                }
                @keyframes fadeInUp {
                    from { opacity: 0; transform: translateY(40px); }
                    to { opacity: 1; transform: translateY(0); }
                }
                @keyframes slideDown {
                    from { opacity: 0; transform: translateY(-40px); }
                    to { opacity: 1; transform: translateY(0); }
                }
                @keyframes bounceShort {
                    0%, 100% { transform: translateY(0); }
                    50% { transform: translateY(-8px); }
                }
                .animate-fade-in {
                    animation: fadeIn 1s ease forwards;
                }
                .animate-fade-in-delay {
                    animation: fadeIn 1s 0.5s ease forwards;
                }
                .animate-fade-in-up {
                    animation: fadeInUp 1s ease forwards;
                }
                .animate-fade-in-up.delay-100 {
                    animation-delay: 0.1s;
                    animation-fill-mode: both;
                }
                .animate-fade-in-up.delay-200 {
                    animation-delay: 0.2s;
                    animation-fill-mode: both;
                }
                .animate-slide-down {
                    animation: slideDown 1s ease forwards;
                }
                .animate-bounce {
                    animation: bounceShort 1s infinite;
                }
                .animate-bounce-short {
                    animation: bounceShort 0.8s 1 forwards;
                }
                `}
            </style>
        </div>
    );
}

export default Home;
