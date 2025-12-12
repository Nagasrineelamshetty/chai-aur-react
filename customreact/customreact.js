function customRender(reactElement, container){
    // const domElement= document.createElement(reactElement.type)
    // domElement.innerHTML= reactElement.children
    // domElement.setAttribute('href',reactElement.props.href)
    // domElement.setAttribute('target',reactElement.props.target)
    // container.appendChild(domElement) 
    //creates anchor tag in for the link mentioned
    const domElement= document.createElement(reactElement.type)
    domElement.innerHTML= reactElement.children
    for (const prop in reactElement.props) {
        if (prop==='children') continue;
        domElement.setAttribute(prop,reactElement.props[prop])
            
    }
    container.appendChild(domElement)
}
//script injected in html(tree graph of dom element)
const reactElement= {
    type: 'a',
    props: {
        href: 'https://google.com',
        target: '_blank'
    },
    children: 'click me to visit google'
}
const mainContainer= document.querySelector('#root')
//add react element to root
customRender(reactElement, mainContainer)
