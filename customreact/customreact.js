function customRender(reactElement, container){
    const domElement= document.createElement(reactElement.type)
    domElement.innerHtml= reactElement.children
    domElement.setAttribute('href',reactElement.props.href)
    domElement.setAttribute('target',reactElement.props.target)
    container.appendChild(domElement)
}
//script injected in html
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
