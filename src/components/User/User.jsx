import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const User = ({ user }) => {
  const { name, id, email, catchPhrase } = user;
  const navigate = useNavigate();

  const handelDetails = () => {
    navigate(`/user/${id}`)
  };
  return (
    <div className="border rounded-lg p-8 m-8">
      <small>id : {id}</small>
      <h2>Name : {name}</h2>
      <h4>Email : {email}</h4>
      <p>catchPhrase: {catchPhrase}</p>
      <Link to={`/user/${id}`}>
        <button className="btn">Buy Now</button>
      </Link>
      <button className="btn ml-3" onClick={handelDetails}>Load Data</button>
    </div>
  );
};

export default User;
