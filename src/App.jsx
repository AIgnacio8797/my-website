import './App.css'
import AccountCircleIcon from '@mui/icons-material/AccountCircle'

function App() {
  return (
    <div className="container">
      <div className='title' >
          <h1>Hi, I'm Alex Ignacio</h1>
      </div>

      <div className="message">
        <h3>Welcome to my website</h3>
      </div>

      <div className="icon-container">
        <div className="AccountCircleIcon">
          <AccountCircleIcon sx={{ fontSize: 140 }}/>
        </div>
      </div>

    </div>

  );
}

export default App
