import React from 'react'
import { useSelector } from 'react-redux'
import type { RootState } from '../app/store'

export default function Home() {
    const count = useSelector((state: RootState) => state.count);
    return (
        <div>
            <h1>Home Page</h1>

            <div>
                <p>My Count value is {count}</p>
            </div>
        </div>
    )
}
