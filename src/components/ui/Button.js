import { forwardRef } from 'react';

export default forwardRef(function Button({ as: Comp = 'button', className = '', ...props }, ref) {
  return <Comp ref={ref} className={`btn btn-primary ${className}`} {...props} />;
});
