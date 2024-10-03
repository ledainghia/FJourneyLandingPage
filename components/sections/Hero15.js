import VideoPopup from "../elements/VidepPopup"
export default function Hero15() {
    return (
        <>
            <section id="hero-15" className="bg-scroll hero-section division">
                <div className="container">
                    <div className="row">
                        <div className="col-md-7 col-lg-6 col-xl-5">
                            <div className="hero-txt white-color">
                                <h2>We build websites for your business</h2>
                                <ul className="content-list">
                                    <li><p className="p-md">Ligula risus auctor augue egestas at mauris</p></li>
                                    <li><p className="p-md">Sagittis congue augue egestas egestas magna</p></li>
                                    <li><p className="p-md">
                                        Feugiat primis ligula risus auctor augue an egestas mauris viverra tortor
                                        in iaculis magna feugiat
                                    </p></li>
                                </ul>
                                <div className="hero-btns mt-30">
                                    <a href="#" className="btn btn-yellow tra-hover">Buy Now For - $15</a>
                                    <VideoPopup style={3} />
                                </div>
                            </div>
                        </div>
                        <div className="col-md-5 col-lg-6 col-xl-6 offset-xl-1">
                            <div className="hero-15-img text-center">
                                <img className="img-fluid" src="/images/hero-15-img.png" alt="hero-image" />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="bg-fixed hero-15-wave" />
            </section>
        </>
    )
}
