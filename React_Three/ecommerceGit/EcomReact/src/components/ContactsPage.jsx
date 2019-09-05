import React from 'react';

class ContactsPage extends React.Component {
    render() {
        return (
            <ContactHero />
        )
    }
}

class ContactHero extends React.Component {
    render() {
        return (
            <section className="container-fluid hero_main_contact">
            <div className="hero-contact">
              <h1><span className="yellow-text">Contact</span> Us</h1>  
              <div className="container contact-form-container">
                <div className="row justify-content-center">
                  <div className="col-md-4 mt-5 bg-light rounded">
                    <h5 className="text-center text-success">Contact Form</h5>
                    <form action="https://formspree.io/thind.lovepreet14@gmail.com" method="post" id="contact-us-form" className="p-2" >
                      <div className="form-group input-group">
                        <input type="text" name="name" className="form-control" placeholder="Name" required />
                      </div>
                      <div className="form-group input-group">
                        <input type="email" name="email" className="form-control" placeholder="Email" required />
                      </div>
                      <div className="form-group input-group">
                        <input type="text" name="subject" className="form-control" placeholder="Subject" required />
                      </div>
                      <div className="form-group input-group">
                        <textarea name="msg" id="msg" className="form-control" placeholder="Leave a comment..." cols="30" rows="4" required></textarea>
                      </div>
                      <div className="form-group">
                        <input type="submit" name="submit" id="submit" className="btn btn-primary btn-block" value="Send" />
                      </div>
                    </form>
                  </div>
                </div>
              </div>   
            </div>
          </section>
        )
    }
}

export default ContactsPage;