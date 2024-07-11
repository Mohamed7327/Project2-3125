import Booking from "./Booking";
import mainPage1 from "./img/mainPage1.png"
import mainPage2 from "./img/mainPage2.png"
import mainPage3 from "./img/mainPage3.png"
import mainPage4 from "./img/mainPage4.png"
import mainPage5 from "./img/mainPage5.png"

const Home = () => {
    return (
        <div className="home">
            <div className="headline">
                <h2>Plan Your Perfect Event With Us</h2>
                <a href="/findVenue" element={<Booking />}>Find A Venue Today!</a>                
            </div>
            <div className="homeContent">
                <div className="row" class="row">
                    <div className="col" class="col-6">
                       <img src={mainPage1} alt="" className="homeImage" />
                    </div>
                    <div className="col" class="col-6">
                        <div>
                            <p>
                                <h2>Find Your Perfect Venue Today!</h2>
                            </p>
                            <p>Discover the ideal location for your next event with our comprehensive venue selection tool. Whether you’re planning a wedding, corporate event, or private party, we offer a wide range of venues to suit any occasion and budget. Explore stunning locations, compare amenities, and read reviews to make an informed decision. Start your search now and find the perfect venue</p>
                        </div>

                    </div>
                </div>
                <div className="row" class="row">
                    <div className="col" class="col-6">
                        <div>
                            <p>
                                <h2>Trusted by Major Companies</h2>
                            </p>
                            <p>Join the ranks of top-tier organizations that rely on us to find the perfect venues for their events. From multinational corporations to innovative startups, our platform is the go-to choice for businesses seeking exceptional locations for conferences, meetings, and corporate functions. Experience the confidence of working with a trusted partner, and let us help you create memorable events that impress your clients and colleagues alike.</p>
                        </div>
                    </div>
                    <div className="col" class="col-6">
                       <img src={mainPage2} alt="" className="homeImage" />
                    </div>
                </div>
                <div className="row" class="row" style={{paddingTop:"20px", border:"none"}}>
                    <h2>Check Out Our Beauitful Venues</h2>
                    <p style={{paddingBottom:"20px", paddingLeft:"80px", paddingRight:"80px"}}>Discover a selection of stunning venues that are perfect for any occasion. From office spaces to charming outdoor spaces, our curated collection offers something for every event. Take a look at these wonderful locations and imagine your next event in one of these breathtaking settings.</p>\
                <div className="row" class="row" id="rowLast">
                    <div className="col" class="col-4">
                       <img src={mainPage3} alt="" className="homeImage" id="beauty"/>
                    </div>
                    <div className="col" class="col-4">
                       <img src={mainPage4} alt="" className="homeImage" id="beauty"/>
                    </div>
                    <div className="col" class="col-4">
                       <img src={mainPage5} alt="" className="homeImage" id="beauty"/>
                    </div>
                </div>
                <div className="row" class="row" id="rowLast" style={{margin:"auto"}}>
                    <div className="col" class="col-4">
                       <h4>Wedding Venue</h4>
                    </div>
                    <div className="col" class="col-4">
                        <h4>Office Venue</h4>
                    </div>
                    <div className="col" class="col-4">
                        <h4>Concert Venue</h4>
                    </div>
                </div>
            </div>
            <a href="/findVenue" element={<Booking />} style={{justifyContent:"center"}}>Find Your Venue</a>                
        </div>
    </div>
    )
}

export default Home;