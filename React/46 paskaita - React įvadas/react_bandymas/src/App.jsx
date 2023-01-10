
import "./app.css";

const App = () => {
  return (
    <>
      <header>
        <div className="imageBackground">
          <img src="https://assets.nutritionsociety.ac.nz/layout/sitelogo.png?height=210" alt="logo" />
        </div>
        
        <div className="header-part">
          <ul>
            <li>Home</li>
            <li>Product</li>
            <li>Company</li>
            <li>Contact</li>
          </ul>
        </div>
        <img src="https://images.unsplash.com/photo-1515060939377-d73d9c162a66?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDE2fHx8ZW58MHx8fHw%3D&w=1000&q=80" alt="header" />
      </header>
      <main>
        <section id="middlePart">
          <div>
            <h2>About</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat, dolor non quae quis dolore molestias fugit autem dolorum architecto corporis eum eaque totam, tempora nihil. Quod hic aut eaque sunt?</p>
          </div>
          <div>
            <h2>Company</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat, dolor non quae quis dolore molestias fugit autem dolorum architecto corporis eum eaque totam, tempora nihil. Quod hic aut eaque sunt?</p>
          </div>
          <div>
            <h2>Services</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat, dolor non quae quis dolore molestias fugit autem dolorum architecto corporis eum eaque totam, tempora nihil. Quod hic aut eaque sunt?</p>
          </div>
        </section>
        <section id="lowerPart">
          <div className="firstDiv">
            <h1>Content</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rerum quam consequuntur quibusdam excepturi velit quaerat amet in maiores eum quos. Tempora voluptatibus impedit quibusdam expedita dolorem. Amet saepe voluptatum dignissimos!</p>
            <h2>Sub Header</h2>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Odit voluptatem quia ipsa aspernatur nulla ea a sint deserunt, eaque modi ab nobis! Minima explicabo iusto libero perferendis necessitatibus neque rem veniam, cumque totam, exercitationem blanditiis. Esse quisquam error ipsum magni labore ea! Cum, provident laborum! Eaque laudantium incidunt saepe optio.</p>
          </div>
          <div className="secondDiv">
            <h2>Navigation</h2>
            <div className="navDiv">
              <ul>
                <li>Home</li>
                <li>Product</li>
                <li>Company</li>
                <li>Contact</li>
              </ul>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}


export default App;
