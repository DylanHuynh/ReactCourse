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
      <h1>{props.name}</h1>
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
    console.log(props.parts);
    const mappedVals = props.parts.map(dict => dict.exercises)
    console.log(mappedVals.reduce((s, p) => s+p))
    sum = mappedVals.reduce((s, p) => s+p)
    return (<p>Number of exercises {sum}</p>
      )
  }
  const StatisticLine = ({text,value}) => {
    return (
      <p>{text} {value}</p>
    )
  }




  const Course = ({courses}) => {
    const mappedCourses = courses.map(course =>
      <>
        <Header name={course.name}/>
        <Content parts={course.parts}/>
        <Total parts={course.parts}/>
      </>
    )
    return (
      <>
        {mappedCourses}
      </>
    )
  }

  export default Course