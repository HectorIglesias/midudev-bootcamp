import React from 'react'
import ReactDOM from 'react-dom'

const Header = ({course}) => {
  return <h1>{course}</h1>
}

const Content = ({part}, {exercise}) => {
  return <p>{part} {exercise}</p>
}

const Total = ({exercises}) => {
  return <p>Number of exercises {exercises}</p>
}

const App = () => {
  const course = {
    name: 'Half Stack application development',
    parts: [
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
  }

  return (
    <div>
      <Header course= {course.name}/>
      <Content part= {course.parts[0].name} exercises= {course.parts[0].exercises} />
      <Content part= {course.parts[1].name} exercises= {course.parts[1].exercises} />
      <Content part= {course.parts[2].name} exercises= {course.parts[2].exercises} />
      <Total exercises= {course.parts[0].exercises + course.parts[1].exercises + course.parts[2].exercises} />
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))