import React from 'react'
import { Link } from "gatsby"
import Title from "../Globals/Title"


const Info = () => {
  return ( 
    <section className="py-5">
      <div className="container">
        <Title title="our shop"></Title>
        <div className="row">
          <div className="col-10 col-sm-8 mx-auto text-center">
            <p className="lead text-muted mb-5">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Molestiae, dicta deleniti. Est aliquam soluta explicabo, at distinctio repudiandae quam eum debitis ipsam dolorem minus, nostrum perferendis quos quae voluptas facere vitae architecto. Aspernatur, distinctio eveniet est unde sequi culpa nostrum eum soluta a repellat quidem, tempore aliquam ipsam ullam vel?
            </p>
            <Link to="/about/">
                <button className="btn btn-yellow text-uppercase">about page</button>
            </Link>
          </div>
        </div>
      </div>
    </section>
   );
}
 
export default Info;