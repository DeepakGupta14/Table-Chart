import React from 'react'

const Home = () => {
    
    return (
        <div>
            <div className="tm-section tm-bg-img" id="tm-section-1">
                <div className="tm-bg-white ie-container-width-fix-2">
                    <div className="container ie-h-align-center-fix">
                        <div className="row">
                            <div className="col-xs-12 ml-auto mr-auto ie-container-width-fix">
                                <form action="index.html" method="get" className="tm-search-form tm-section-pad-2">
                                    <div className="form-row tm-search-form-row">
                                        <div className="form-group tm-form-element tm-form-element-100">
                                            <i className="fa fa-map-marker fa-2x tm-form-element-icon"></i>
                                            <input name="city" type="text" className="form-control" id="inputCity" placeholder="Type your destination..." />
                                        </div>
                                        <div className="form-group tm-form-element tm-form-element-50">
                                            <i className="fa fa-calendar fa-2x tm-form-element-icon"></i>
                                            <input name="check-in" type="text" className="form-control" id="inputCheckIn" placeholder="Check In" />
                                        </div>
                                        <div className="form-group tm-form-element tm-form-element-50">
                                            <i className="fa fa-calendar fa-2x tm-form-element-icon"></i>
                                            <input name="check-out" type="text" className="form-control" id="inputCheckOut" placeholder="Check Out" />
                                        </div>
                                    </div>
                                    <div className="form-row tm-search-form-row">
                                        <div className="form-group tm-form-element tm-form-element-2">
                                            <select name="adult" className="form-control tm-select" id="adult">
                                                <option value="">Adult</option>
                                                <option value="1">1</option>
                                                <option value="2">2</option>
                                                <option value="3">3</option>
                                                <option value="4">4</option>
                                                <option value="5">5</option>
                                                <option value="6">6</option>
                                                <option value="7">7</option>
                                                <option value="8">8</option>
                                                <option value="9">9</option>
                                                <option value="10">10</option>
                                            </select>
                                            <i className="fa fa-2x fa-user tm-form-element-icon"></i>
                                        </div>
                                        <div className="form-group tm-form-element tm-form-element-2">
                                            <select name="children" className="form-control tm-select" id="children">
                                                <option value="">Children</option>
                                                <option value="0">0</option>
                                                <option value="1">1</option>
                                                <option value="2">2</option>
                                                <option value="3">3</option>
                                                <option value="4">4</option>
                                                <option value="5">5</option>
                                                <option value="6">6</option>
                                                <option value="7">7</option>
                                                <option value="8">8</option>
                                                <option value="9">9</option>
                                                <option value="10">10</option>
                                            </select>
                                            <i className="fa fa-user tm-form-element-icon tm-form-element-icon-small"></i>
                                        </div>
                                        <div className="form-group tm-form-element tm-form-element-2">
                                            <select name="room" className="form-control tm-select" id="room">
                                                <option value="">Room</option>
                                                <option value="1">1</option>
                                                <option value="2">2</option>
                                                <option value="3">3</option>
                                                <option value="4">4</option>
                                                <option value="5">5</option>
                                                <option value="6">6</option>
                                                <option value="7">7</option>
                                                <option value="8">8</option>
                                                <option value="9">9</option>
                                                <option value="10">10</option>
                                            </select>
                                            <i className="fa fa-2x fa-bed tm-form-element-icon"></i>
                                        </div>
                                        <div className="form-group tm-form-element tm-form-element-2">
                                            <button type="submit" className="btn btn-primary tm-btn-search">Check Availability</button>
                                        </div>
                                    </div>
                                    <div className="form-row clearfix pl-2 pr-2 tm-fx-col-xs">
                                        <p className="tm-margin-b-0">"Becoming is better than being."</p>
                                        <a href="#" className="ie-10-ml-auto ml-auto mt-1 tm-font-semibold tm-color-primary">Need Help?</a>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="tm-section-2">
                <div className="container">
                    <div className="row">
                        <div className="col text-center">
                            <h2 className="tm-section-title">Here to help you?</h2>
                            <p className="tm-color-white tm-section-subtitle">Subscribe to get our newsletters</p>
                            <a href="#" className="tm-color-white tm-btn-white-bordered">Subscribe Newletters</a>
                        </div>
                    </div>
                </div>
            </div>

            <div className="tm-section tm-position-relative">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" preserveAspectRatio="none" className="tm-section-down-arrow">
                    <polygon fill="#9acd32" points="0,0  100,0  50,60"></polygon>
                </svg>
                <div className="container tm-pt-5 tm-pb-4">
                    <div className="row text-center">
                        <article className="col-sm-12 col-md-4 col-lg-4 col-xl-4 tm-article">
                            <i className="fa tm-fa-6x fa-legal tm-color-primary tm-margin-b-20"></i>
                            <h3 className="tm-color-primary tm-article-title-1">Pellentesque accumsan arcu nec dolor tempus</h3>
                            <p>Pellentesque at velit ante. Duis scelerisque metus vel felis porttitor gravida. Donec at felis libero. Mauris odio tortor.</p>
                            <a href="#" className="text-uppercase tm-color-primary tm-font-semibold">Continue reading...</a>
                        </article>
                        <article className="col-sm-12 col-md-4 col-lg-4 col-xl-4 tm-article">
                            <i className="fa tm-fa-6x fa-plane tm-color-primary tm-margin-b-20"></i>
                            <h3 className="tm-color-primary tm-article-title-1">Duis scelerisque metus vel felis porttitor</h3>
                            <p>Pellentesque at velit ante. Duis scelerisque metus vel felis porttitor gravida. Donec at felis libero. Mauris odio tortor.</p>
                            <a href="#" className="text-uppercase tm-color-primary tm-font-semibold">Continue reading...</a>
                        </article>
                        <article className="col-sm-12 col-md-4 col-lg-4 col-xl-4 tm-article">
                            <i className="fa tm-fa-6x fa-life-saver tm-color-primary tm-margin-b-20"></i>
                            <h3 className="tm-color-primary tm-article-title-1">Etiam aliquam arcu at mauris consectetur</h3>
                            <p>Pellentesque at velit ante. Duis scelerisque metus vel felis porttitor gravida. Donec at felis libero. Mauris odio tortor.</p>
                            <a href="#" className="text-uppercase tm-color-primary tm-font-semibold">Continue reading...</a>
                        </article>
                    </div>
                </div>
            </div>

            <div>
                <div className="tm-section tm-section-pad tm-bg-gray" id="tm-section-4">
                    <div className="container">
                        <div className="row">
                            <div className="col-sm-12 col-md-12 col-lg-8 col-xl-8">
                                <div className="tm-article-carousel">
                                    <article className="tm-bg-white mr-2 tm-carousel-item">
                                        <img src="https://source.unsplash.com/1600x400/weekly?mountain" alt="Image" className="img-fluid" />
                                        <div className="tm-article-pad">
                                            <header><h3 className="text-uppercase tm-article-title-2">Nunc in felis aliquet metus luctus iaculis</h3></header>
                                            <p>Aliquam ac lacus volutpat, dictum risus at, scelerisque nulla. Nullam sollicitudin at augue venenatis eleifend. Nulla ligula ligula, egestas sit amet viverra id, iaculis sit amet ligula.</p>
                                            <a href="#" className="text-uppercase btn-primary tm-btn-primary">Get More Info.</a>
                                        </div>
                                    </article>
                                    <article className="tm-bg-white mr-2 tm-carousel-item">
                                        <img src="https://source.unsplash.com/1600x400/weekly?beach" alt="Image" className="img-fluid" />
                                        <div className="tm-article-pad">
                                            <header><h3 className="text-uppercase tm-article-title-2">Sed cursus dictum nunc quis molestie</h3></header>
                                            <p>Pellentesque quis dui sit amet purus scelerisque eleifend sed ut eros. Morbi viverra blandit massa in varius. Sed nec ex eu ex tincidunt iaculis. Curabitur eget turpis gravida.</p>
                                            <a href="#" className="text-uppercase btn-primary tm-btn-primary">View Detail</a>
                                        </div>
                                    </article>
                                    <article className="tm-bg-white mr-2 tm-carousel-item">
                                        <img src="https://source.unsplash.com/1600x400/weekly?hotel" alt="Image" className="img-fluid" />
                                        <div className="tm-article-pad">
                                            <header><h3 className="text-uppercase tm-article-title-2">Eget diam pellentesque interdum ut porta</h3></header>
                                            <p>Aenean finibus tempor nulla, et maximus nibh dapibus ac. Duis consequat sed sapien venenatis consequat. Aliquam ac lacus volutpat, dictum risus at, scelerisque nulla.</p>
                                            <a href="#" className="text-uppercase btn-primary tm-btn-primary">More Info.</a>
                                        </div>
                                    </article>
                                    <article className="tm-bg-white mr-2 tm-carousel-item">
                                        <img src="https://source.unsplash.com/1600x400/weekly?nature" alt="Image" className="img-fluid" />
                                        <div className="tm-article-pad">
                                            <header><h3 className="text-uppercase tm-article-title-2">Lorem ipsum dolor sit amet, consectetur</h3></header>
                                            <p>Suspendisse molestie sed dui eget faucibus. Duis accumsan sagittis tortor in ultrices. Praesent tortor ante, fringilla ac nibh porttitor, fermentum commodo nulla.</p>
                                            <a href="#" className="text-uppercase btn-primary tm-btn-primary">Detail Info.</a>
                                        </div>
                                    </article>
                                    <article className="tm-bg-white mr-2 tm-carousel-item">
                                        <img src="https://source.unsplash.com/1600x400/weekly?beach" alt="Image" className="img-fluid" />
                                        <div className="tm-article-pad">
                                            <header><h3 className="text-uppercase tm-article-title-2">Orci varius natoque penatibus et</h3></header>
                                            <p>Pellentesque quis dui sit amet purus scelerisque eleifend sed ut eros. Morbi viverra blandit massa in varius. Sed nec ex eu ex tincidunt iaculis. Curabitur eget turpis gravida.</p>
                                            <a href="#" className="text-uppercase btn-primary tm-btn-primary">Read More</a>
                                        </div>
                                    </article>
                                    <article className="tm-bg-white tm-carousel-item">
                                        <img src="https://source.unsplash.com/1600x400/weekly?bar" alt="Image" className="img-fluid" />
                                        <div className="tm-article-pad">
                                            <header><h3 className="text-uppercase tm-article-title-2">Nullam sollicitudin at augue venenatis eleifend</h3></header>
                                            <p>Aenean finibus tempor nulla, et maximus nibh dapibus ac. Duis consequat sed sapien venenatis consequat. Aliquam ac lacus volutpat, dictum risus at, scelerisque nulla.</p>
                                            <a href="#" className="text-uppercase btn-primary tm-btn-primary">More Details</a>
                                        </div>
                                    </article>
                                </div>
                            </div>

                            <div className="col-sm-12 col-md-12 col-lg-4 col-xl-4 tm-recommended-container">
                                <div className="tm-bg-white">
                                    <div className="tm-bg-primary tm-sidebar-pad">
                                        <h3 className="tm-color-white tm-sidebar-title">Recommended Places</h3>
                                        <p className="tm-color-white tm-margin-b-0 tm-font-light">Enamel pin cliche tilde, kitsch and VHS thundercats</p>
                                    </div>
                                    <div className="tm-sidebar-pad-2">
                                        <a href="#" className="media tm-media tm-recommended-item">
                                            <img src="https://source.unsplash.com/200x40/weekly?hotel" alt="Image" />
                                            <div className="media-body tm-media-body tm-bg-gray">
                                                <h4 className="text-uppercase tm-font-semibold tm-sidebar-item-title">Europe</h4>
                                            </div>
                                        </a>
                                        <a href="#" className="media tm-media tm-recommended-item">
                                            <img src="https://source.unsplash.com/200x40/weekly?singapore" alt="Image" />
                                            <div className="media-body tm-media-body tm-bg-gray">
                                                <h4 className="text-uppercase tm-font-semibold tm-sidebar-item-title">Asia</h4>
                                            </div>
                                        </a>
                                        <a href="#" className="media tm-media tm-recommended-item">
                                            <img src="https://source.unsplash.com/200x40/weekly?rain" alt="Image" />
                                            <div className="media-body tm-media-body tm-bg-gray">
                                                <h4 className="text-uppercase tm-font-semibold tm-sidebar-item-title">Africa</h4>
                                            </div>
                                        </a>
                                        <a href="#" className="media tm-media tm-recommended-item">
                                            <img src="https://source.unsplash.com/200x40/weekly?bar" alt="Image" />
                                            <div className="media-body tm-media-body tm-bg-gray">
                                                <h4 className="text-uppercase tm-font-semibold tm-sidebar-item-title">South America</h4>
                                            </div>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="tm-section tm-section-pad tm-bg-img tm-position-relative" id="tm-section-6">
                <div className="container ie-h-align-center-fix">
                    <div className="row">
                        <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6 col-xl-5 mt-3 mt-md-0">
                            <div className="tm-bg-white tm-p-4">
                                <form action="index.html" method="post" className="contact-form">
                                    <div className="form-group">
                                        <input type="text" id="contact_name" name="contact_name" className="form-control" placeholder="Name" required />
                                    </div>
                                    <div className="form-group">
                                        <input type="email" id="contact_email" name="contact_email" className="form-control" placeholder="Email" required />
                                    </div>
                                    <div className="form-group">
                                        <input type="text" id="contact_subject" name="contact_subject" className="form-control" placeholder="Subject" required />
                                    </div>
                                    <div className="form-group">
                                        <textarea id="contact_message" name="contact_message" className="form-control" rows="9" placeholder="Message" required></textarea>
                                    </div>
                                    <button type="submit" className="btn btn-primary tm-btn-primary">Send Message Now</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <footer className="tm-bg-dark-blue">
                <div className="container">
                    <div className="row">
                        <p className="col-sm-12 text-center tm-font-light tm-color-white p-4 tm-margin-b-0">
                            Copyright <span className="tm-current-year">2023</span> TheHotell
                        </p>
                    </div>
                </div>
            </footer>
        </div>
    )
}

export default Home;