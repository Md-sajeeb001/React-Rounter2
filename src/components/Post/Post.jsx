import { Link } from "react-router-dom";

const Post = ({ post }) => {
  const { id, titel, body } = post;
  return (
    <div className="border rounded-lg p-8 m-8">
      <h2>id: {id}</h2>
      <p>{titel}</p>
      <p>{body}</p>
      <Link to={`/post/${id}`}>
        <button className="btn">load data</button>
      </Link>
    </div>
  );
};

export default Post;
