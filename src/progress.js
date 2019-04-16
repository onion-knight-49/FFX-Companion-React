import React from 'react'
import styled from 'styled-components'

const SVG = styled.svg`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
`

const Circle = styled.circle`
  stroke: ${props => props.color || 'red'};
  stroke-width: ${props => props.width || 5}px;
  fill: transparent;
  stroke-dasharray: ${props => props.circleLength};
  stroke-dashoffset: ${props =>
    props.circleLength - props.progress * props.circleLength};
  transition: all 300ms;
  transform: rotate(270deg);
  transform-origin: 50% 50%;
`

const ProgressWrapper = styled.div`
  margin-left: 20px;
  width: ${props => props.size}px;
  height: ${props => props.size}px;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
`

export default class Progress extends React.Component {
  state = { circleLength: 0 }

  ref = React.createRef()

  componentDidMount() {
    const circleLength = Math.ceil(this.ref.current.getTotalLength()) + 1
    this.setState({ circleLength })
  }

  render() {
    const { progress, color, size, width, children } = this.props
    return (
      <ProgressWrapper size={size + width}>
        <SVG>
          <Circle
            ref={this.ref}
            cx={(size + width) / 2}
            cy={(size + width) / 2}
            r={size / 2}
            color={color}
            progress={progress}
            width={width}
            circleLength={this.state.circleLength}
          />
        </SVG>
        {children}
      </ProgressWrapper>
    )
  }
}
