import { Component } from 'react';

class ErrorBoundary extends Component {
    state = {
        hasError: false
    }
    componentDidCatch(){
        this.setState({
            hasError: true
        });
    }
    render(){
        return this.state.hasError ? <h2>Some error</h2> : this.props.children;
    }
}

export default ErrorBoundary;