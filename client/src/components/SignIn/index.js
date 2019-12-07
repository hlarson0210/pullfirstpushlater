import React from "react";
import "./style.css";



function SignIn(props) {
    return (
        <main>
            <div className="container center">
                <div className="row">
                    <h1>Game Application</h1>
                    <h4>Hello sign into your account to access your game library</h4>
                </div>

                <div className="row">
                    <form className="col s8 offset-s2">
                        <div className="row">
                            <div className="input-field col s12">
                                <input id="username" type="text" className="validate"></input>
                                <label htmlFor="username">Username</label>
                            </div>
                        </div>
                        <div className="row">
                            <div className="input-field col s12">
                                <input id="password" type="password" className="validate"></input>
                                <label htmlFor="password">Password</label>
                            </div>
                        </div>
                    </form>
                </div>

                <div className="row">
                    <a className="waves-effect waves-light btn-large blue lighten-1">Log In</a>
                    <p>Don't have an account?</p>

                    <p><a className="modal-trigger" href="#modal1">Sign Up</a></p>
                </div>
            </div>

            <div id="modal1" className="modal">
                <div className="modal-content center">
                    <h4>Sign Up</h4>
                    <div className="row">
                        <form className="col s8 offset-s2">
                            <div className="row">
                                <div className="input-field col s6">
                                    <input id="first_name" type="text" className="validate firstname"></input>
                                    <label htmlFor="first_name">First Name</label>
                                </div>
                                <div className="input-field col s6">
                                    <input id="last_name" type="text" className="validate lastname"></input>
                                    <label htmlFor="last_name">Last Name</label>
                                </div>
                            </div>
                            <div className="row">
                                <div className="input-field col s12">
                                    <input id="new_username" type="text" className="validate new_username"></input>
                                    <label htmlFor="new_username">Username</label>
                                </div>
                            </div>
                            <div className="row">
                                <div className="input-field col s12">
                                    <input id="new_password" type="password" className="validate new_password"></input>
                                    <label htmlFor="new_password">Password</label>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
                <div className="modal-footer">
                    <a href="#!" className="modal-close waves-effect waves-green btn-flat">Submit</a>
                </div>
            </div>
        </main>
    );
}
export default SignIn;
