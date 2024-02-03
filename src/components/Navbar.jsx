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
                        <h4 className="nav-text">React Course - Project 1</h4>
                    </div>

                </nav>
            </header>
        </>
    )
}