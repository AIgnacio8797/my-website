import QuickLinks from './QuickLinks'
import pfp from './images/pfp.png'

function Hero() {
    return (
        <div className="hero">
            <div className="left-side">
                <img className="profilePic" src={pfp} alt="pfp"></img>
                <div className="words">
                    <h1 className="title">Hi, I'm Alexander Ignacio</h1>
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