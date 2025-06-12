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
      <div className="w-full lg:w-9/12 mx-auto flex flex-col md:flex-row justify-between gap-10">
        
        {/* Left Section */}
        <div className="flex-1 text-center md:text-left">
          <h2 className="text-2xl font-bold">BudJeti</h2>
          <p className="mt-2 text-sm max-w-xs mx-auto md:mx-0">
            BudJeti, 51 Bracken Road, Sandyford D18 Dublin Ireland
          </p>
          <div className="flex justify-center md:justify-start gap-6 mt-4 text-xl">
            {socialLinks.map((item, index) => (
              <a
                href={item.url}
                key={index}
                className={`pr-4 ${index !== socialLinks.length - 1 ? 'border-r border-gray-400' : ''}`}
              >
                <i className={`fab ${item.icon}`}></i>
              </a>
            ))}
          </div>
        </div>

        {/* Quick Links */}
        <div className="flex-1 text-center md:text-left">
          <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            {quickLinks.map((link, index) => (
              <li key={index}>
                <a href={link.url} className="hover:underline">{link.label}</a>
              </li>
            ))}
          </ul>
        </div>

        {/* Newsletter */}
        <div className="flex-1 text-center md:text-left">
          <h3 className="text-lg font-semibold mb-2">Newsletter</h3>
          <p className="text-sm mb-3">Stay Up To Date</p>
          <form className="flex flex-col sm:flex-row items-center justify-center md:justify-start bg-white rounded-md overflow-hidden">
            <input
              type="email"
              placeholder="Your email"
              className="p-2 w-full sm:w-auto flex-1 text-black outline-none"
            />
            <button
              type="submit"
              className="bg-white text-[#0A18F2] px-4 py-2"
            >
              <i className="fas fa-arrow-right"></i>
            </button>
          </form>
        </div>
      </div>

      <div className="mt-10 border-t border-white/30 pt-4 text-center text-sm px-2">
        Copyright ©2025 BudJeti. All rights reserved
      </div>
    </footer>
  );
};

export default Footer;
