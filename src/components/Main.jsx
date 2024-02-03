/* eslint-disable react/prop-types */
export default function Main(props) {
    return (
        <div className={`main-container ${props.themeMode === true ? "dark" : "" }`}>
            <h1>Fun facts about React</h1>
            <ul>
                <li>Was first released in 2013</li>
                <li>Was originaly created by Jordan Walke</li>
                <li>Has well over 100K stars on Github</li>
                <li>is maintained by Facebook</li>
                <li>Powers thousands of enterprise apps, including mobile apps</li>
            </ul>
        </div>
    )
}