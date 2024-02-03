/* eslint-disable react/prop-types */
import reactlogo from "../assets/react.svg"

export default function Navbar(props) {

    function handleClick(){
        props.updateThemeMode(prvMode => !prvMode)
    }
    const theme = props.themeMode === true ? "dark" : ""
    return (
            <header className="navbar">
                <nav className={`nav ${theme}`}>
                    <div className="nav-title">
                        <img src={reactlogo} className="nav-logo" alt="react logo" />
                        <h3>React Facts</h3>
                    </div>
                    <div>
                        <div className="toggler">
                            <p className={`toggler-light ${theme}`}>Light</p>
                            <div className={`toggler-slider ${theme}`} onClick={handleClick}>
                                <div className={`toggle-slider-circle ${theme}`}></div>
                            </div>
                            <p className={`toggler-dark ${theme}`}>Dark</p>
                        </div>
                    </div>

                </nav>
            </header>
    )
}