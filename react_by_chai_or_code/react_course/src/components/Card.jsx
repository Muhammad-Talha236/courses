function Card() {
  return (
    <>
      <nav className="bg-blue-600 text-white shadow-md">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex justify-between items-center h-16">

            <a href="#" className="text-2xl font-bold">
              MyLogo
            </a>

            <div className="hidden md:flex items-center space-x-8">
              <a href="#" className="hover:text-gray-200 transition">
                Home
              </a>
              <a href="#" className="hover:text-gray-200 transition">
                About
              </a>
              <a href="#" className="hover:text-gray-200 transition">
                Services
              </a>
              <a href="#" className="hover:text-gray-200 transition">
                Contact
              </a>

              <button className="bg-white text-blue-600 px-4 py-2 rounded-lg hover:bg-gray-100 transition">
                Login
              </button>
            </div>

            <button className="md:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-7 h-7"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>

          </div>
        </div>
      </nav>
    </>
  );
}

export default Card;

