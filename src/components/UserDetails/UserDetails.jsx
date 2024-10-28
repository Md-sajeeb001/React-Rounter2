import { useLoaderData, useNavigate } from "react-router-dom";

const UserDetails = () => {
  const userDetails = useLoaderData();
  const navigate = useNavigate();
  const handelGoBack = () => {
    navigate(-1);
  };

  console.log(userDetails);
  const { website, phone, email, name, id } = userDetails;

  return (
    <div className="border w-96 mx-auto rounded-lg p-8 m-8">
      <small>id: {id}</small>
      <h2>User Details component</h2>
      <h3>Name: {name}</h3>
      <h4>Email : {email}</h4>
      <h5>Phone: {phone}</h5>
      <p>website: {website}</p>
      <button className="btn" onClick={handelGoBack}>
        Go Back
      </button>
    </div>
  );
};

export default UserDetails;
