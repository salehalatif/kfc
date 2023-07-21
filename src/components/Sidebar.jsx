// functional Component (JSX)

function Sidebar(props) {

      
    return (
        <>
            <div className="col-lg-4 col-md-8">
                <div className="basket-conainet-sticky">
                    <div className="basket-items">
                        <div className="item-add">
                            <h3>Order Details</h3>
                            <div className="kfc-box-theme">
                                <span />
                                <span />
                                <span />
                            </div>
                        </div>
                        <div className="add-to-basket">
                            <div
                                className="kfc-basket"
                                style={{aspectRatio: "0 / 1"}}
                            >
                                <img
                                    src="https://www.kfcpakistan.com/static/media/kfc-meal.afc417f5d19998efd26b.png"
                                    alt=""
                                />
                                <h5 className="color-white mt-4 font-bold">
                                    You haven’t added any items in bucket yet
                                </h5>
                            </div>
                        </div>
                    </div>
                    <a href="/bucket">
                        <div className="kfc-card-price">
                            <div className="d-flex justify-content-between">
                                <div className="d-flex align-items-center gap-10">
                                    <h6 className="font-normal mb-0">0 Item</h6>
                                    <h5 className="kfc-mmm">| Rs 0</h5>
                                </div>
                                <div className="d-flex align-items-center">
                                    <h6 className="kfc-mmm px-2">View Bucket</h6>
                                    <i className="ri-arrow-right-s-line errow-line web-errow" />
                                </div>
                            </div>
                        </div>
                    </a>
                </div>
                <a href="/bucket">
                    <div className="mobile-cart">
                        <div className="d-flex justify-content-between align-items-baseline">
                            <div className="d-flex align-items-center gap-10">
                                <h6 className="font-normal mb-0">0 Item</h6>
                                <h5 className="kfc-mmm">| Rs 0</h5>
                            </div>
                            <div className="d-flex align-items-center ">
                                <h6 className="kfc-mmm px-2">View Bucket</h6>
                                <i className="ri-arrow-right-s-line errow-line" />
                            </div>
                        </div>
                    </div>
                </a>
            </div>
        </>
    )
}

export default Sidebar;