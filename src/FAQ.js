import ContactUs from "./ContactUs";

const FAQ = () => {
    return (
        <div class="container" className="faq" id="faq">
            <div class="row" id="row">
                <div class="col" id="col">
                    <p>
                        <h2 className="question">Q. How can I check the availability of a venue for my desired date?</h2>
                        <p className="answer">You can check the availability of our venues by visiting the "Check Availability" section on our website. Simply select your desired date and venue, and our system will show you the availability status. For any specific inquiries or further assistance, feel free to contact our customer service team.</p>
                    </p>

                    <p>
                        <h2 className="question">Q. What is included in the rental fee for a venue?</h2>
                        <p className="answer">The rental fee typically includes access to the venue for the duration of your event, basic furniture such as tables and chairs, standard lighting, and on-site support staff. Additional services such as catering, audio-visual equipment, and decoration can be arranged for an extra charge. Please refer to the venue details on our website for a comprehensive list of what's included or contact us for a customized package.</p>
                    </p>
                    
                    <p>
                        <h2 className="question">Q. What is the cancellation policy for venue bookings?</h2>
                        <p className="answer">Our cancellation policy varies depending on the venue and the time of cancellation. Generally, cancellations made more than 30 days prior to the event will receive a full refund, while cancellations made between 15-30 days before the event will incur a 50% charge. Cancellations made within 14 days of the event are non-refundable. Please review the specific cancellation terms for your chosen venue in the booking confirmation or contact our support team for more details.</p>
                    </p>
                </div>
            </div>

            <p style={{fontWeight:"bold"}}>
                If you have any unanswered questions, <a href="/contactus" element={<ContactUs />}>contact us directly!</a>
            </p>
        </div>
        
    );
}

export default FAQ;