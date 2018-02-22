import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { FormattedMessage } from 'react-intl';
import { Collapse } from 'reactstrap';

class MainMenu extends Component {
  constructor(props) {
    super(props);

    this.state = {
      open: false,
    };
  }

  toggle() {
    this.setState({
      open: !this.state.open,
    });
  }

  render() {
    return (
      <nav className="navbar navbar-light navbar-expand-md">
        <Link
          to="/"
          href="/"
          className="navbar-brand"
        >
          <h4 className="mb-0">
            <FormattedMessage id="general.brand" />
          </h4>
        </Link>
        <button
          className="navbar-toggler"
          onClick={() => this.toggle()}
          type="button"
        >
          <i className="navbar-toggler-icon" />
        </button>
        <Collapse
          className="justify-content-end"
          isOpen={this.state.open}
          navbar
        >
          <ul className="navbar-nav">
            <li className="nav-item">
              <a
                className="nav-link"
                href="https://github.com/matheusmariano/pinnet"
                rel="noopener noreferrer"
                target="_blank"
              >
                <span>GitHub</span>
              </a>
            </li>
            <li className="nav-item">
              <Link
                className="btn btn-primary ml-md-2"
                href="/sign-in"
                to="/sign-in"
              >
                <FormattedMessage id="home.main_menu.sign_in" />
              </Link>
            </li>
          </ul>
        </Collapse>
      </nav>
    );
  }
}

export default MainMenu;
