import React, {useState} from 'react'


const Button = (props) => {
  console.log(props);
  return (
    <button onClick={props.handleClick}>{props.text}</button>

  )
}
const Header = (props) => {
  console.log(props);
  return (
    <h1>{props.course}</h1>
  )
}

const Part = (props) => {
  return (
    <p>
    {props.part} {props.exercises}
  </p>
  )
}
const Content = (props) => {
  console.log(props.parts)
  return (
    <>

      {props.parts.map(part => <p>{part.name} {part.exercises}</p>)}

    </>

  )
}

const Total = (props) => {
  let sum = 0;
  for (let i = 0; i < props.parts.length; i++) {
    sum += props.parts[i].exercises;
  }
  return (<p>Number of exercises {sum}</p>
    )
}
const StatisticLine = ({text,value}) => {
  return (
    <p>{text} {value}</p>
  )
}
const Statistics = ({good,neutral,bad,setGood,setNeutral,setBad}) => {
  return (<>

    give feedback
    <Button handleClick={() => setGood(good + 1)} text="good" />
    <Button handleClick={() => setNeutral(neutral + 1)} text="neutral" />
    <Button handleClick={() => setBad(bad + 1)} text="bad" />
    <StatisticLine text="good" value={good}/>
    <StatisticLine text="neutral" value={neutral}/>
    <StatisticLine text="bad" value={bad}/>
    <StatisticLine text="all" value={good + neutral + bad}/>
    <StatisticLine text="average" value={(good + neutral + bad)/3}/>
    <StatisticLine text="positive" value={good/(good+neutral+bad)}/>
  </>)

}
const App = () => {
  const course = 'Half Stack application development'
  const parts = [
    {
      name: 'Fundamentals of React',
      exercises: 10
    },
    {
      name: 'Using props to pass data',
      exercises: 7
    },
    {
      name: 'State of a component',
      exercises: 14
    }
  ]
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  return (
    <div>
        <Header course={course}/>
        <Content parts={parts} />
        <Total parts={parts}/>
          <Statistics good={good} setGood={setGood} neutral={neutral} setNeutral={setNeutral} bad={bad} setBad={setBad}/>


    </div>
  )
}

export default App