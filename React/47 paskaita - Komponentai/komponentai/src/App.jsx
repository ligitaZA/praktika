
import './App.css';
import Header from './components/Header'
import List from './components/List'
function App() {
  return (
    <main>
       <Header />
  <div className="klientai">
    <h2>Klientų sąrašas</h2>
          <List
            data = {
              ['Jonas', 'Kamilė', 'Lukas',
            'Alicija', 'Rimgaudas']
            }
          />
    </div>
    <div className='klientai'>
      <h2>Prekių sąrašas</h2>
      <List
      data ={
        ['Duona', 'Pienas', 'Sūris', 'Sviestas', 'Kumpis']
      }/>
    </div>
    </main>



    
  );
}

export default App;
