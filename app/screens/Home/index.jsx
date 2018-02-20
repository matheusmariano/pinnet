import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import { FormattedMessage } from 'react-intl';
import './styles.scss';

class HomeScene extends Component {
  static get contextTypes() {
    return {
      intl: PropTypes.object.isRequired,
    };
  }

  componentWillMount() {
    document.title = this.formatMessage({ id: 'home.page_title' });
  }

  formatMessage(props) {
    return this.context.intl.formatMessage(props);
  }

  render() {
    return (
      <section className="container-fluid">
        <div className="row">
          <div className="col">
            <h1 className="display-1">
              <FormattedMessage id="home.title" />
            </h1>
            <p className="lead">
              <FormattedMessage id="home.description" />
            </p>
          </div>
        </div>
      </section>
    );
  }
}

export default withRouter(HomeScene);
