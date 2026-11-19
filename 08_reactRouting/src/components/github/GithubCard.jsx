import { useState , useEffect } from "react";
import { useLoaderData } from "react-router";
function GithubCard() {

//   let [user , setUser] = useState({})

//   useEffect(()=>{
//     fetch("https://api.github.com/users/mewillsh").
//     then((curr)=>curr.json())
//     .then((curr)=>{
//         console.log(curr)
//         setUser(curr)
//     })
//   },[])

  let user = useLoaderData()
  return (
    <div className="max-w-md mx-auto overflow-hidden rounded-3xl bg-white shadow-xl border border-gray-200">
      <div className="bg-gradient-to-r from-gray-900 via-gray-800 to-black p-6 flex items-center gap-4">
        <img
          src={user["avatar_url"]}
          alt={user.login}
          className="w-24 h-24 rounded-full border-4 border-white"
        />

        <div>
          <h1 className="text-2xl font-bold text-white">
            {user.name}
          </h1>

          <p className="text-gray-300">
            @{user.login}
          </p>
        </div>
      </div>

      <div className="p-6 space-y-4">
        <a
          href={user.html_url}
          target="_blank"
          rel="noreferrer"
          className="text-blue-600 hover:underline block"
        >
          Visit GitHub Profile
        </a>

        <div className="grid grid-cols-3 gap-4 text-center">
          <div className="bg-orange-50 rounded-xl p-3">
            <p className="text-2xl font-bold text-orange-600">
              {user.public_repos}
            </p>
            <p className="text-sm text-gray-600">Repos</p>
          </div>

          <div className="bg-green-50 rounded-xl p-3">
            <p className="text-2xl font-bold text-green-600">
              {user.followers}
            </p>
            <p className="text-sm text-gray-600">Followers</p>
          </div>

          <div className="bg-blue-50 rounded-xl p-3">
            <p className="text-2xl font-bold text-blue-600">
              {user.following}
            </p>
            <p className="text-sm text-gray-600">Following</p>
          </div>
        </div>

        <div className="space-y-2 text-gray-700">
          <p>
            <span className="font-semibold">User ID:</span>
            {" "}
            {user.id}
          </p>

          <p>
            <span className="font-semibold">Type:</span>
            {" "}
            {user.type}
          </p>

          <p>
            <span className="font-semibold">Account Created:</span>
            {" "}
            {new Date(user.created_at).toLocaleDateString()}
          </p>

          <p>
            <span className="font-semibold">Last Updated:</span>
            {" "}
            {new Date(user.updated_at).toLocaleDateString()}
          </p>
        </div>
      </div>
    </div>
  );
}

export async function dataLoader(params) {
    let result = await fetch("https://api.github.com/users/mewillsh")
    return result.json()
}

export default GithubCard