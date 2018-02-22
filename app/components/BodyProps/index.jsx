import { Component } from 'react';
import { setAttr } from 'redom';
import PropTypes from 'prop-types';

class BodyProps extends Component {
  static get propTypes() {
    return {
      className: PropTypes.string,
      styleName: PropTypes.string,
    };
  }

  static get defaultProps() {
    return {
      className: '',
      styleName: '',
    };
  }

  componentWillMount() {
    setAttr(document.body, {
      className: `${this.props.className} ${this.props.styleName}`,
    });
  }

  render() {
    return null;
  }
}

export default BodyProps;
