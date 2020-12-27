import React from 'react'
import ReactDOM from 'react-dom'

export default class Entry extends React.Component{
  public render() {
    return (
      <div>
        Hello
      </div>
    )
  }
}



const root = document.getElementById('app-root')

ReactDOM.render(<Entry/>, root)

