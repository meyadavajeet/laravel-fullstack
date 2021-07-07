import axios from "axios";
import React from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

// toast-configuration method,
// it is compulsory method.
toast.configure();

class EditContact extends React.Component {
    state = {
        fullName: "",
        email: "",
        phone: "",
    };
    handleInput = (e) => {
        this.setState({ [e.target.name]: e.target.value });
    };
    //function for getting value in form
    componentDidMount = async () =>{
        const id = this.props.match.params.id;
        const res = await axios.get(`/contacts/${id}/edit`);
        console.log(id);
        console.log(res.data.contact.fullName);
        console.log('printing response');
        console.log(res);
        this.setState({fullName:res.data.contact.fullName});
        this.setState({email:res.data.contact.email});
        this.setState({phone:res.data.contact.phone});
    }

    //code for sumitting form data to backend with the help of axios
    updateContact = async (e) => {
        e.preventDefault();
        const id = this.props.match.params.id;
        const res = await axios.patch(`/contacts/${id}`, this.state);
        // console.log(res);
        // this.setState({ fullName: "", email: "", phone: "" });
        if (res.data.status === 200) {
            this.props.history.push("/");
            toast.success(res.data.response, {
                position: toast.POSITION.TOP_RIGHT,
            });

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
                                    <form onSubmit={this.updateContact}>
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

export default EditContact;
