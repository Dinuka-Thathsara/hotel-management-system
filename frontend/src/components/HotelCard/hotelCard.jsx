import React from 'react';
import './hotelCard.css';
// import 'bootstrap/dist/css/bootstrap.min.css'

class HotelCard extends React.Component {
    
    render() {
        return(
            <div class='card'>
                <div class="container">
  <section class="mx-auto my-5" style="max-width: 23rem;">
      
    <div class="card">
      <div class="bg-image hover-overlay ripple" data-mdb-ripple-color="light">
        <img src="https://mdbootstrap.com/img/Photos/Horizontal/Food/8-col/img (5).jpg" class="img-fluid" />
        <a href="#!">
          <div class="mask" style="background-color: rgba(251, 251, 251, 0.15);"></div>
        </a>
      </div>
      <div class="card-body">
        <h5 class="card-title font-weight-bold"><a>La Sirena restaurant</a></h5>
        <ul class="list-unstyled list-inline mb-0">
          <li class="list-inline-item me-0">
            <i class="fas fa-star text-warning fa-xs"> </i>
          </li>
          <li class="list-inline-item me-0">
            <i class="fas fa-star text-warning fa-xs"></i>
          </li>
          <li class="list-inline-item me-0">
            <i class="fas fa-star text-warning fa-xs"></i>
          </li>
          <li class="list-inline-item me-0">
            <i class="fas fa-star text-warning fa-xs"></i>
          </li>
          <li class="list-inline-item">
            <i class="fas fa-star-half-alt text-warning fa-xs"></i>
          </li>
          <li class="list-inline-item">
            <p class="text-muted">4.5 (413)</p>
          </li>
        </ul>
        <p class="mb-2">$ • American, Restaurant</p>
        <p class="card-text">
          Some quick example text to build on the card title and make up the bulk of the
          card's content.
        </p>
        <hr class="my-4" />
        <p class="lead"><strong>Tonight's availability</strong></p>
        <ul class="list-unstyled list-inline d-flex justify-content-between">
          <li class="list-inline-item me-0">
            <div class="chip me-0">5:30PM</div>
          </li>
          <li class="list-inline-item me-0">
            <div class="chip bg-secondary text-white me-0">7:30PM</div>
          </li>
          <li class="list-inline-item me-0">
            <div class="chip me-0">8:00PM</div>
          </li>
          <li class="list-inline-item me-0">
            <div class="chip me-0">9:00PM</div>
          </li>
        </ul>
        <a href="#!" class="btn btn-link link-secondary p-md-1 mb-0">Button</a>
      </div>
    </div>
    
  </section>
</div>
            </div>
        );
    }
}

export default HotelCard;