import contactUsImg1 from "./img/contactUsImg1.png"
import contactUsImg2 from "./img/contactUsImg2.png"

const ContactUs = () => {
    return (
        <div className="contactUs" id="contactUs">
            <h2>Contact Us</h2>
            <div className="row" class="row">
                <div className="col">
                    <img src={contactUsImg1} alt="" className="contactUsImg1" />
                </div>
                <div className="col">
                    <img src={contactUsImg2} alt="" className="contactUsImg2" />
                </div>
            </div>
            <div className="row" class="row">
                <div className="col">
                    <h3>John Doe</h3>
                    <h4>Head of management</h4>
                    <h4>someonesEmail@email.com</h4>
                </div>
                <div className="col">
                    <h3>Jane Doe</h3>
                    <h4>Help Desk</h4>
                    <h4>helpDesk@email.com</h4>
                </div>
            </div>
        </div>
    );
}
 
export default ContactUs;