// React Custom Render Code

function addElement(reactElement,rootTag){
    let element = document.createElement(reactElement["tag"])
    element.innerHTML = reactElement["childern"]
    for(let key in reactElement["prop"]){
        if(key === "childern") continue;
        element.setAttribute(key,reactElement["prop"][key])
    }
    rootTag.appendChild(element)
}
let reactElement = {
    "tag":"a",
    "childern":"This is Custom tag",
    "prop":{
        "href":"https://www.google.com",
        "id":"anchor"
    }
}
let rootTag = document.querySelector("#root")
addElement(reactElement,rootTag)