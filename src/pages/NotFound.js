import { Link } from "react-router-dom/cjs/react-router-dom.min";

const NotFound = () => {
  return (
    <div className="not-found">
      <h2>404. Page not found</h2>
      <p>The page you were looking for does not exist.</p>
      <Link to="/">Go home</Link>
    </div>
  );
};

export default NotFound;
