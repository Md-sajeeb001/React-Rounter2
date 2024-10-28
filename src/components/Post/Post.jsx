import { Link, useNavigate } from "react-router-dom";

const Post = ({ post }) => {
  const { id, titel, body } = post;

  const navigate = useNavigate();
  const handelNavigate = () => {
    navigate(`/post/${id}`);
  };
  
  return (
    <div className="border rounded-lg p-8 m-8">
      <h2>id: {id}</h2>
      <p>{titel}</p>
      <p>{body}</p>
      <Link to={`/post/${id}`}>
        <button onClick={handelNavigate} className="btn">
          load data
        </button>
      </Link>
    </div>
  );
};

export default Post;
