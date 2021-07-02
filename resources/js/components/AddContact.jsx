import React from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

// toast-configuration method,
// it is compulsory method.
toast.configure();

class AddContact extends React.Component {
    state = {
        fullName: "",
        email: "",
        phone: "",
    };
    handleInput = (e) => {
        this.setState({ [e.target.name]: e.target.value });
    };
    //code for sumitting form data to backend with the help of axios
    saveContact = async (e) => {
        e.preventDefault();
        const res = await axios.post("/contacts", this.state);
        console.log(res);
        this.setState({ fullName: "", email: "", phone: "" });
        if (res.data.status === 200) {
            toast.success(res.data.response, {
                position: toast.POSITION.TOP_RIGHT,
            });
            // this.props.history.push("/");
        } else {
            toast.error(res.data.response, {
                position: toast.POSITION.BOTTOM_RIGHT,
            });
            console.log("Some Error Haapened");
        }
    };

    render() {
        return (
            <>
                <div className="container mt-5">
                    <div className="row">
                        <div className="col-sm-3"></div>
                        <div className="col-sm-6">
                            <div className="card">
                                <div className="card-header">
                                    Add Contact Form
                                </div>
                                <div className="card-body">
                                    <form onSubmit={this.saveContact}>
                                        <div className="form-group">
                                            <input
                                                type="text"
                                                name="fullName"
                                                className="form-control"
                                                value={this.state.fullName}
                                                onChange={this.handleInput}
                                                placeholder="Enter FullName"
                                                required
                                            />
                                        </div>
                                        <div className="form-group">
                                            <input
                                                type="email"
                                                name="email"
                                                className="form-control"
                                                value={this.state.email}
                                                onChange={this.handleInput}
                                                placeholder="Enter Email"
                                                required
                                            />
                                        </div>
                                        <div className="form-group">
                                            <input
                                                type="text"
                                                name="phone"
                                                className="form-control"
                                                value={this.state.phone}
                                                onChange={this.handleInput}
                                                placeholder="Enter phone"
                                                required
                                            />
                                        </div>
                                        <div className="form-group">
                                            <button
                                                type="submit"
                                                className="btn btn-success btn-block"
                                            >
                                                Submit
                                            </button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-3"></div>
                    </div>
                </div>
            </>
        );
    }
}

export default AddContact;
