
import './App.css';
// import Header from './components/Header'
// import List from './components/List'
import Porfolio from './components/Portfolio';
import TaskPortfolio from './components/Task_Cards';
import TaskHeader from './components/Task_header';


function App() {
  return (
    <main>
      {/* <section id='classWork'>
        <Header />
        <div className="klientai">
          <h2>Klientų sąrašas</h2>
          <List
            data={
              ['Jonas', 'Kamilė', 'Lukas',
                'Alicija', 'Rimgaudas']
            }
          />
        </div>
        <div className='klientai'>
          <h2>Prekių sąrašas</h2>
          <List
            data={
              ['Duona', 'Pienas', 'Sūris', 'Sviestas', 'Kumpis']
            } />
        </div>
      </section> */}

      <header id='header'>
        <TaskHeader />
      </header>
      <section id='portfolio'>
        <Porfolio/>
          <TaskPortfolio
            data={
              [
                {
                  src: 'https://images.unsplash.com/photo-1585409677983-0f6c41ca9c3b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8M3x8fGVufDB8fHx8&w=1000&q=80',
                  info: 'Add information about the image'
                },
                {
                  src: 'https://images.unsplash.com/photo-1471513671800-b09c87e1497c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTZ8fG91cmRvb3J8ZW58MHx8MHx8&w=1000&q=80',
                  info: 'Add information about the image'
                },
                {
                  src: 'https://brightspotcdn.byu.edu/dims4/default/5cfeba6/2147483647/strip/true/crop/5765x3843+0+0/resize/840x560!/quality/90/?url=https%3A%2F%2Fbrigham-young-brightspot.s3.amazonaws.com%2F04%2F3d%2F816116054d02899b1a1496f60361%2F20190329-img-3217-copy.jpg',
                  info: 'Add information about the image'
                },
                {
                  src: 'https://images.unsplash.com/photo-1470058869958-2a77ade41c02?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8anVuZ2xlfGVufDB8fDB8fA%3D%3D&w=1000&q=80',
                  info: 'Add information about the image'
                },
                {
                  src: 'https://images.unsplash.com/photo-1455577380025-4321f1e1dca7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8cml2ZXJ8ZW58MHx8MHx8&w=1000&q=80',
                  info: 'Add information about the image'
                },
                {
                  src: 'https://static01.nyt.com/images/2022/11/20/magazine/20mag-lor/20mag-lor-superJumbo.jpg',
                  info: 'Add information about the image'
                }
              ]
            }
          />
      </section>
    </main>

  );
}

export default App;
