function App() {
  return(
  <div>
    <FirstComponent />
    <SecondComponent name="testName" />
  </div>
  )}

ReactDOM.render(<App />, document.getElementById("root"))