import React, {Component} from 'react';
import CountUp from 'react-countup';
import './App.css';
import VisibilitySensor from 'react-visibility-sensor';

const style = {
  componentName: {},
  col: {},
  countup: {},
};

export default class Counter extends Component {
  state = {
    didViewCountUp: false
  };


  onVisibilityChange = isVisible => {
    if (isVisible) {
      this.setState({didViewCountUp: true});
    }
  }

render() {
 return (
    <div className="row">
        <div className="col-lg-3 col-md-6 col-sm-6">
          <div className="counter-item text-center mb-5 mb-lg-0">
            <h3 className="mb-0"><span className="counter-stat font-weight-bold">
                <VisibilitySensor onChange={this.onVisibilityChange} offset={{top:10}} delayedCall>
                <CountUp className={style.countup} decimals={1} start={0} end={this.state.didViewCountUp ? 1730 : 0}
                 duration={3} /></VisibilitySensor>   
                 </span> +</h3>
                <p className="text-muted">Project Done</p>
            </div>
        </div>

        <div className="col-lg-3 col-md-6 col-sm-6">
          <div className="counter-item text-center mb-5 mb-lg-0">
            <h3 className="mb-0"><span className="counter-stat font-weight-bold">
                <VisibilitySensor onChange={this.onVisibilityChange} offset={{top:10}} delayedCall>
                <CountUp className={style.countup} decimals={1} start={0} end={this.state.didViewCountUp ? 125 : 0}
                duration={3} /></VisibilitySensor>
            </span>M </h3>
                <p className="text-muted">User Worldwide</p>
          </div>
        </div>

        <div className="col-lg-3 col-md-6 col-sm-6">
          <div className="counter-item text-center mb-5 mb-lg-0">
            <h3 className="mb-0"><span className="counter-stat font-weight-bold">
                <VisibilitySensor onChange={this.onVisibilityChange} offset={{top:10
                    }} delayedCall>
                    <CountUp className={style.countup} decimals={1} start={0} end={this.state.didViewCountUp ? 39 : 0}
                    duration={3} />
                </VisibilitySensor></span>
            </h3>
            <p className="text-muted">Availble Country</p>
          </div>
        </div>

        <div className="col-lg-3 col-md-6 col-sm-6">
          <div className="counter-item text-center">
            <h3 className="mb-0"><span className="counter-stat font-weight-bold">
            <VisibilitySensor onChange={this.onVisibilityChange} offset={{top:10
                    }} delayedCall>
                    <CountUp className={style.countup} decimals={1} start={0} end={this.state.didViewCountUp ? 14 : 0}
                    duration={3} />
                </VisibilitySensor></span>
            </h3>
            <p className="text-muted">Award Winner </p>
          </div>
        </div>
      </div>
    )
  }
}
