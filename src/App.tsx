import { Mail, Phone } from "lucide-react";
import { Link, Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Blog from "./components/Blog";
import Contact from "./components/Contact";
import Home from "./components/Home";

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-amber-50">
        <nav className="bg-orange-400 text-white p-4 sticky top-0 z-50">
          <div className="container mx-auto flex justify-between items-center px-8">
            <Link
              to="/"
              className="flex items-center space-x-2 text-2xl font-bold"
            >
              <img
                src="/honey_3413307.png"
                alt="Mật ong ba nuôi"
                width={36}
                height={36}
              />
              <span className="font-sans">BaNuoi</span>
            </Link>
            <div className="hidden md:flex space-x-6 font-sans font-semibold">
              <Link to="/" className="hover:text-amber-200 transition">
                Trang chủ
              </Link>
              <Link to="/blog" className="hover:text-amber-200 transition">
                Về Chúng Tôi
              </Link>
              <Link to="/contact" className="hover:text-amber-200 transition">
                Đặt hàng
              </Link>
            </div>
            <div className="flex items-center space-x-4">
              <select
                name="language"
                id="language"
                className="bg-white rounded-md px-2 py-1 text-orange-400 font-sans font-semibold text-sm"
              >
                <option value="Vietnamese" className="text-orange-400">
                  VIE
                </option>
                <option value="English" className="text-orange-400">
                  EN
                </option>
              </select>
            </div>
            <div className="flex items-center space-x-4 md:hidden">
              <button className="md:hidden">
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16m-16 6h16"
                  />
                </svg>
              </button>
            </div>
          </div>
        </nav>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>

        <footer className="bg-orange-400 text-white py-8">
          <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4">Mật Ong Ba Nuôi</h3>
              <p>Chất lượng từ thiên nhiên, ngọt ngào cuộc sống</p>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4">Liên hệ</h3>
              <div className="space-y-2">
                <p className="flex items-center gap-2">
                  <Phone size={16} />
                  <span>0123 456 789</span>
                </p>
                <p className="flex items-center gap-2">
                  <Mail size={16} />
                  <span>info@honeyheaven.com</span>
                </p>
              </div>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4">Theo dõi chúng tôi</h3>
              <div className="flex space-x-4">
                <a href="#" className="hover:text-amber-200">
                  Facebook
                </a>
                <a href="#" className="hover:text-amber-200">
                  Instagram
                </a>
                <a href="#" className="hover:text-amber-200">
                  Twitter
                </a>
              </div>
              <div className="mt-2">
                <input
                  type="email"
                  placeholder="banuoihoney@gmail.com"
                  className="bg-white rounded-l-md px-2 py-1 text-orange-400 font-sans font-semibold text-sm"
                />
                <button
                  className="bg-orange-400 text-white rounded-r-md px-4 py-1 text-sm font-semibold
                hover:bg-white hover:text-orange-400 transition shadow-md"
                >
                  Đăng ký
                </button>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </Router>
  );
}

export default App;
