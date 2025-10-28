import './App.css'
import gitHubLogo from './images/github-logo.png'
import './QuickLinks.css'
import emailLogo from './images/email_logo.png'

function QuickLinks(){
    return (
        <div>
            <div className="quick-links">
                <div className="github">
                    <img className="ghImage" src={gitHubLogo} alt="GitHub Logo"/>
                    <a href="https://github.com/AIgnacio8797" target="_blank" rel="noopener noreferrer">GitHub</a>
                </div>
            </div>

            <div className="quick-links">
                <div className="email">
                    <img className="emImage" src={emailLogo} alt="Email Logo"/>
                    <a href="alexignacio@gmail.com" target="_blank" rel="noopener noreferrer">Email</a>
                </div>
            </div>
        </div>

    )
}

export default QuickLinks