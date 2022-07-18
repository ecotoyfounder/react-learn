import React, {useState} from "react";

const Counter = () => {
    const [count, setCount] = useState(0)
    const [tags, setTags] = useState(['tag1', 'tag2', 'tag3'])
    const formatCount = () => {
        return count === 0 ? "empty" : count
    }

    const getBageClasses = () => {
        let classes = "badge rounded-pill m-2 "
        classes += count === 0 ? "bg-warning" : "bg-primary"
        return classes
    }

    const handleIncrement = () => {
        setCount((prevState) => prevState + 1)
    }

    const handleDecrement = () => {
        setCount((prevState) => prevState - 1)
    }

    const handleTagChange = (id) => {
        setTags(prevState => prevState.filter((tag) => tag !== id))
    }
    const renderTags = () => {
        return tags.length !== 0
            ?   tags.map((tag) => (
                    <li
                        key = {tag}
                        className='btn btn-primary btn-sm m-2'
                        onClick={() => handleTagChange(tag)}
                    >
                        {tag}
                    </li>
                ))
            :   'No Tags'
    }

    return (
        <>
            <ul>
                {renderTags()}
            </ul>
            <span className={getBageClasses()}>{formatCount()}</span>
            <button
                className='btn rounded-pill btn-primary btn-sm m-2'
                onClick={handleIncrement}
            >
                +
            </button>
            <button
                className='btn rounded-pill btn-primary btn-sm m-2'
                onClick={handleDecrement}
            >
                -
            </button>
        </>
    )
}

export default Counter