import { useLoaderData } from "react-router-dom";

const UserDetails = () => {
    const userDetails = useLoaderData();
    console.log(userDetails)
    const {website, phone, email, name, id} = userDetails;

    return (
        <div className="border w-96 mx-auto rounded-lg p-8 m-8">
            <small>id: {id}</small>
            <h2>User Details component</h2>  
            <h3>Name: {name}</h3> 
            <h4>Email : {email}</h4>
            <h5>Phone: {phone}</h5>
            <p>website: {website}</p>         
        </div>
    );
};

export default UserDetails;