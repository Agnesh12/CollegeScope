import React from "react";

function Contact() {
    const [form, setForm] = React.useState({
        name: "",
        email: "",
        message: "",
    });
    const [submitted, setSubmitted] = React.useState(false);

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await fetch('http://localhost:8080/api/contact', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(form),
            });

            if (!response.ok) {
                throw new Error('Failed to send message');
            }

            setSubmitted(true);
            setForm({ name: '', email: '', message: '' }); // Clear form after success
        } catch (error) {
            alert(error.message);
        }
    };

    return (
        <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center px-4">
            <h1
                className="text-4xl font-bold text-blue-900 mb-6 animate-fade-in-down"
                style={{ animationDelay: "0.1s" }}
            >
                Contact Us
            </h1>
            {submitted ? (
                <div
                    className="bg-green-100 text-green-800 p-6 rounded-xl shadow-lg max-w-md w-full text-center animate-fade-in"
                    style={{ animationDelay: "0.2s" }}
                >
                    <p className="text-xl font-semibold mb-2">Thank you!</p>
                    <p>Your message has been sent. We'll get back to you soon.</p>
                </div>
            ) : (
                <form
                    className="bg-white shadow-lg rounded-xl p-8 w-full max-w-md animate-slide-up"
                    style={{ animationDelay: "0.2s" }}
                    onSubmit={handleSubmit}
                >
                    <input
                        type="text"
                        name="name"
                        value={form.name}
                        onChange={handleChange}
                        placeholder="Your Name"
                        className="w-full border p-3 rounded-lg mb-4 focus:outline-none focus:ring-2 focus:ring-blue-300 transition-all duration-300 focus:scale-105"
                        required
                    />
                    <input
                        type="email"
                        name="email"
                        value={form.email}
                        onChange={handleChange}
                        placeholder="Your Email"
                        className="w-full border p-3 rounded-lg mb-4 focus:outline-none focus:ring-2 focus:ring-blue-300 transition-all duration-300 focus:scale-105"
                        required
                    />
                    <textarea
                        name="message"
                        value={form.message}
                        onChange={handleChange}
                        placeholder="Your Message"
                        className="w-full border p-3 rounded-lg mb-4 h-32 focus:outline-none focus:ring-2 focus:ring-blue-300 transition-all duration-300 focus:scale-105"
                        required
                    />
                    <button
                        type="submit"
                        className="w-full bg-blue-700 text-white py-3 rounded-lg hover:bg-blue-800 transition font-semibold transform hover:scale-105 active:scale-95"
                    >
                        Send Message
                    </button>
                </form>
            )}
            
            <style>
                {`
                @keyframes fade-in {
                    from { opacity: 0; }
                    to { opacity: 1; }
                }
                @keyframes fade-in-down {
                    from { opacity: 0; transform: translateY(-30px);}
                    to { opacity: 1; transform: translateY(0);}
                }
                @keyframes slide-up {
                    from { opacity: 0; transform: translateY(40px);}
                    to { opacity: 1; transform: translateY(0);}
                }
                .animate-fade-in {
                    animation: fade-in 0.7s ease forwards;
                }
                .animate-fade-in-down {
                    animation: fade-in-down 0.7s cubic-bezier(.4,0,.2,1) forwards;
                }
                .animate-slide-up {
                    animation: slide-up 0.7s cubic-bezier(.4,0,.2,1) forwards;
                }
                `}
            </style>
        </div>
    );
}

export default Contact;
