import './App.css';

function App() {
  let onLogin = async () => {
    let reqOption = {
      method: "POST"
    }
    let JSONData = await fetch("http://localhost:4567/login", reqOption);
    let JSOData = await JSONData.json();
    console.log(JSOData);
  }
  let onSignup = async () => {
    let reqOption = {
      method: "POST"
    }
    let JSONData = await fetch("http://localhost:4567/register", reqOption);
    let JSOData = await JSONData.json();
    console.log(JSOData);
  }
  return (
    <div className="App">
      <button type="button" onClick={() => {
        onLogin();
      }}>Login</button>
      <button type="button" onClick={() => {
        onSignup();
      }}>SignUp</button>
    </div>
  );
}

export default App;
