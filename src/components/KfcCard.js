//it will print only one card
// loop called from MenuPage.js
import React from "react";

export default function Card(props) {

    const catgoryData = props.catgoryItem;
    const productData = props.productItem;
    return (

        <div className="col-lg-4 col-md-4 col-6 px-larg-4" key={catgoryData.category_id+"_"+productData.product_id}>
            <div className="card menu-card ">
                <a href={"#item/" + productData.product_name} className="manu-img-item">
                    <img
                        className="card-img-top card-img"
                        src={"https://www.kfcpakistan.com/images/" + productData.image_url}
                        alt={productData.alt}
                    />
                </a>
                <div className="card-body p-0">
                    <div className="d-flex justify-content-between align-items-center">
                        <h5 className="card-title">{productData.product_name}</h5>
                        <span>
                            <div>
                                <button className="btn-item">
                                    {" "}
                                    <i className="ri-heart-line" />
                                </button>
                            </div>
                        </span>
                    </div>
                    <p className="card-text">
                        {productData.product_name}
                    </p>
                    <h4 className="kfc-price">Rs {productData.price} </h4>
                    <div className="price-label">
                        <div>
                            <button id={"btnId" + productData.product_id} className="ri-add-line rgeister-btn Add-web px-2">
                                <span>Add to bucket</span>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    );
}
