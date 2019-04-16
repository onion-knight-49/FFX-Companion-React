import React from 'react'
import styled from 'styled-components'

const SVG = styled.svg`
  position: absolute;
  top: 0px;
  left: 0px;
  width: 85px;
`

const Path = styled.path`
  stroke-dasharray: 669;
  stroke-dashoffset: 669;
  stroke: green;
  stroke-width: 20px;
  fill: ${props => (props.checked ? 'lightgreen' : 'transparent')};
  stroke-linecap: round;
  stroke-dashoffset: ${props => (props.checked ? 0 : 669)};
  transition: all 500ms linear;
`

export default class CheckmarkIn extends React.Component {
  render() {
    return (
      <SVG viewBox="-10 -10 300 300">
        <Path
          checked={this.props.checked}
          d="M86.8,135L193.5,2.9c1.1-1.6,2.5-2.5,4.4-2.8c1.9-0.3,3.6,0.1,5.1,1.2c1.6,1.1,2.5,2.5,2.8,4.3c0.3,1.8-0.1,3.5-1.2,5
c-59.2,105.6-93.8,163.6-103.9,173.8c-12.7,12.7-25.5,12-38.2-2.3L2.2,105.4c-1.7-2.2-2.4-4.7-2.1-7.5c0.3-2.8,1.5-5.1,3.7-6.8
l16.5-13c2.2-1.7,4.7-2.4,7.5-2.1c2.8,0.3,5,1.6,6.5,3.7l43.6,55c1.1,1.2,2.6,1.9,4.4,1.9C84.2,136.6,85.7,136.1,86.8,135z"
        />
      </SVG>
    )
  }
}
