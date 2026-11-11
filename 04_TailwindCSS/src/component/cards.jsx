import React from "react";
import "../App.css"
import "../index.css"
//Here I am doing Direct Destructuring
function Card({name,obj,arr}){
    console.log(arr)
    return(
    <div class="max-w-sm rounded overflow-hidden shadow-lg">
  <img class="w-full" src="https://tse1.mm.bing.net/th/id/OIP.VShmcyqipN3wi9aSMGKHHwHaJQ?r=0&rs=1&pid=ImgDetMain&o=7&rm=3" alt="Sunset in the mountains"/>
  <div class="px-6 py-4">
    <div class="font-bold text-xl mb-2">The Coldest {name}</div>
    <p class="text-gray-700 text-base">
      {obj["Color"]} ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.
    </p>
  </div>
  <div class="px-6 pt-4 pb-2">
    <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#photography</span>
    <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#travel</span>
    <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#winter</span>
  </div>
</div>
    )
}

export default Card