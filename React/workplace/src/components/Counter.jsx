import { useState, useEffect } from "react";

const Counter = () => {
    const [count, setCount] = useState(0)
    const [count2, setCount2] = useState(0)

    const countUp = () => {
        setCount(prevState => prevState + 1)
    }
    const countDown = () => {
        setCount(prevState => prevState -1)
    }

    const count2Up = () => {
        setCount2(prevState => prevState + 1)
    }
    const count2Down = () => {
        setCount2(prevState => prevState -1)
    }

    useEffect(() => {
        console.log("再レンダリングされた後に呼び出す.", count)
        return () => {
            console.log("再レンダリングされる前に呼び出す")
        }
    })

    useEffect(() => {
        console.log("初回レンダリング count is ...", count)
    }, [])

    useEffect(() => {
        console.log("トリガーレンダリング count is ...", count)
    }, [count])

    return (
        <div>
            <p>現在のカウント数：{count}</p>
            <button onClick={countUp}>up</button>
            <button onClick={countDown}>down</button>
            <button onClick={count2Up}>up2</button>
            <button onClick={count2Down}>down2</button>
        </div>
    )
}

export default Counter;