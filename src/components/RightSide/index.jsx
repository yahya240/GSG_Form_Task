import React, { Component } from 'react'
import RightStructureContainer from '../RightStructureContainer'
import Form from '../Form'
import ArrowBack from '../ArrowBack'
import './style.css'

export default class RightSide extends Component {
  render() {
    return (
      <RightStructureContainer  header={<ArrowBack />} type={this.props.type}>
        <Form login={this.props.login} type={this.props.type} />
      </RightStructureContainer>
    )
  }
}
