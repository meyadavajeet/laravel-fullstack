import React from "react";
import axios from "axios";
import ContactCard from "./ContactCard";

class Contacts extends React.Component {
    state = {
        contacts: [],
        loader: true,
    };
    fetchContacts = async () => {
        const res = await axios.get("/contacts");
        if (res.data.status === 200) {
            this.setState({ contacts: res.data.contacts });
            this.setState({ loader: false });
            console.log(res.data);
        }
        console.log(res);
    };

    componentDidMount() {
        this.fetchContacts();
    }
    render() {
        if (this.state.loader) {
            return <h1 className="text-center">Loading ....</h1>;
        }
        return (
            <>
                <div className="container">
                    <div className="row mt-2">
                        <div className="col-sm-1"></div>
                        <div className="col-sm-10">
                            {this.state.contacts.map((contact) => (
                                <ContactCard
                                    contact={contact}
                                    key={contact.id}
                                />
                            ))}
                        </div>
                        <div className="col-sm-1"></div>
                    </div>
                </div>
            </>
        );
    }
}

export default Contacts;
