const SocialLink = ({ href, icon, aClass }) => {
  return (
    <li>
      <a href={href} target="_blank" rel="noreferrer" className={aClass}>
        <i className={icon}></i>
      </a>
    </li>
  );
};

export default SocialLink;
