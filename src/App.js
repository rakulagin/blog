import Form from "./components/Form";
import MessageList from "./components/MessageList";
import Auth from './components/Auth/Auth'

function App() {
  return (
    <div className="App">
      <header>
          <Auth/>
          <Form />
          <MessageList />
      </header>
    </div>
  );
}

export default App;
