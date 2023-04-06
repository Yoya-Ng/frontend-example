

setInterval(tick, 1000);

const time = new Date().toLocaleTimeString();

function tick() {
    return time;
}

function RenderingElement() {
    const element = (
        <div>
            <h1>Hello, world!</h1>
            <h2>It is {tick()}.</h2>
        </div>
    );

    return (element);
}

export default RenderingElement;