import { useState } from "react";

const TextInput = () => {
    const [name, setNmae] = useState("")
    const handleName = (event) => {
        setNmae(event.target.value)
    }

    console.log(name)

    return (
        <input
            onChange={(event) => handleName(event)}
            type="text"
            value={name}
        />
    )
}

export default TextInput;