function reactRender(reactElement,container){
     /*
    const domElement = document.createElement(reactElement.type)
    domElement.innerHTML = reactElement.children
    domElement.setAttribute('href', reactElement.props.href)
    domElement.setAttribute('target', reactElement.props.target)

    container.appendChild(domElement)
    */

    const domElement = document.createElement(reactElement.type)
    domElement.innerHTML = reactElement.children
    for (const prop in reactElement.props) {
        if (prop === 'children') continue;
        domElement.setAttribute(prop, reactElement.props[prop])
    }
    container.appendChild(domElement)
}

const reactElement ={
    type :"a",
    props:{
        href: "http://google.com",
        type : "_blank",
    },
    children:"click here",
}
const container=document.querySelector('#root');
reactRender(reactElement, container)


/*
how react Render ?

https://dev.to/mateo_garcia/understanding-rendering-in-react-i5i

https://github.com/acdlite/react-fiber-architecture

*/