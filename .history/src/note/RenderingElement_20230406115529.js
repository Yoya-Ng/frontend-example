

setInterval(RenderingElement, 1000);

const element  = new Date().toLocaleTimeString(); 

function RenderingElement() {
    return (
        <div>
            <h1>Hello, world!</h1>
            <h2>It is {element}.</h2>
        </div>
    );
};


export default RenderingElement;