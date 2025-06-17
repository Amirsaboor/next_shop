export default function MmenuPage() {
    return (
        <section className="food_section layout_padding">
            <div className="container">
                <div className="row">
                    <div className="col-sm-12 col-lg-3">
                        <div>
                            <label className="form-label">جستجو</label>
                            <div className="input-group mb-3">
                                <input type="text" className="form-control" placeholder="نام محصول ..." />
                                <a href="#" className="input-group-text">
                                    <i className="bi bi-search"></i>
                                </a>
                            </div>
                        </div>
                        <hr />
                        <div className="filter-list">
                            <div className="form-label">
                                دسته بندی
                            </div>
                            <ul>
                                <li className="my-2 cursor-pointer filter-list-active">پیتزا</li>
                                <li className="my-2 cursor-pointer">برگر</li>
                                <li className="my-2 cursor-pointer">پیش غذا و سالاد</li>
                                <li className="my-2 cursor-pointer">نوشیدنی</li>
                            </ul>
                        </div>
                        <hr />
                        <div>
                            <label className="form-label">مرتب سازی</label>
                            <div className="form-check my-2">
                                <input className="form-check-input" type="radio" name="flexRadioDefault" />
                                <label className="form-check-label cursor-pointer">
                                    بیشترین قیمت
                                </label>
                            </div>
                            <div className="form-check my-2">
                                <input className="form-check-input" type="radio" name="flexRadioDefault" checked />
                                <label className="form-check-label cursor-pointer">
                                    کمترین قیمت
                                </label>
                            </div>
                            <div className="form-check my-2">
                                <input className="form-check-input" type="radio" name="flexRadioDefault" />
                                <label className="form-check-label cursor-pointer">
                                    پرفروش ترین
                                </label>
                            </div>
                            <div className="form-check my-2">
                                <input className="form-check-input" type="radio" name="flexRadioDefault" />
                                <label className="form-check-label cursor-pointer">
                                    با تخفیف
                                </label>
                            </div>
                        </div>
                    </div>


                    <div className="col-sm-12 col-lg-9">
                        <div className="row gx-3">

                            <div className="col-sm-6 col-lg-4">
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
                                                    144,000
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
                        
                        <nav className="d-flex justify-content-center mt-5">
                            <ul className="pagination">
                                <li className="page-item active"><a className="page-link" href="#">1</a></li>
                                <li className="page-item"><a className="page-link" href="#">2</a></li>
                                <li className="page-item"><a className="page-link" href="#">3</a></li>
                            </ul>
                        </nav>
                    </div>
                </div>
            </div>
        </section>
    )
}