import React, { Component } from 'react';

class Ninjas extends Component {
    render() {
        
        //This allows us to cycle through a list of data that has the same properties 
        const { ninjas } = this.props;
        //map methods goes through each one
        const ninjaList = ninjas.map(ninja => {
            return (
    <div className = "ninja" key = {ninja.id}>
         <div>Name: {ninja.name}</div>
         <div>Age: {ninja.age}</div>
         <div> Belt: {ninja.belt}</div>
         </div>
            )
        })

        return (
            <div class = "ninja-list">
            {ninjaList}
            </div>

        )
    }
}
export default Ninjas
