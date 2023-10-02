import './App.css';
import Card from '../Card/Card';

function App() {
  return (
    <div className="App">
      <Card
        name="Kaart titel"
        image='http://placekitten.com/200/300'
        text='lorem ipsum dolores'
      />
      <Card
        name="Tweede kaart"
        image='http://placekitten.com/200/301'
        text='nog meer lorem ipsum tekst'
      />
    </div>
  );
}
export default App;
