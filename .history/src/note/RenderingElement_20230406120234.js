

setInterval(tick, 1000);

function tick() {
    const element = (
        <div>
            <h1>Hello, world!</h1>
            <h2>It is {new Date().toLocaleTimeString()}.</h2>
        </div>
    );
    return (element);
}

function RenderingElement() {
    return <>
    {tick}
    </>;
};


export default RenderingElement;