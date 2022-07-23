import React, {useState} from "react";

const Counter = (props) => {
    const {value} = props

    const formatCount = () => {
        return value === 0 ? "empty" : value
    }

    const getBageClasses = () => {
        let classes = "badge rounded-pill m-2 "
        classes += value === 0 ? "bg-warning" : "bg-primary"
        return classes
    }

    return (
        <div>
            <span> {props.name} </span>
            <span className={getBageClasses()}>{formatCount()}</span>
            <button
                className='btn rounded-pill btn-primary btn-sm m-2'
                onClick={() => props.onIncrement(props.id)}
            >
                +
            </button>
            <button
                className='btn rounded-pill btn-primary btn-sm m-2'
                onClick={() => props.onDecrement(props.id)}
            >
                -
            </button>
            <button className="btn btn-danger btn-sm m-2"
                    onClick = {() => props.onDelete(props.id)}
            >
                Delete
            <
            /button>
        </div>
    )
}

export default Counter