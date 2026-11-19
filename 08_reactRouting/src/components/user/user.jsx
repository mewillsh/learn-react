import { useParams } from "react-router";

function User() {
  let {userID} = useParams();
  userID = userID ? userID : "UserID is not Provided"
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="px-10 py-8 bg-white rounded-3xl shadow-xl border border-gray-200">
        <h1 className="text-5xl font-extrabold text-center bg-gradient-to-r from-orange-500 to-pink-500 bg-clip-text text-transparent">
          USERNAME : {userID}
        </h1>
      </div>
    </div>
  );
}

export default User;