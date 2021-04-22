import React, { Component } from 'react';
class Counter extends Component {
      
    render() {
    return (
     <div>
     <div className="row">
         <div className="col-1">

         <span className={this.getBadgeClass()}>{this.formatCount()}</span>
         </div>
         <div className="col">

         <button 
        onClick={() => this.props.onIncrement(this.props.counter)}
        className="btn btn-secondary btn-sm"
    >
        + 
       </button>

       <button 
        onClick={() => this.props.onDecrement(this.props.counter)}
        className="btn btn-secondary btn-sm m-2"
        disabled={this.props.counter.value === 0 ? "disabled" : ""}
    >
    -
       </button>

       <button 
       onClick={() => this.props.onDelete(this.props.counter.id)} 
       className="btn btn-danger btn-sm "
       >
        x
       </button>

         </div>
     </div>
        
       </div>

        );
    }

    getBadgeClass() {
        let Classes = "badge m-2 badge-";
        Classes += this.props.counter.value === 0 ? "warning" : "primary";
        return Classes;
    }

    formatCount() {
        const {value: count} = this.props.counter;
        return count === 0 ? 'Zero' : count;
    }
}
 
export default Counter;