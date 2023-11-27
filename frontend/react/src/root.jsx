import { Outlet } from 'react-router-dom'

export default function Root() {
    return (
        <>
            <header>
                <svg id="logo" width="64px" height="64px" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" xmlns: serif="http://www.serif.com/" viewBox="0 0 9 11" version="1.1" xmlSpace="preserve" style={{ fillRule: 'evenodd', clipRule: 'evenodd', strokeLinejoin: 'round', strokeMiterlimit: 2 }} >
                    <g>
                        <path d="M6.997,0L6.996,-0L8.008,0L8.004,1.004L9,1.002C8.999,2.335 9,5 9,5L8,5L8,6L9,6C9,6 8.999,9.626 9,11L1,11L1,6L0,6L0,5L2,5L2,10L3,10L3,7L4,7L4,6L5,6L5,5L4,5L4,1L5,1L5,0L5.999,0L5.998,2L7.001,2.001C7.001,2.001 7.007,0.068 6.997,0ZM6,3L5,3L5,4L6,4L6,3ZM8,3L7,3L7,4L8,4L8,3Z" />
                    </g>
                </svg>
            </header >

            <main>
                <Outlet />
            </main>
        </>

    )
}