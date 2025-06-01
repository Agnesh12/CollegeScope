function About() {
    return (
        <div className="min-h-screen bg-gradient-to-br from-blue-50 to-blue-100 flex flex-col items-center justify-center px-4">
            <div className="bg-white shadow-lg rounded-xl p-8 max-w-2xl w-full flex flex-col items-center">
                <h1 className="text-5xl font-extrabold text-blue-900 mb-6 tracking-tight text-center">
                    About <span className="text-blue-600">CollegeScope</span>
                </h1>
                <p className="text-gray-700 text-lg mb-4 text-center">
                    CollegeScope is your trusted platform to discover, compare, and connect with top colleges across the country.
                </p>
                <p className="text-gray-600 text-base text-center">
                    We empower students to make informed decisions by offering detailed insights, authentic user reviews, and up-to-date information on a wide range of colleges. Start your journey to higher education with confidence!
                </p>
            </div>
        </div>
    );
}

export default About;
