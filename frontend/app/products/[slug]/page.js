import Product from "@/components/products/Product";
import { getFetch } from "@/utils/fetch";
import { getBlurDataURL, numberFormat, salePercent } from "@/utils/helper";
import Image from "next/image";

export default async function ProductPage({ params }) {
    const product = await getFetch(`/products/${decodeURI(params.slug)}`);
    const randomProduct = await getFetch('/random-products?count=4');

    return (
        <>
            <section className="single_page_section layout_padding">
                <div className="container">
                    <div className="row">
                        <div className="col-md-10 offset-md-1">
                            <div className="row gy-5">
                                <div className="col-sm-12 col-lg-6">
                                    <h3 className="fw-bold mb-4">{product.names}</h3>
                                    <h5 className="mb-3">
                                        {product.is_sale ? (
                                            <>
                                                <span>{numberFormat(product.sale_price)}</span>
                                                <del className="me-1">{numberFormat(product.price)}</del>
                                            </>
                                        ) : (
                                            <span>{numberFormat(product.price)}</span>
                                        )}
                                        <span>تومان</span>

                                        {product.is_sale &&
                                            <div className="text-danger fs-6">
                                                {salePercent(product.price, product.sale_price)}% تخفیف
                                            </div>}
                                    </h5>
                                    <p>{product.description}</p>

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

                                            {product.images.map((img, index) => (
                                                <button key={index} type="button" data-bs-target="#carouselExampleIndicators"
                                                    data-bs-slide-to={index + 1}></button>
                                            ))}
                                        </div>

                                        <div className="carousel-inner">
                                            <div className="carousel-item active">
                                                <Image src={product.primary_image} placeholder='blur' blurDataURL={getBlurDataURL()} width={464} height={309} className="d-block w-100" alt="product-primary-image" />
                                            </div>
                                            {product.images.map(img => (
                                                <div key={img.id} className="carousel-item">
                                                    <Image src={img.image} placeholder='blur' blurDataURL={getBlurDataURL()} width={464} height={309} className="d-block w-100" alt="product-image" />
                                                </div>
                                            ))}
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
                        {randomProduct.map((product, index) => (
                            <div key={index} className="col-sm-6 col-lg-3">
                                <Product product={product} />
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </>
    )
}