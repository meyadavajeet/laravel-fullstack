import React from "react";
import "../app.css";
import { Link } from "react-router-dom";

class ContactCard extends React.Component {
    render() {
        const { contact } = this.props;
        // console.log(contact);
      const delContact = (id) => {
            this.props.deleteContact(id);
        };
        return (
            <>
                <div className="card mt-1">
                    <div className="card-body">
                        <div className="row">
                            <div className="col-sm-2">
                                <span className="first-letter">
                                    {contact.fullName[0]}
                                </span>
                            </div>
                            <div className="col-sm-2">{contact.fullName}</div>
                            <div className="col-sm-2">{contact.email}</div>
                            <div className="col-sm-2">{contact.phone}</div>
                            <div className="col-sm-2">
                                <Link
                                    className="btn btn-warning btn-sm"
                                    to={`/edit-contact/${contact.id}`}
                                >
                                    Edit
                                </Link>
                            </div>
                            <div className="col-sm-2">
                                <button
                                    className="btn btn-danger btn-sm"
                                    onClick={() => delContact(contact.id)}
                                >
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
