import '@fortawesome/fontawesome-free/css/all.min.css';

const Footer = () => {
    const socialLinks = [
  { icon: 'fa-facebook-f', url: '#' },
  { icon: 'fa-instagram', url: '#' },
  { icon: 'fa-twitter', url: '#' },
  { icon: 'fa-youtube', url: '#' },
];

const quickLinks = [
  { label: 'Home', url: '#' },
  { label: 'About Us', url: '#' },
  { label: 'Bookings', url: '#' },
  { label: 'Blog', url: '#' },
];
  return (
    <footer className="bg-[#0A18F2] text-white py-10 px-6">
      <div className="w-9/12 mx-auto flex flex-col md:flex-row justify-between gap-10">
        {/* Left Section */}
        <div className="flex-1">
          <h2 className="text-2xl font-bold">BudJeti</h2>
          <p className="mt-2 text-sm">
            Company name, 51 Bracken Road, Sandyford  D18 Dublin Ireland
          </p>
       <div className="flex gap-4 mt-4 text-xl">
      {socialLinks.map((item, index) => (
        <a href={item.url} key={index}>
          <i className={`fab ${item.icon}`}></i>
        </a>
      ))}
    </div>

        </div>

      <div className="flex-1">
      <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
      <ul className="space-y-2 text-sm">
        {quickLinks.map((link, index) => (
          <li key={index}>
            <a href={link.url}>{link.label}</a>
          </li>
        ))}
      </ul>
    </div>

        <div className="flex-1">
          <h3 className="text-lg font-semibold mb-2">Newsletter</h3>
          <p className="text-sm mb-3">Stay Up To Date</p>
          <form className="flex items-center bg-white">
            <input
              type="email"
              placeholder="Your email"
              className="p-2 rounded-l-md w-full text-black"
            />
            <button
              type="submit"
              className="bg-white text-[#0A18F2] px-4 py-2 rounded-r-md"
            >
              <i className="fas fa-arrow-right"></i>
            </button>
          </form>
        </div>
      </div>

      <div className="mt-10 border-t border-white/30 pt-4 text-center text-sm">
        Copyright ©2025 BudJeti. All rights reserved
      </div>
      
    </footer>
  );
};

export default Footer;
