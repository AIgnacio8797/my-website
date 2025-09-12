import './App.css'

import Hero from './Hero'


function App() {
  return (
    <div className="App">
      <section className="hero-container">
        <Hero/>
      </section>

      <section id="intro" className="intro">
        <h2 className="about-title">About Me</h2>
        <p>
          I’m a developer interested in building cool projects and learning new
          technologies. This section is my short introduction.
        </p>
      </section>


    </div>
  )
}
export default App
