export default function SectionHeading({ number, label, children, description, id }) {
  return (
    <>
      <div className="section-kicker"><span>{number} / {label}</span><span className="kicker-line" /></div>
      {(children || description) && (
        <div className="section-intro">
          {children && <h2 id={id} className="section-title">{children}</h2>}
          {description && <p>{description}</p>}
        </div>
      )}
    </>
  );
}
