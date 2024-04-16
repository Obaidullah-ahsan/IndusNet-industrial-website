const Footer = () => {
  return (
    <div>
      <footer className="flex p-10 bg-[#587187] text-white">
        <aside className="w-2/3">
          <h2 className="text-3xl font-bold ">IndusNet Industries Ltd.</h2>
          <p className="mb-4">A10 Street NY 535022, USA</p>
          <p>Number : +1 5589 55488 55</p>
          <p>Email : info@example.com</p>
        </aside>
        <div className="flex flex-col gap-16 w-1/3">
          <nav className="flex flex-col">
            <h6 className="footer-title">Services</h6>
            <a className="link link-hover">Branding</a>
            <a className="link link-hover">Design</a>
            <a className="link link-hover">Marketing</a>
            <a className="link link-hover">Advertisement</a>
          </nav>
          <nav className="flex flex-col">
            <h6 className="footer-title">Social Media</h6>
            <a className="link link-hover">Facebook</a>
            <a className="link link-hover">Instagram</a>
            <a className="link link-hover">Twiter</a>
            <a className="link link-hover">Github</a>
          </nav>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
