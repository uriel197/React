const Title = ({ leftTitle, rightTitle }) => {
  return (
    <div className="section-title">
      <h2>
        {leftTitle} <span>{rightTitle}</span>
      </h2>
    </div>
  );
};

export default Title;
