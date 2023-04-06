

setInterval(element, 1000);

const element = (
    <div>
      <h1>Hello, world!</h1>
      <h2>It is {new Date().toLocaleTimeString()}.</h2>
    </div>
  );
function RenderingElement() {
    return <element></element>;
};


export default RenderingElement;