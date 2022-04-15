  const App = (props) => {
  const course = 'Half Stack application development'
  const part1 = 'Fundamentals of React'
  const exercises1 = 10
  const part2 = 'Using props to pass data'
  const exercises2 = 7
  const part3 = 'State of a component'
  const exercises3 = 14
  const Header = () => {
    return (
    <div>
      <h1>{course}</h1>
    </div>
    )
  }
  const Part = (props) => {
    return (
      <div>
        <p>{props.name}, Exercise:{props.number}</p>
      </div>
    )
  }
  const Content = () => {
    return (
      <div>
        <Part name={part1} number={exercises1} />
        <Part name={part2} number={exercises2} />
        <Part name={part3} number={exercises3} />
      </div>
    )
  }
  const Total = () => {
    return (
      <div>
        <p>Number of exercises: {exercises1 + exercises2 + exercises3} </p>
      </div>
    )
  }


  return (
    <div>
      <Header />
      <Content />
      <Total />
      
    </div>
  )
}

export default App;
