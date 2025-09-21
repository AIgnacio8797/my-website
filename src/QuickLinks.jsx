import './App.css'
import image from './Images/github-logo.png'

function QuickLinks(){
    return (
        <div>
            <div className="quick-links" style={{ display: "flex", justifyContent: "flex-end" }}>
                <div className="git-hub" style={{ display: "flex", alignItems: "center" }}>
                    <img src={image} alt="GitHub Logo"
                    style={{ filter: 'invert(1)', height: '24px', width: '24px', marginRight: '18px'}} />
                    <a href="https://github.com/AIgnacio8797" target="_blank" rel="noopener noreferrer">GitHub</a>
                </div>
            </div>

            <div className="email">
                
            </div>
        </div>

    )
}

export default QuickLinks