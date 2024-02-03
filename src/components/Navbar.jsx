import reactlogo from "../assets/react.svg"

export default function Navbar() {
    return (
        <>
            <header className="navbar">
                <nav className="nav">
                    <div className="nav-title">
                        <img src={reactlogo} className="nav-logo" alt="react logo" />
                        <h3>React Facts</h3>
                    </div>
                    <div>
                        <div className="toggler">
                            <p className="toggler-light">Light</p>
                            <div className="toggler-slider">
                                <div className="toggle-slider-circle"></div>
                            </div>
                            <p className="toggler-dark">Dark</p>
                        </div>
                    </div>

                </nav>
            </header>
        </>
    )
}