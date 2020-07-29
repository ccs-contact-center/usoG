import React, { Component } from 'react'
import { OverlayTrigger, Tooltip,Badge } from 'react-bootstrap'

class Nota extends Component {
  render() {
    return (
      <div>
        {['top'].map(placement => (
          <>
            <OverlayTrigger
              key={placement}
              placement={placement}
              overlay={
                <Tooltip id={`nota1-${placement}`}>
                  {this.props.content1}
                </Tooltip>
              }
            >
              <Badge  variant="secondary">
                  {this.props.title1}
              </Badge >
            </OverlayTrigger>{' '}
          </>
        ))}
      </div>
    )
  }
}

export default Nota
