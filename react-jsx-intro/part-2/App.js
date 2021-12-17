function App() {
  return(
  <div>
    <Tweet
      name="Bob1"
      username="bob1"
      date={new Date().toDateString()}
      message="This is my TWEET!"
     />
     <Tweet
      name="Bob1"
      username="bob2"
      date={new Date().toDateString()}
      message="This is my TWEET!"
     />
     <Tweet
      name="Bob3"
      username="bob3"
      date={new Date().toDateString()}
      message="This is my TWEET!"
     />
  </div>
  )}

ReactDOM.render(<App />, document.getElementById("root"))