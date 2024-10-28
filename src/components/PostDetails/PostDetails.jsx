import { useLoaderData, useNavigate } from "react-router-dom";

const PostDetails = () => {
  const postData = useLoaderData();
  const { title, body, id } = postData;

  const navigate = useNavigate();
  const handelGoBack = () => {
    navigate(-1);
  };
  return (
    <div className="border w-96 rounded-lg p-8 mx-auto">
      <small>id: {id}</small>
      <h2>Post Details title : {title}</h2>
      <p>Post Body : {body}</p>
      <button onClick={handelGoBack} className="btn">Go Back</button>
    </div>
  );
};

export default PostDetails;
