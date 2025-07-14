export default function Card({ className = '', children, ...props }) {
  return (
    <div {...props} className={`card bg-base-200 shadow-lg ${className}`}>
      <div className="card-body">{children}</div>
    </div>
  );
}
