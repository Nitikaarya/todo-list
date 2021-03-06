import React, { Component } from 'react'

export default class TodoItem extends Component{
    
    render(){
        const {title,handleDelete,handleUpdate} = this.props
        return(
            <li className="list-group-item text-capitalize d-flex
            justify-content-between my-2">  
            <h6>{title}</h6>
            <div className="todo-icon" >
                <span className="mx-2 text-success" onClick={handleUpdate}>
                    <i className="fas fa-pen"/>
                </span>
                {/* <button onClick={handleUpdate}>update</button> */}
                {/* <button onClick={handleDelete}>delete</button> */}
                <span className="mx-2 text-danger" onClick={handleDelete}>
                    <i className="fas fa-trash"/> 
                </span>
            </div>
         </li>
        )
    }
}
