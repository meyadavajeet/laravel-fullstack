import React from "react";
import "../app.css";

class ContactCard extends React.Component {
    render() {
        const { contact } = this.props;
        console.log(contact);
        return (
            <>
                <div className="card mt-1">
                    <div className="card-body">
                        <div className="row">
                            <div className="col-sm-2">
                                <span class="first-letter">
                                    {contact.fullName[0]}
                                </span>
                            </div>
                            <div className="col-sm-2">{contact.fullName}</div>
                            <div className="col-sm-2">{contact.email}</div>
                            <div className="col-sm-2">{contact.phone}</div>
                            <div className="col-sm-2">
                                <button className="btn btn-warning btn-sm">
                                    Edit
                                </button>
                            </div>
                            <div className="col-sm-2">
                                <button className="btn btn-danger btn-sm">
                                    Delete
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        );
    }
}
export default ContactCard;
