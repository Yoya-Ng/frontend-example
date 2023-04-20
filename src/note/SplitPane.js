import React from 'react'
import './SplitPane.css';

function Contacts() {
    return <div className="Contacts" />;
}

function Chat() {
    return <div className="Chat" />;
}

function SplitPane(props) {
    return (
        <div className="SplitPane">
            <div className="SplitPane-left">
                test
                {props.left}
            </div>
            <div className="SplitPane-right">
                test2
                {props.right}
            </div>
        </div>
    );
}

export default class SplitPaneTest extends React.Component {

    render() {
        return (
            <SplitPane
                left={
                    <Contacts />
                }
                right={
                    <Chat />
                } />
        );
    }
}