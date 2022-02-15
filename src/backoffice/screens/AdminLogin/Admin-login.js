import "./admin-login.css"
import { PureComponent } from "react"
/* react redux */
import { connect } from "react-redux"
import { setAdmin } from "../../../redux/ducks/adminDuck"
/* react router */
import { Link, Navigate } from "react-router-dom"
/* func components */
import LogoComp from "../../componets/funcComponets/LogoComp/LogoComp"
import Input from "../../../frontend/components/UI/Input/Input"
import Button from "../../../frontend/components/UI/Button/Button"

class AdminLogin extends PureComponent {

    constructor(props) {
        super(props)

        this.state = {
            user: {},
            flagRedirect: false
        }
    }
    componentDidMount() {
        if (this.props.admin.email) {
            this.redirect();
        }
    }
    componentDidUpdate() {
    }
    /* User funcs */
    setMail = (e) => {
        let value = e.target.value
        this.setState({
            user: {
                ...this.state.user,
                email: value
            }
        })
    }
    setPassword = (e) => {
        let value = e.target.value;
        this.setState({
            user: {
                ...this.state.user,
                password: value
            }
        })
    }
    /* AUTH funcs */
    login = () => {
        this.props.dispatch(setAdmin(this.state.user));
        this.redirect();
    }

    redirect = () => {
        this.setState({
            flagRedirect: true
        })
    }

    render() {
        return (
            <main className="container-auth-admin font-primary">
                <div className="box-auth-admin">
                    <section className="box-Logo">
                        <LogoComp
                            LogoCompHeight="80px"
                            LogoCompWidth="80px"
                        />
                    </section>
                    <section className="box-inputs">
                        <div>
                            <label>
                                Indirizzo email
                            </label>
                            <Input onChange={this.setMail} />
                        </div>
                        <div>
                            <label>
                                Password
                            </label>
                            <Input onChange={this.setPassword} />
                        </div>
                        <section className="mt-4 flex">
                            <div className="basis-2/4  flex">
                                <Input type={"checkbox"} />
                                <span className="ml-1">ricordami</span>

                            </div>
                            <div className="basis-2/4 flex justify-end">
                                {/* provvisorio */}
                                <Button></Button>
                                <button onClick={this.login}>
                                    loggati
                                </button>
                            </div>
                        </section>
                    </section>
                    <footer>
                        <div><Link to={"/"}>Torna a Home</Link></div>
                    </footer>
                </div>
                {
                    this.state.flagRedirect &&
                    <Navigate to="/admin" />
                }
            </main>
        )
    }
}
const mapStateToProps = state => ({
    admin: state.adminDuck.admin
})

export default connect(mapStateToProps)(AdminLogin)