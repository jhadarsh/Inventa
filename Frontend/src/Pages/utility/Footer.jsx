import { motion } from "framer-motion";

const Footer = () => {
  return (
    <motion.footer
      initial={{ opacity: 0, y: 80 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="bg-gray-900 text-white py-8"
    >
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-6 text-center md:text-left">
        <div>
          <h2 className="text-lg font-semibold">Inventa</h2>
          <p className="text-gray-400 mt-2">
            Smart inventory solutions for modern businesses.
          </p>
        </div>

        <div>
          <h2 className="text-lg font-semibold">Quick Links</h2>
          <ul className="mt-2 space-y-1 text-gray-400">
            <li><a href="#features" className="hover:text-white">Features</a></li>
            <li><a href="#projects" className="hover:text-white">Projects</a></li>
            <li><a href="#contact" className="hover:text-white">Contact</a></li>
          </ul>
        </div>

        <div>
          <h2 className="text-lg font-semibold">Follow Us</h2>
          <div className="flex justify-center md:justify-start space-x-4 mt-2 text-gray-400">
            <a href="#"><i className="fab fa-twitter hover:text-white"></i></a>
            <a href="#"><i className="fab fa-github hover:text-white"></i></a>
            <a href="#"><i className="fab fa-linkedin hover:text-white"></i></a>
          </div>
        </div>
      </div>

      <div className="text-center mt-6 text-gray-600 text-sm">
        &copy; {new Date().getFullYear()} Inventa. All rights reserved.
      </div>
    </motion.footer>
  );
};

export default Footer;
