import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import { FormattedMessage } from 'react-intl';
import BodyProps from '../../components/BodyProps/';
import MainMenu from './MainMenu/';
import SignUp from './SignUp/';
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
      <section>
        <BodyProps className="bg-light" />
        <MainMenu />
        <div className="container-fluid">
          <div
            className="row justify-content-around align-items-stretch"
            styleName="home__hero"
          >
            <div
              className="
                d-flex col-md-6 col-lg-5 col-xl-4
                align-items-center text-center text-md-left
              "
            >
              <h1>
                <FormattedMessage id="home.hero.title" />
              </h1>
            </div>
            <div
              className="
                d-flex col-md-6 col-lg-5 col-xl-4 align-items-center
                justify-content-center justify-content-md-end
              "
            >
              <SignUp />
            </div>
          </div>
        </div>
        <nav className="navbar navbar-light justify-content-center">
          <span className="navbar-text">
            <FormattedMessage
              id="home.footer.message"
              values={{
                author: (
                  <a
                    href="https://github.com/matheusmariano"
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    <span>Matheus Mariano</span>
                  </a>
                ),
              }}
            />
          </span>
        </nav>
      </section>
    );
  }
}

export default withRouter(HomeScene);
