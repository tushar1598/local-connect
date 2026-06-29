import { Mail, MapPin, Phone } from "lucide-react";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaXTwitter,
} from "react-icons/fa6";

const Footer = () => {
  return (
    <footer id="about" className="bg-gray-950 text-gray-300">
      <div className="mx-auto max-w-7xl px-6 py-20">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-5">
          {/* Logo */}
          <div className="lg:col-span-2">
            <h2 className="text-3xl font-bold text-white">
              Local<span className="text-indigo-500">Connect</span>
            </h2>

            <p className="mt-6 max-w-md leading-8 text-gray-400">
              Discover trusted local professionals near you. From plumbers to
              electricians, connect with verified businesses quickly and
              confidently.
            </p>

            <div className="mt-8 flex gap-4">
              {[FaFacebookF, FaInstagram, FaXTwitter, FaLinkedinIn].map(
                (Icon, index) => (
                  <button
                    key={index}
                    className="flex h-11 w-11 cursor-pointer items-center justify-center rounded-xl bg-gray-900 transition hover:bg-indigo-600"
                  >
                    <Icon size={18} />
                  </button>
                ),
              )}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold text-white">Quick Links</h3>

            <ul className="mt-6 space-y-4">
              {["Home", "Services", "About", "Contact", "Become Partner"].map(
                (item) => (
                  <li key={item}>
                    <a href="#" className="transition hover:text-white">
                      {item}
                    </a>
                  </li>
                ),
              )}
            </ul>
          </div>

          {/* Popular Services */}
          <div>
            <h3 className="text-lg font-semibold text-white">
              Popular Services
            </h3>

            <ul className="mt-6 space-y-4">
              {[
                "Plumber",
                "Electrician",
                "Painter",
                "Cleaning",
                "AC Repair",
              ].map((item) => (
                <li key={item}>
                  <a href="#" className="transition hover:text-white">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-semibold text-white">Contact</h3>

            <div className="mt-6 space-y-5">
              <div className="flex items-start gap-3">
                <MapPin size={18} className="mt-1 text-indigo-500" />

                <p>Jaipur, Rajasthan, India</p>
              </div>

              <div className="flex items-center gap-3">
                <Phone size={18} className="text-indigo-500" />

                <p>+91 7062341183</p>
              </div>

              <div className="flex items-center gap-3">
                <Mail size={18} className="text-indigo-500" />

                <p>support@localconnect.com</p>
              </div>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="my-12 h-px bg-gray-800" />

        {/* Bottom */}
        <div className="flex flex-col items-center justify-between gap-6 text-sm text-gray-500 md:flex-row">
          <p>© {new Date().getFullYear()} LocalConnect. All rights reserved.</p>

          <div className="flex gap-6">
            <a href="#" className="hover:text-white">
              Privacy Policy
            </a>

            <a href="#" className="hover:text-white">
              Terms & Conditions
            </a>

            <a href="#" className="hover:text-white">
              Cookies
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
