import React, {Component} from 'react';
import ReactDom from 'react-dom';
import App from './components/App';

export default class index extends Component {
    render() {
        return (
            <div>
                <App />
            </div>
        )
    }
}

ReactDom.render(
    <App />,
    document.querySelector("#root")
); 