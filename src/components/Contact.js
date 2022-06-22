// Terima props lalu tampilkan dalam Contact component
// Kalian bisa membuat CSS sendiri di src/components/Contact.css
import React from "react";
import "./Contact.css";

const Contact = (props) => {
  return (
    <div className="web">
      <div className="porto-web">
        <div className="left-right">
          <nav className="navigasi">
            <p>
              <img src={props.data.photo} className="gambar" alt="foto"></img>
            </p>
          </nav>
          <section className="konten1">
            <p className="detil">{props.data.name}</p>
            <p className="detil">{props.data.phone}</p>
            <p className="detil">{props.data.email}</p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Contact;
