import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <motion.footer
      initial={{ opacity: 0, y: 80 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="bg-gradient-to-r from-blue-700 to-blue-900 text-white py-10"
    >
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-10 text-center md:text-left">
        {/* Inventa Info */}
        <div>
          <h2 className="text-2xl font-semibold">Inventa</h2>
          <p className="text-blue-200 mt-2">
            Transforming retail supply chains with intelligence, speed, and sustainability.
          </p>
        </div>

        {/* Quick Navigation */}
        <div>
          <h2 className="text-xl font-semibold">Quick Links</h2>
          <ul className="mt-3 space-y-2 text-blue-200">
            <li><Link to="/" className="hover:text-white">Home</Link></li>
            <li><Link to="/about" className="hover:text-white">About</Link></li>
            <li><Link to="/dashboard" className="hover:text-white">Dashboard</Link></li>
            <li><Link to="/inventory" className="hover:text-white">Inventory</Link></li>
            <li><Link to="/forecast" className="hover:text-white">Forecast</Link></li>
            <li><Link to="/delivery" className="hover:text-white">Delivery</Link></li>
          </ul>
        </div>

        {/* Social Links */}
        <div>
          <h2 className="text-xl font-semibold">Connect</h2>
          <div className="flex justify-center md:justify-start space-x-4 mt-3 text-blue-200">
            <a href="/twitter" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-twitter hover:text-white text-lg"></i>
            </a>
            <a href="/github" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-github hover:text-white text-lg"></i>
            </a>
            <a href="/linkedin" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-linkedin hover:text-white text-lg"></i>
            </a>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="text-center mt-8 text-sm text-blue-200">
        &copy; {new Date().getFullYear()} Inventa. All rights reserved.
      </div>
    </motion.footer>
  );
};

export default Footer;
