import { getBlurDataUrl, numberFormat } from "@/utils/helper";
import Image from "next/image";
import Link from "next/link";

export default function Product({ product }) {
    return (
        <div className="box" role="button">
            <Link href={`/products/${product.slug}`} className="text-white">
                <div>
                    <div className="img-box">
                        <Image
                            className="img-fluid"
                            src={product.primary_image}
                            alt=""
                            width={100}
                            height={65}
                            sizes="100vw"
                            style={{
                                width: '100%'
                            }}
                            placeholder="blur"
                            blurDataURL={getBlurDataUrl()} />
                    </div>
                    <div className="detail-box">
                        <h5>
                            {product.name}
                        </h5>
                        <p>
                            {product.description}
                        </p>
                        <div className="options">
                            <h6>

                                {product.is_sale ?
                                    (<>
                                        {numberFormat(product.sale_price)}
                                        <del>{numberFormat(product.price)}</del>
                                    </>)
                                    :
                                    numberFormat(product.price)
                                }

                                <span>تومان</span>
                            </h6>
                            <a href="">
                                <i className="bi bi-cart-fill text-white fs-5"></i>
                            </a>
                        </div>
                    </div>
                </div>
            </Link>
        </div>
    )
}