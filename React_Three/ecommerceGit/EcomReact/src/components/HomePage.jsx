import React from 'react';

class HomePage extends React.Component {
    render() {
        return (
            <CarouselHero />
        )
    }
}

class CarouselHero extends React.Component {
    render() {
        return (
            <div>
                <div className="home-container">
                    <div className="lt-image-slideshow">
                        <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
                            <ol className="carousel-indicators">
                                <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
                                <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                            </ol>
                            <div className="carousel-inner">
                                <div className="carousel-item active">
                                    <img className="d-block w-100" src="../images/bg-img-1.jpg" alt="First slide" />
                                    <div className="carousel-caption-0 d-md-block heroFont">
                                        <h1>Run<span className="yellow-text">4</span>It</h1>
                                    </div>
                                </div>
                                <div className="carousel-item">
                                    <img className="d-block w-100" src="../images/bg-img-2.jpg" alt="Second slide" />
                                    <div className="carousel-caption-1 d-md-block heroFont">
                                        <h1><span className="yellow-text">Athletic</span> Apparel</h1>
                                    </div>
                                </div>
                            </div>
                            <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
                                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                                <span className="sr-only">Previous</span>
                            </a>
                            <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
                                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                                <span className="sr-only">Next</span>
                            </a>
                        </div>
                    </div>
                </div>
                <SecondContainer />
            </div>
        )
    }
}

class SecondContainer extends React.Component {
    render() {
        return (
            <>
                <section className="container mt-5 mb-5">
                    <div className="row pt-5 pb-5">
                        <div className="col-md-6">
                            {/* Nike Video  */}
                            <div className="modal fade" id="modal1" tabIndex="-1" role="dialog"
                                aria-hidden="true">
                                <div className="modal-dialog modal-lg" role="document">
                                    <div className="modal-content">
                                        <div className="modal-body mb-0 p-0">
                                            <div className="embed-responsive embed-responsive-16by9 z-depth-1-half">
                                                <iframe className="embed-responsive-item" width="966" height="543"
                                                    src="https://www.youtube.com/embed/DWsUrMfDaG4"
                                                    allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                                                    allowFullScreen></iframe></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <a data-toggle="modal" data-target="#modal1" className="play-video-link" href="javascript:;">
                                <i className="material-icons videoIcon">play_circle_outline</i>
                                <img className="img-fluid z-depth-1 lebronpic" src="../images/lebron_equality.jpg" alt="video" />
                            </a>
                            {/* Image Thumbnails Below Video  */}
                            <div className="d-flex">
                                <a href="/product" className="thumb img"><img height="200" width="200" className="img-fluid img-thumbnail" alt="rack of clothes"
                                    src="../images/tshirt-home.jpeg" /> </a>
                                <a href="/product" className="thumb img"><img height="200" width="200" className="img-fluid img-thumbnail" alt="runner"
                                    src="../images/pants_thumbnail.jpg" /></a>
                                <a href="/product" className="thumb img"><img height="200" width="200" className="img-fluid img-thumbnail" alt="yoga"
                                    src="../images/woman-apparal-thumbnail.jpg" /></a>
                            </div>
                        </div>
                        {/* Text Besides Video and Thumbnails    */}
                        <div className="col-md-6 pl-md-5 d-flex align-items-center">
                            <div className="text pt-4 pt-md-0">
                                <div className="heading-section mb-4">
                                    <span className="subheading">Welcome</span>
                                    <h2 className="mb-1 welcome">Welcome to <span className="run4it">Run4It</span> Athletic Apparel</h2>
                                </div>
                                <p className="home-second-container">Our mission is what drives us to do everything possible to
                                   expand human potential. We do that by creating groundbreaking sport innovations, by making
                                    our products more sustainably, by building a creative and diverse global team and by making
                                    a positive impact in communities where we live and work.</p>
                                <p><a href="/contact" className="btn p-3 btn-joinUs white-text">Join us</a></p>
                            </div>
                        </div>
                    </div>
                </section>
                <VideoContainer />
            </>
        )
    }
}

class VideoContainer extends React.Component {
    render() {
        return (
            <section className="container-fluid vidContainer">
                <div className="overlay"></div>
                <video playsInline="playsinline" autoPlay="autoplay" muted="muted" loop="loop" >
                    <source src="../video/container_three_video.mp4" type="video/mp4" />
                </video>
                <div className="container h-100">
                    <div className="d-flex h-100 text-center align-items-center">
                        <div className="w-100 text-white">
                            <h2 className="display-3 videoText">Achieve <span className="yellow-text">Great</span>ness</h2>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}

export default HomePage;