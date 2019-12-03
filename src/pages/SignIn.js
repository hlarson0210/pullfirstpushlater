import React from "react";

function SignIn(props) {
    return (
        <main>
            <div className="container center">
                {/* Title Row */}
                <div className="row">
                    <h1>Game Application</h1>
                    <h4>Hello sign into your account to access your game library</h4>
                </div>
                {/* Form Row */}
                <div className="row">
                    <form className="col s8 offset-s2">
                        <div className="row">
                            <div className="input-field col s12">
                                <input id="username" type="text" className="validate"></input>
                                <label for="username">Username</label>
                            </div>
                        </div>
                        <div className="row">
                            <div className="input-field col s12">
                                <input id="password" type="password" className="validate"></input>
                                <label for="password">Password</label>
                            </div>
                        </div>
                    </form>
                </div>
                {/* Log in row */}
                <div className="row">
                    <a className="waves-effect waves-light btn-large blue lighten-1">Log In</a>
                    <p>Don't have an account?</p>
                    {/* Modal Trigger */}
                    <p><a className="modal-trigger" href="#modal1">Sign Up</a></p>
                </div>
            </div>
            {/* Modal Structure */}
            <div id="modal1" className="modal">
                <div className="modal-content center">
                    <h4>Sign Up</h4>
                    <div className="row">
                        <form className="col s8 offset-s2">
                            <div className="row">
                                <div className="input-field col s6">
                                    <input id="first_name" type="text" className="validate"></input>
                                    <label for="first_name">First Name</label>
                                </div>
                                <div className="input-field col s6">
                                    <input id="last_name" type="text" className="validate"></input>
                                    <label for="last_name">Last Name</label>
                                </div>
                            </div>
                            <div className="row">
                                <div className="input-field col s12">
                                    <input id="username" type="text" className="validate"></input>
                                    <label for="username">Username</label>
                                </div>
                            </div>
                            <div className="row">
                                <div className="input-field col s12">
                                    <input id="password" type="password" className="validate"></input>
                                    <label for="password">Password</label>
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