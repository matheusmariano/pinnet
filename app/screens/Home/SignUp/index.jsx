import React, { Component } from 'react';
import { FormattedMessage } from 'react-intl';
import S from '../../../services/react-sauce';
import patterns from '../../../services/patterns';
import './styles.scss';

class SignUp extends Component {
  constructor(props) {
    super(props);

    this.state = {
      validated: false,
    };
  }

  submit(event) {
    this.setState({
      validated: true,
    });

    event.preventDefault();
    event.stopPropagation();
  }

  render() {
    return (
      <div
        className="card"
        styleName="sign-up"
      >
        <div className="card-body">
          <h3 className="text-center mb-3 p-2">
            <FormattedMessage id="home.sign_up.title" />
          </h3>
          <form
            className={
              S.classes({
                'was-validated': this.state.validated,
              })
            }
            noValidate
          >
            <div className="form-group">
              <FormattedMessage id="home.sign_up.email.placeholder">
                {message => (
                  <input
                    className="form-control"
                    placeholder={message}
                    required
                    type="email"
                  />
                )}
              </FormattedMessage>
            </div>
            <div className="form-group position-relative">
              <FormattedMessage id="home.sign_up.password.placeholder">
                {message => (
                  <input
                    className="form-control"
                    pattern={patterns.strongPassword}
                    placeholder={message}
                    required
                    type="password"
                  />
                )}
              </FormattedMessage>
              <div className="invalid-feedback animated shake">
                <FormattedMessage id="home.sign_up.password.error" />
              </div>
            </div>
            <button
              className="btn btn-primary btn-block"
              onClick={event => this.submit(event)}
              type="submit"
            >
              <FormattedMessage id="home.sign_up.action" />
            </button>
          </form>
        </div>
      </div>
    );
  }
}

export default SignUp;
