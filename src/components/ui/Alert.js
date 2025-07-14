export default function Alert({ className = '', children, ...props }) {
  return (
    <div {...props} className={`alert bg-base-200 ${className}`} role="alert">
      {children}
    </div>
  );
}
