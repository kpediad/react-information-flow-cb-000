import React, { Component } from 'react'
import { getReducedColor } from './randomColorGenerator.js'
import Tier3 from './Tier3'


export default class Tier2 extends Component {

  constructor(props) {
    super(props)
    this.state = {
      childColor: getReducedColor(this.props.color),
    }
  }



  componentWillReceiveProps(nextProps) {
    this.setState({childColor: getReducedColor(nextProps.color)});
  }

  render() {
    // hard coded color values have been added below, though they won't be
    // present in our solution. What should they be replaced with?
    return (
      <div onClick={this.props.handleChildClick} className="tier2" style={{backgroundColor: this.props.color, color: this.props.color}}>
        <Tier3 color={this.state.childColor} handleChildClick={this.props.handleChildClick}/>
        <Tier3 color={this.state.childColor} handleChildClick={this.props.handleChildClick}/>
      </div>
    )
  }
}
