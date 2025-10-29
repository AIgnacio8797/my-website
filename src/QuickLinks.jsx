import './App.css'
import gitHubLogo from './images/github-logo.png'
import './QuickLinks.css'
import emailLogo from './images/email_logo.png'
import linkedinLogo from './images/linkedin-logo.png'

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
                <div className="linkedin">
                    <img className="linkedinLogo" src={linkedinLogo} alt="Linkedin Logo"/>
                    <a href="www.linkedin.com/in/alex-n-ignacio" target="_blank" rel="noopener noreferrer">Linkedin</a>
                </div>
            </div>
        </div>

    )
}

export default QuickLinks