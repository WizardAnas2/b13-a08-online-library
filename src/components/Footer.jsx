const Footer = () => {
  return (
    <footer className="footer footer-center p-10 bg-neutral text-neutral-content rounded">
      <nav className="grid grid-flow-col gap-4">
        <a className="link link-hover">Home</a>
        <a className="link link-hover">All Books</a>
        <a className="link link-hover">Contact Us</a>
      </nav> 
      <nav>
        <div className="grid grid-flow-col gap-4">
          <a href="#" className="text-2xl hover:text-primary">Twitter</a>
          <a href="#" className="text-2xl hover:text-primary">Facebook</a>
          <a href="#" className="text-2xl hover:text-primary">GitHub</a>
        </div>
      </nav> 
      <aside>
        <p>Copyright © 2026 - All right reserved by BookFlow Ltd</p>
      </aside>
    </footer>
  );
};

export default Footer;