import { useSelector } from 'react-redux'
import type { RootState } from '../app/store'

export default function Home() {
    const count = useSelector((state: RootState) => state.count);
    return (
        <div>
            <h1 className='text-6xl text-red-400 bg-pink-500 m-4 p-10'>Home Page</h1>
            <div>
                <p>My Count value is {count}</p>
            </div>
        </div>
    )
}
