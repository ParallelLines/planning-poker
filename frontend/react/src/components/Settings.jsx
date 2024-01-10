import Collapsible from './Collapsible'
import IconCross from './IconCross'
import IconSettings from './IconSettings'

export default function Settings() {
    return (
        <nav className="settings">
            <Collapsible
                wrapperId="collapsible-menu"
                wrapperClass="menu collapsible"
                togglerId="settings-btn"
                togglerInsides={<><IconSettings /> <IconCross /></>}
            >
                <li className="menu-item">stop moderating</li>
                <li className="menu-item">give moderating to...</li>
                <li className="menu-item">leave the room</li>
            </Collapsible>
        </nav>
    )
}