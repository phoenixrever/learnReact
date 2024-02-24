import React, { Component } from 'react'

export default class Message extends Component {
  render() {
    return (
      <ul className="list-group">
      <li className="list-group-item">Message</li>
      <li className="list-group-item">A second item</li>
      <li className="list-group-item">A third item</li>
      <li className="list-group-item">A fourth item</li>
      <li className="list-group-item">And a fifth one</li>
    </ul>
    )
  }
}