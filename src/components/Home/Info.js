import React from 'react'
import { Link } from "gatsby"
import Title from "../Globals/Title"
import Coffee from '../../images/coffee.gif'

const Info = () => {
  return ( 
    <section>
      <div className="container">
        <div className="col py-5">
        <Title title="our shop"></Title>
          <div className="row">
          <div className="col-10 col-sm-8 mx-auto">
            <p className="lead text-muted">
              we offer exotic coffee from several different regions of the world, and we take pride in our ability to roast current-crop, specialty-roasted gourmet coffee. These coffees are grown and produced using environmentally friendly practices, and they're also available in decaf. Each of our coffees is packaged in one-pound or five-pound bags, and we provide same-day roasting and shipping to ensure your gourmet coffee is fresh, flavorful and savory.
            </p>
            <Link to="/about/">
                <button className="btn btn-yellow text-center text-uppercase">about page</button>
            </Link>
            </div>
            <div className="aside">
              <img src={Coffee} alt="coffee"/>
            </div>
        </div>
        </div>
        
      </div>
    </section>
   );
}
 
export default Info;