function App() {
  return(
    <div>
    <Person
      name="Bob1"
      age={45}
      hobbies={["Granddadding", "hunting", "fishing"]}
    />
    <Person
      name="bob2"
      age={29}
      hobbies={["Fatherhood", "gaming", "Learning React"]}
    />
    <Person
      name="bob3"
      age={10}
      hobbies={["breaking things", "gaming", "sleeping"]}
    />
  </div>
  )}

ReactDOM.render(<App />, document.getElementById("root"))