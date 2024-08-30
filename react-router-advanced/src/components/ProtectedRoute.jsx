import { Navigate } from 'react-router-dom';

function ProtectedRoute({ element: Component, isAuthenticated, ...rest }) {
  return isAuthenticated ? (
    <Component {...rest} />
  ) : (
    <Navigate to="/" replace />
  );
}

export default ProtectedRoute;
