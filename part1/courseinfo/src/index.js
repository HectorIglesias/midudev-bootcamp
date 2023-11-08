import React from 'react'
import ReactDOM from 'react-dom'

const Header = ({course}) => {
  return <h1>{course}</h1>
}

/*const Content = (props) => {
  return <p>{props.part}: {props.exercise}</p>
}

(esto en el componente App)
<Content part= {course.parts[0].name} exercise= {course.parts[0].exercises} />
      <Content part= {course.parts[1].name} exercise= {course.parts[1].exercises} />
      <Content part= {course.parts[2].name} exercise= {course.parts[2].exercises} />

*/
const Part = (props) => {
  return <p>{props.part}: {props.exercise}</p>
}


const Content = (props) => {
  return (
    <div>
      <Part part= {props.parts[0].name} exercise= {props.parts[0].exercises}/>
      <Part part= {props.parts[1].name} exercise= {props.parts[1].exercises}/>
      <Part part= {props.parts[2].name} exercise= {props.parts[2].exercises} />
    </div>
  )
}

const Total = ({total_exercises}) => {
  return <p>Number of exercises: {total_exercises}</p>
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
      <Content parts = {course.parts} />
      <Total total_exercises= {course.parts[0].exercises + course.parts[1].exercises + course.parts[2].exercises} />
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))