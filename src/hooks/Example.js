import React, { useState, useEffect } from 'react';

export default function Example() {
    const [count, setCount] = useState(0);
    var fruitStateVariable = useState('banana'); // 回傳一對值
    var fruit = fruitStateVariable[0]; // 第一個值
    var setFruit = fruitStateVariable[1]; // 第二個值

    // 與 componentDidMount 和 componentDidUpdate 類似：
    useEffect(() => {
        // 使用瀏覽器 API 更新文件標題
        document.title = `You clicked ${count} times`;
    }, [count]); // 僅在計數更改時才重新執行 effect


    return (
        <div>
            <p>You clicked {count} times</p>
            <button onClick={() => setCount(count + 1)}>
                Click me
            </button>
        </div>
    );
}
