import QuickLinks from './QuickLinks'

function Hero() {
    return (
        <div className="hero">
            <div className="left-side">
                <div>
                    <h1 className="title">Hi, I'm Alexander Ignacio</h1>
                </div>

                <div className="messsage-container">
                    <h3 className="message">Welcome to my website</h3>
                </div>
            </div>


            <div className="right-side">
                <QuickLinks/>
            </div>

        </div>

    )
}

export default Hero;