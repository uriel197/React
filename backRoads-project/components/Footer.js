import PageLinks from "./PageLinks";
import SocialLink from "./SocialLink";
import { socialLinks } from "./data";

const Footer = () => {
  return (
    <footer className="section footer">
      <PageLinks ulClass="footer-links" aClass="footer-link" />
      <ul className="footer-icons">
        {socialLinks.map((link) => {
          return <SocialLink key={link.id} {...link} aClass="footer-icon" />;
        })}
      </ul>
      <p className="copyright">
        copyright &copy; Backroads travel tours company
        <span id="date">{new Date().getFullYear()}</span> all rights reserved
      </p>
    </footer>
  );
};
export default Footer;
