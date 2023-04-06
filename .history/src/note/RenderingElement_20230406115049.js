
function tick() {
    return (
        <div>
            <h1>Hello, world!</h1>
            <h2>It is {new Date().toLocaleTimeString()}.</h2>
        </div>
    );
}

setInterval(tick, 1000);



function RenderingElement() {
    return tick;
};


export default RenderingElement;