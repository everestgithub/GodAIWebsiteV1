const Footer = () => {
  const sections = [

    {
      title: "Company",
      links: ["About Us", "Careers", "Blog", "Press", "Partners"],
    },
    {
      title: "Support",
      links: ["Help Center", "Contact Us", "Community", "Status", "Developer API"],
    },
  ];

  return (
    <footer className="bg-[#111827] pt-16 pb-8 ">
      <div className="container mx-auto px-4">
        
        <div className="border-t border-gray-700 pt-8">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between">
            <p className="text-sm text-gray-300">
              &copy; {new Date().getFullYear()} GodAI. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              {["Terms", "Privacy", "Cookies"].map((item, index) => (
                <a key={index} href="#" className="text-gray-300 hover:text-blue-400 transition duration-300">
                  {item}
                </a>
              ))}
            </div>
          </div>

          <p className="text-[10px] text-gray-400 mt-6 leading-relaxed">
          DISCLAIMER: The information on this website is not a solicitation to purchase or invest in $GOD token or any token mentioned on this website. If you decide to purchase any token, you do so with the understanding that you may lose some or all of your investment. Owning $GOD tokens, whether purchased or earned, does not entitle you to the GodAI team's attention, efforts, or services, nor does it constitute a business relationship between you and the GodAI team or its partners. The GodAI team reserves the right to cease support for the token, the GodAI app, or cancel the project at any time they deem appropriate.

          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;