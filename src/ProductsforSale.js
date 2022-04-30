import inStock from "./InStock"
import useState from "react"

export default function ProductsforSale() {
    return (
        <section className="containerbody" id="ProductsForSale">
            <div className="Product-Top-1">
                <div className="Product-mosaic product1-img">
                    <span className="preOrder">
                        <p>Pre-Order</p>
                    </span>
                    <div>
                        <h3>MINI CONSOLE</h3>
                        <p>Ideal for everyday shortcuts. Adaptable to any workflow.</p>
                    </div>
                    <div className='Product-Price'>
                        <p className='discount'>US$ 149</p>
                        <p className='regular-price'>US$ 249</p>
                    </div>
                </div>
                <div className="Product-mosaic product2-img">
                    <span className="inStock">
                        <p>In Stock</p>
                    </span>
                    <div>
                        <h3>TRAVELER CONSOLE</h3>
                        <p>Ideal for music and audio. Adaptable to any workflow..</p>
                    </div>
                    <div className='Product-Price'>
                        <p className='discount'>US$ 399</p>
                        <p className='regular-price'>US$ 499</p>
                    </div>
                </div>
                <div className="Product-mosaic product3-img">
                    <span className="inStock">
                        <p>In Stock</p>
                    </span>
                    <div>
                        <h3>STUDIO CONSOLE</h3>
                        <p>Ideal for photo and video. Adaptable to any workflow.</p>
                    </div>
                    <div className='Product-Price'>
                        <p className='discount'>US$ 499</p>
                        <p className='regular-price'>US$ 599</p>
                    </div>

                </div>
                <div className="Product-mosaic product4-img">
                    <span className="inStock">
                        <p>In Stock</p>
                    </span>
                    <div>
                        <h3>MASTER CONSOLE</h3>
                        <p>Ideal for Virtual Production and Film. Adaptable to any workflow.</p>
                    </div>
                    <div className='Product-Price'>
                        <p className='discount'>US$ 799</p>
                        <p className='regular-price'>US$ 1.099</p>
                    </div>

                </div>
            </div>

        </section>)
}