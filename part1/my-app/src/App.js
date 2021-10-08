import React, {useState} from 'react'
import Course from './Course.js'

const Button = (props) => {
  console.log(props);
  return (
    <button onClick={props.handleClick}>{props.text}</button>

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
  const courses = [
    {
      name: 'Half Stack application development',
      id: 1,
      parts: [
        {
          name: 'Fundamentals of React',
          exercises: 10,
          id: 1
        },
        {
          name: 'Using props to pass data',
          exercises: 7,
          id: 2
        },
        {
          name: 'State of a component',
          exercises: 14,
          id: 3
        },
        {
          name: 'Redux',
          exercises: 11,
          id: 4
        }
      ]
    },
    {
      name: 'Node.js',
      id: 2,
      parts: [
        {
          name: 'Routing',
          exercises: 3,
          id: 1
        },
        {
          name: 'Middlewares',
          exercises: 7,
          id: 2
        }
      ]
    }
  ]
  // const [good, setGood] = useState(0)
  // const [neutral, setNeutral] = useState(0)
  // const [bad, setBad] = useState(0)

  return (
    <div>
        <Course courses={courses}/>
        {/* <Content parts={parts} />
        <Total parts={parts}/> */}
        {/* <Statistics good={good} setGood={setGood} neutral={neutral} setNeutral={setNeutral} bad={bad} setBad={setBad}/> */}


    </div>
  )
}

export default App