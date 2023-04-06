


function RenderingElement() {
    const element = (
        <div>
            <h1>Hello, world!</h1>
            <h2>It is {new Date().toLocaleTimeString()}.</h2>
        </div>
    );
    setInterval(element, 1000);

    return (element);
}

export default RenderingElement;