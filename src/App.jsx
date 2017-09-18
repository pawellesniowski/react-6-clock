import React, { Component } from 'react';

class App extends Component {
    
    constructor(props){
        super(props);
        this.state = {
                hours: 0,
                min: 0,
                sec: 0
        }
    }

    componentDidMount(){
        this.intervalSet = setInterval(()=>{
            this.setState({
                hours: new Date().getHours(),
                min: new Date().getMinutes(),
                sec: new Date().getSeconds()
            })
        }, 1000);
    };

    addZero = num => num<10? "0"+num : num;
    
    render(){
        return <div>Clock:  {this.addZero(this.state.hours)} : {this.addZero(this.state.min)} : {this.addZero(this.state.sec)}</div>
    }
}

export default App;