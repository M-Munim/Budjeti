const LegalPage = () => {
  return (
    <section className="py-10 lg:py20 px-6">
      <div className="w-9/12 mx-auto text-gray-800">
        <h1 className="text-[24px] md:text-[48px] font-bold mb-4 lg:mb-12 text-center text-gray-900">
          Legal Information
        </h1>

        <div className="mb-4 lg:mb-12">
          <h2 className="text-[18px] lg:text-[28px] font-semibold mb-2 lg:mb-4 text-gray-900">Privacy Policy</h2>
          <ul className="list-disc list-inside space-y-3 text-[17px]">
            <li>We are committed to protecting your privacy. This policy outlines how we collect, use, and safeguard your personal and business data.</li>
            <li>We collect information you provide when creating an account, verifying your business, and using our services.</li>
            <li>Your data is processed lawfully and transparently, only for the purposes of providing our services, complying with regulations (like KYC/AML), and improving user experience.</li>
            <li>We implement strict security measures including encryption, access control, and third-party audits.</li>
            <li>We do not sell or rent your personal information. We may share data only with trusted providers necessary for service delivery and compliance.</li>
            <li>Users have the right to access, correct, or delete their data by contacting <span className="text-blue-700 underline">support@yourapp.com</span>.</li>
          </ul>
        </div>

        <div className="mb-12">
          <h2 className="text-[18px] lg:text-[28px] font-semibold mb-2 lg:mb-4 text-gray-900">Terms of Service</h2>
          <p className="text-[17px]">
            This section includes the full commercial terms of service including wallet usage, dispute policies, service limitations, and other important agreements that users accept when registering on Budjeti. For the full details, please contact our legal department at <span className="text-blue-700 underline">support@budjeti.com</span>.
          </p>
        </div>

        <div>
          <h2 className="text-[18px] lg:text-[28px] font-semibold mb-2 lg:mb-4 text-gray-900">Cookie Policy</h2>
          <p className="text-[17px]">
            We use cookies to enhance your browsing experience, analyze traffic, and serve targeted ads. By continuing to use our website, you consent to the use of cookies in accordance with our policy. Transparent tracking and consent options are provided in your browser or via cookie pop-ups on our site.
          </p>
        </div>
         <div className="mt-4 text-center border-t pt-2 text-gray-500 text-sm">
          Built with integrity. Powered by technology. Trusted by businesses.
        </div>
      </div>
    </section>
  );
};

export default LegalPage;
