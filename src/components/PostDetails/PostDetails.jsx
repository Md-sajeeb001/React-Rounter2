import { useLoaderData } from "react-router-dom";

const PostDetails = () => {
  const postData = useLoaderData();
  const { title, body, id } = postData;
  return (
    <div className="border w-96 rounded-lg p-8 mx-auto">
      <small>id: {id}</small>
      <h2>Post Details title : {title}</h2>
      <p>Post Body : {body}</p>
    </div>
  );
};

export default PostDetails;
