import { useState } from 'react'
import './contador.css'

function App() {
    const [count, setCount] = useState(0)

    return (
        <>

            <div className="card">
                <button onClick={() => setCount((count) => count + 1)}>
                    +
                </button>
            </div>
            <div className="card">
                <button>
                    {count}
                </button>
            </div>
            <div className="card">
                <button onClick={() => setCount((count) => count - 1)}>
                    -
                </button>
            </div>
        </>
    )
}

export default App