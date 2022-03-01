import "./admin-login.css";
import { PureComponent } from "react";

/* ant Design */
import { Checkbox, Alert } from "antd";
/* utils */
import storage from "../../../common/utils/storage";
/* react redux */
import { connect } from "react-redux";
/* react router */
import { Link, Navigate } from "react-router-dom";
/* func components */
import LogoComp from "../../componets/funcComponets/LogoComp/LogoComp";
import Input from "../../../frontend/components/UI/Input/Input";
import Button from "../../../frontend/components/UI/Button/Button";
/* API */
import authAdminApi from "../../../services/backoffice/authAdminApi";

class AdminLogin extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      user: {},
      flagRedirect: false,
      flagRememberMe: false,
      feedBackSuccess: null,
    };
  }

  componentDidMount() {
    if (this.props.admin.username) {
      this.redirect();
    }
    this.DoYouRememberMe();
  }
  componentDidUpdate() {}

  /* User funcs */
  setUsername = (e) => {
    let value = e.target.value;
    this.setState({
      user: {
        ...this.state.user,
        username: value,
      },
    });
  };
  setRememberMe = (e) => {
    let value = e.target.checked;
    this.setState({
      flagRememberMe: value,
    });
  };
  setPassword = (e) => {
    let value = e.target.value;
    this.setState({
      user: {
        ...this.state.user,
        password: value,
      },
    });
  };
  /* AUTH funcs */
  DoYouRememberMe = async () => {
    await authAdminApi.updateAuthToken(this.props.dispatch);
    this.redirect();
  };
  login = async () => {
    let response = await authAdminApi.signInAdmin(
      this.state.user,
      this.props.dispatch
    );
    let feedBackSuccess = null;
    if (response.status === 200) {
      feedBackSuccess = true;
    } else if ((response = "errore")) {
      feedBackSuccess = false;
    }
    this.setState({
      feedBackSuccess: feedBackSuccess,
    });
    if (this.state.flagRememberMe === true) {
      localStorage.setItem(
        storage.LOCAL_STORAGE_KEYS.USER_REFRESH_TOKEN,
        response.data.refreshToken
      );
    }
    if (feedBackSuccess) {
      this.redirect();
    }
  };
  redirect = () => {
    setTimeout(() => {
      this.setState({
        flagRedirect: true,
      });
    }, [1000]);
  };

  render() {
    return (
      <main className="container-auth-admin font-primary">
        <div className="box-auth-admin">
          <section className="box-Logo">
            <LogoComp LogoCompHeight="80px" LogoCompWidth="80px" />
          </section>
          <section className="box-inputs">
            <div>
              <label>Inserisci Username</label>
              <Input onChange={this.setUsername} />
            </div>
            <div>
              <label>Password</label>
              <Input type={"password"} onChange={this.setPassword} />
            </div>
            <section className="mt-4 flex">
              <div className="basis-2/4  flex">
                <Checkbox
                  style={{ color: "white" }}
                  onChange={this.setRememberMe}
                >
                  Remember me
                </Checkbox>
              </div>
              <div className="basis-2/4 flex justify-end">
                <Button onClick={this.login} label="loggati" />
              </div>
            </section>
          </section>
          <footer>
            <div>
              <Link to={"/"}>Torna a Home</Link>
            </div>
          </footer>
          <div className="container-feedback">
            {this.state.feedBackSuccess && (
              <div className="box-success">
                <Alert message="Success" type="success" showIcon />
              </div>
            )}
            {this.state.feedBackSuccess === false && (
              <div className="box-error">
                <Alert
                  message="Check username or password"
                  type="error"
                  showIcon
                />
              </div>
            )}
          </div>
        </div>
        {this.state.flagRedirect && <Navigate to="/admin/dashBoard/users" />}
      </main>
    );
  }
}
const mapStateToProps = (state) => ({
  admin: state.adminDuck.admin,
});

export default connect(mapStateToProps)(AdminLogin);
