import { Link } from "react-router-dom"

const Navber = () => {
  return (
    <div className="text-center bg-indigo-500 text-white py-8">
      <ul className="flex flex-row gap-9 items-center justify-center">
        <Link to="/home">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact us</Link>
        <Link to="/blog">Blog</Link>
        <Link to="/users">Users</Link>
        <Link to="/posts">Posts</Link>
      </ul>
    </div>
  );
};

export default Navber;
