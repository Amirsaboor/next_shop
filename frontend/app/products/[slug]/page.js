export default function Productspage() {
    return (
        <>
            <section className="single_page_section layout_padding">
                <div className="container">
                    <div className="row">
                        <div className="col-md-10 offset-md-1">
                            <div className="row gy-5">
                                <div className="col-sm-12 col-lg-6">
                                    <h3 className="fw-bold mb-4">پیتزا پپرونی</h3>
                                    <h5 className="mb-3">
                                        <del>165,000</del>
                                        135,000
                                        تومان
                                        <div className="text-danger fs-6">
                                            10% تخفیف
                                        </div>
                                    </h5>
                                    <p>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک
                                        است.</p>

                                    <div className="mt-5 d-flex">
                                        <button className="btn-add">افزودن به سبد خرید</button>
                                        <div className="input-counter ms-4">
                                            <span className="plus-btn">
                                                +
                                            </span>
                                            <div className="input-number">1</div>
                                            <span className="minus-btn">
                                                -
                                            </span>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-sm-12 col-lg-6">
                                    <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="carousel">
                                        <div className="carousel-indicators">
                                            <button type="button" data-bs-target="#carouselExampleIndicators"
                                                data-bs-slide-to="0" className="active"></button>
                                            <button type="button" data-bs-target="#carouselExampleIndicators"
                                                data-bs-slide-to="1"></button>
                                            <button type="button" data-bs-target="#carouselExampleIndicators"
                                                data-bs-slide-to="2"></button>
                                        </div>
                                        <div className="carousel-inner">
                                            <div className="carousel-item active">
                                                <img src="./images/p1.jpg" className="d-block w-100" alt="..." />
                                            </div>
                                            <div className="carousel-item">
                                                <img src="./images/p2.jpg" className="d-block w-100" alt="..." />
                                            </div>
                                            <div className="carousel-item">
                                                <img src="./images/p3.jpg" className="d-block w-100" alt="..." />
                                            </div>
                                        </div>
                                        <button className="carousel-control-prev" type="button"
                                            data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                                            <span className="carousel-control-prev-icon"></span>
                                            <span className="visually-hidden">Previous</span>
                                        </button>
                                        <button className="carousel-control-next" type="button"
                                            data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                                            <span className="carousel-control-next-icon"></span>
                                            <span className="visually-hidden">Next</span>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <hr />
            <section className="food_section my-5">
                <div className="container">
                    <div className="row gx-3">
                        <div className="col-sm-6 col-lg-3">
                            <div className="box">
                                <div>
                                    <div className="img-box">
                                        <img className="img-fluid" src="./images/b1.jpg" alt="" />
                                    </div>
                                    <div className="detail-box">
                                        <h5>
                                            لورم ایپسوم متن
                                        </h5>
                                        <p>
                                            لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده
                                            از
                                            طراحان
                                            گرافیک است.
                                        </p>
                                        <div className="options">
                                            <h6>
                                                <del>45,000</del>
                                                34,000
                                                <span>تومان</span>
                                            </h6>
                                            <a href="">
                                                <i className="bi bi-cart-fill text-white fs-5"></i>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-6 col-lg-3">
                            <div className="box">
                                <div>
                                    <div className="img-box">
                                        <img className="img-fluid" src="./images/p4.jpg" alt="" />
                                    </div>
                                    <div className="detail-box">
                                        <h5>
                                            لورم ایپسوم متن
                                        </h5>
                                        <p>
                                            لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده
                                            از
                                            طراحان
                                            گرافیک است.
                                        </p>
                                        <div className="options">
                                            <h6>
                                                121,000
                                                <span>تومان</span>
                                            </h6>
                                            <a href="">
                                                <i className="bi bi-cart-fill text-white fs-5"></i>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-6 col-lg-3">
                            <div className="box">
                                <div>
                                    <div className="img-box">
                                        <img className="img-fluid" src="./images/p1.jpg" alt="" />
                                    </div>
                                    <div className="detail-box">
                                        <h5>
                                            لورم ایپسوم متن
                                        </h5>
                                        <p>
                                            لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده
                                            از
                                            طراحان
                                            گرافیک است.
                                        </p>
                                        <div className="options">
                                            <h6>
                                                121,000
                                                <span>تومان</span>
                                            </h6>
                                            <a href="">
                                                <i className="bi bi-cart-fill text-white fs-5"></i>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-6 col-lg-3">
                            <div className="box">
                                <div>
                                    <div className="img-box">
                                        <img className="img-fluid" src="./images/b2.jpg" alt="" />
                                    </div>
                                    <div className="detail-box">
                                        <h5>
                                            لورم ایپسوم متن
                                        </h5>
                                        <p>
                                            لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده
                                            از
                                            طراحان
                                            گرافیک است.
                                        </p>
                                        <div className="options">
                                            <h6>
                                                51,000
                                                <span>تومان</span>
                                            </h6>
                                            <a href="">
                                                <i className="bi bi-cart-fill text-white fs-5"></i>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>

    )
}