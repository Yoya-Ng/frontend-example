import JSX from '../note/JSX';
import Welcome from '../note/Components_Or_Props';
import Clock from '../note/State';


function Main() {
    return (
        <>
            <JSX />
            <Welcome name="Sara" />
            {/* <Welcome name="Cahal" /> */}
            {/* <Welcome name="Edite" /> */}
            <Clock />
        </>
    );
};


export default Main;