import { Navigate } from 'react-router-dom';
import Cookies from 'js-cookie';

const ProtectedRoute = ({ children }) => {
  const Token = Cookies.get('jwt_token');
  if (Token === undefined) {
    return <Navigate to="/login" replace />;
  }
  return children;
};

export default ProtectedRoute;
