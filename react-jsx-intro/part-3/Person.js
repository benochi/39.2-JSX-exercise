function Person (props){
  let canVote = props.age >= 18 ? "please go vote!" : "you must be 18!"
  let hobbies = props.hobbies.map(hobby => <li>{hobby}</li>);

  return (
    <div>
      <p>Learn some information about this person</p>
      <ul>
        <p>Name: {props.name}</p>
        <p>Age: {props.age}</p>
        <ul>Hobbies: {hobbies}</ul>
      </ul>
    </div>
  );
}