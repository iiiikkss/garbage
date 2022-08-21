import {Component} from "react";

export class Count extends Component{
    state = {
        count: 1,
    }

    hendleClick =() =>  {
        this.setState({count: this.state.count + 1})
    }
    render(){
        return <>
        <p>Count props: {this.props.count}</p>
        <p>Count state: {this.state.count}</p>
        <button type="button" onClick={this.hendleClick}> click</button>
        </>
    }
}