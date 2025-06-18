import { getBlurDataURL, numberFormat } from "@/utils/helper";
import Image from "next/image";
import Link from "next/link";

export default function Product({ product }) {
    return (
        <div className="box">
            <div>
                <div className="img-box">
                    <Image src={product.primary_image}
                        width="100"
                        height="65"
                        sizes="100vw"
                        style={{
                            width: "100%",
                            height: "auto"
                        }}
                        alt="product-image"
                        placeholder="blur"
                        blurDataURL={getBlurDataURL()}
                    />
                </div>
                <div className="detail-box">
                    <h5>
                        <Link href={`/products/${product.slug}`}>
                            {product.name}
                        </Link>
                    </h5>
                    <p>
                        {product.description}
                    </p>
                    <div className="options">
                        <h6>
                            {product.is_sale ? (
                                <>
                                    <span>{numberFormat(product.sale_price)}</span>
                                    <del className="me-1">{numberFormat(product.price)}</del>
                                </>
                            ) : (
                                <span>{numberFormat(product.price)}</span>
                            )}
                            <span>تومان</span>
                        </h6>
                        <a href="">
                            <i className="bi bi-cart-fill text-white fs-5"></i>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}