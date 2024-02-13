import { pageLinks } from "./data";

const PageLinks = ({ ulClass, aClass }) => {
  return (
    <ul className={ulClass} id="nav-links">
      {pageLinks.map((link) => {
        return (
          <li key={link.id}>
            <a href={link.href} className={aClass}>
              {link.text}
            </a>
          </li>
        );
      })}
    </ul>
  );
};

export default PageLinks;
