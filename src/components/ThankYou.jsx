export default function ThankYou() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-black text-white px-6">
      <div className="text-center">
        <h1 className="text-4xl font-bold mb-4">Thank you! 🎉</h1>
        <p className="text-gray-400 mb-6">
          Your message has been sent successfully.
        </p>
        <a
          href="/"
          className="inline-block px-6 py-3 bg-yellow-400 text-black rounded-lg font-semibold hover:bg-yellow-300 transition"
        >
          Go Back Home
        </a>
      </div>
    </div>
  );
}
