import { Navigate } from 'react-router-dom';

function ProtectedRoute({ element: Component, useAuth, ...rest }) {
  return useAuth ? (
    <Component {...rest} />
  ) : (
    <Navigate to="/" replace />
  );
}

export default ProtectedRoute;
