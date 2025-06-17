import Product from "@/components/products/Product";
import { getFetch } from "@/utils/fetch"
import { getBlurDataUrl, numberFormat } from "@/utils/helper";
import Image from "next/image";

export default async function ProductsPage({ params }) {

    const product = await getFetch(`/products/${decodeURI(params.slug)}`)
    const randomProductCount = 4
    const randomProducts = await getFetch(`/random-products?count=${randomProductCount}`)

    return (
        <>
            <section className="single_page_section layout_padding">
                <div className="container">
                    <div className="row">
                        <div className="col-md-10 offset-md-1">
                            <div className="row gy-5">
                                <div className="col-sm-12 col-lg-6">
                                    <h3 className="fw-bold mb-4">{product.name}</h3>
                                    <h5 className="mb-3">
                                        {product.is_sale ?
                                            <>
                                                <del>{numberFormat(product.price)}</del>
                                                {numberFormat(product.sale_price)}
                                                تومان
                                            </>
                                            :
                                            product.price
                                        }

                                        <div className="text-danger fs-6">
                                            {Math.round((product.price - product.sale_price) / product.price * 100)}%
                                            تخفیف
                                        </div>
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
                                                <button type="button" data-bs-target="#carouselExampleIndicators"
                                                    data-bs-slide-to={index + 1}></button>
                                            ))}
                                        </div>

                                        <div className="carousel-inner">
                                            <div className="carousel-item active">
                                                <Image src={product.primary_image} placeholder="blur" blurDataURL={getBlurDataUrl()} width={464} height={309} className="d-block w-100" alt="..." />
                                            </div>
                                            {product.images.map(img => (
                                                <div className="carousel-item">
                                                    <Image src={img.image} placeholder="blur" blurDataURL={getBlurDataUrl()} width={464} height={309} className="d-block w-100" alt="..." />
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
                        {randomProducts.map(product => (
                            <div key={product.id} class="col-sm-6 col-lg-3">
                                <Product product={product} />
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </>

    )
}