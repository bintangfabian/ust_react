import React, { Component, Fragment } from 'react'
import gam1 from './img/gam1.png'
import gam2 from './img/gam2.png'
import gam3 from './img/gam3.png'

class Header extends Component{
    render(){
        return(
                <div id="carouselExampleIndicators" class="carousel slide rounded-lg" data-ride="carousel">
                    <ol class="carousel-indicators">
                        <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
                        <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                        <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
                    </ol>
                    <div class="carousel-inner rounded-lg">
                        <div class="carousel-item active">
                            <img src={gam1} class="d-block w-100" alt="https://mdbootstrap.com/img/Photos/Slides/img%20(35).jpg" />
                        </div>
                        <div class="carousel-item">
                            <img src={gam2} class="d-block w-100" alt="https://mdbootstrap.com/img/Photos/Slides/img%20(35).jpg" />
                        </div>
                        <div class="carousel-item">
                            <img src={gam3} class="d-block w-100" alt="https://mdbootstrap.com/img/Photos/Slides/img%20(35).jpg" />
                        </div>
                    </div>
                    <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
                        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span class="sr-only">Previous</span>
                    </a>
                    <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
                        <span class="carousel-control-next-icon" aria-hidden="true"></span>
                        <span class="sr-only">Next</span>
                    </a>
                </div>
        )
    }
}

export default Header;