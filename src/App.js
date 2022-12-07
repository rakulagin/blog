import Form from "./components/Form";
import MessageList from "./components/MessageList";
import Auth from './components/Auth/Auth'
import Registration from "./components/Auth/Registration";

function App() {
  return (
    <div className="App">
      <header>
          <Registration/>
          {/*<Auth/>*/}
          {/*<Form />*/}
          {/*<MessageList />*/}
      </header>
    </div>
  );
}

export default App;
