import Collapsible from "./Collapsible"

export default function Settings() {
    // return (
    //     <nav className="settings">
    //         <button id="settings-btn" className="svg-btn toggle-btn" name="toggle settings" data-target="collapsible-menu">
    //             <svg className="switch" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 11 10">
    //                 <path d="M5,9L5,10L6,10L6,9L7,9L7,7L4,7L4,9L5,9ZM10,9L9,9L9,10L10,10L10,9ZM1,3L1,10L2,10L2,3L3,3L3,1L2,1L2,0L1,0L1,1L0,1L0,3L1,3ZM10,3L10,0L9,0L9,3L8,3L8,5L9,5L9,9L10,9L10,5L11,5L11,3L10,3ZM6,6L5,6L5,7L6,7L6,6ZM6,6L6,0L5,0L5,6L6,6Z" />
    //             </svg>
    //             <svg className="cross" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 14 14">
    //                 <path d="M2,12L0,12L0,14L2,14L2,12ZM14,12L12,12L12,14L14,14L14,12ZM4,10L2,10L2,12L4,12L4,10ZM12,10L10,10L10,12L12,12L12,10ZM6,8L4,8L4,10L6,10L6,8ZM10,8L8,8L8,10L10,10L10,8ZM8,6L6,6L6,8L8,8L8,6ZM6,4L4,4L4,6L6,6L6,4ZM10,4L8,4L8,6L10,6L10,4ZM2,2L2,0L0,0L0,2L2,2L2,4L4,4L4,2L2,2ZM12,2L10,2L10,4L12,4L12,2ZM14,-0L12,-0L12,2L14,2L14,-0Z" />
    //             </svg>
    //         </button>
    //         <ul id="collapsible-menu" className="menu collapsible" data-toggler="settings-btn">
    //             <li className="menu-item">stop moderating</li>
    //             <li className="menu-item">give moderating to...</li>
    //             <li className="menu-item">leave the room</li>
    //         </ul>
    //     </nav>
    // )
    return (
        <nav className="settings">
            <Collapsible id="collapsible-menu" type="settings">
                <li className="menu-item">stop moderating</li>
                <li className="menu-item">give moderating to...</li>
                <li className="menu-item">leave the room</li>
            </Collapsible>
        </nav>
    )
}