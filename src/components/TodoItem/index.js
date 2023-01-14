// Write your code here

import {Component} from 'react'
import './index.css'

class TodoItem extends Component {
  render() {
    return (
      <div className="container">
        <p className="para">Book the movie for the tomorrow</p>
        <button className="button">Delete</button>
      </div>
    )
  }
}
export default TodoItem
