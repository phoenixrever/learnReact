import React, {Component} from 'react';

class Demo extends Component {
    state={
        count:0
    };

    add=()=>{
        const {count} =this.state;
      this.setState({count:count+1},()=>{
          console.log(this.state);
      })
    };

    render() {
        const {count} =this.state;
        return (
            <div>
                <h1>COUNT:{count}</h1>
                <button onClick={this.add}>click</button>
            </div>
        );
    }
}

export default Demo;