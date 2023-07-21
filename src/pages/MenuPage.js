import React from 'react';
import Header from '../components/Header';
import Menu from '../components/Menu';
import Sidebar from '../components/Sidebar';
import KfcCard from '../components/KfcCard';

import categoryList from '../jsondata/categoryList.json';
//import productList from '../jsondata/productList.json';

/*
let categoryList = [
    {
        "category_id": 1,
        "category_name": "Everyday Value",
        "category_images": "afc4e8b0-ff99-11ed-8640-872ee63b5da0-Krunch-2023-05-31095826.png",
        "product_id": [
            {
                "product_id": 1
            },
            {
                "product_id": 2
            },
            {
                "product_id": 3
            },
            {
                "product_id": 4
            },
            {
                "product_id": 5
            }
        ],
        "product_items": 5
    },
    {
        "category_id": 2,
        "category_name": "Ala-Carte-&-Combos",
        "category_images": "afc4e8b0-ff99-11ed-8640-872ee63b5da0-alacart-2023-05-31095826.png",
        "product_id": [
            {
                "product_id": 7
            },
            {
                "product_id": 8
            },
            {
                "product_id": 9
            },
            {
                "product_id": 10
            },
            {
                "product_id": 6
            }
        ],
        "product_items": 5
    },
    {
        "category_id": 3,
        "category_name": "Signature-Boxes",
        "category_images": "afc536d0-ff99-11ed-a006-17c81341cbe8-Signaturebox-2023-05-31095826.png",
        "product_id": [],
        "product_items": 0
    },
    {
        "category_id": 4,
        "category_name": "Sharing",
        "category_images": "afc4e8b0-ff99-11ed-8640-872ee63b5da0-Sharing-2023-05-31095826.png",
        "product_id": [],
        "product_items": 0
    },
    {
        "category_id": 5,
        "category_name": "Snacks-&-Beverages",
        "category_images": "afc4e8b0-ff99-11ed-8640-872ee63b5da0-Snacks-2023-05-31095826.png",
        "product_id": [
            {
                "product_id": 29
            },
            {
                "product_id": 37
            },
            {
                "product_id": 13
            },
            {
                "product_id": 21
            },
            {
                "product_id": 30
            },
            {
                "product_id": 38
            },
            {
                "product_id": 14
            },
            {
                "product_id": 22
            },
            {
                "product_id": 23
            },
            {
                "product_id": 31
            },
            {
                "product_id": 15
            },
            {
                "product_id": 24
            },
            {
                "product_id": 32
            },
            {
                "product_id": 16
            },
            {
                "product_id": 25
            },
            {
                "product_id": 33
            },
            {
                "product_id": 17
            },
            {
                "product_id": 26
            },
            {
                "product_id": 34
            },
            {
                "product_id": 18
            },
            {
                "product_id": 27
            },
            {
                "product_id": 35
            },
            {
                "product_id": 11
            },
            {
                "product_id": 19
            },
            {
                "product_id": 28
            },
            {
                "product_id": 36
            },
            {
                "product_id": 12
            },
            {
                "product_id": 20
            }
        ],
        "product_items": 28
    },
    {
        "category_id": 6,
        "category_name": "Midnight (Start at 12 am)",
        "category_images": "afc49a90-ff99-11ed-aad1-a133693e27ae-Midnight-2023-05-31095826.png",
        "product_id": [],
        "product_items": 0
    }
]
*/

let productList = [
    {
      "product_id": 1,
      "product_name": "3 Pcs Chicken",
      "image_url": "43aa4970-ffaa-11ed-9c55-3705f003c528-3pc-Chikcen_variant_0-2023-05-31115706.png",
      "description": "3 pieces of Hot and Crispy Fried Chicken",
      "alt_text": "Delicious 3-piece chicken meal with crispy golden skin and tender meat",
      "price": 620
    },
    {
      "product_id": 3,
      "product_name": "Krunch Burger",
      "image_url": "43a9fb50-ffaa-11ed-8180-812e571998fe-krunch_variant_0-2023-05-31115706.png",
      "description": "Krunch fillet, spicy mayo, lettuce, sandwiched between a sesame seed bun",
      "alt_text": "",
      "price": 270
    },
    {
      "product_id": 4,
      "product_name": "Rice & Spice",
      "image_url": "43a95f10-ffaa-11ed-b673-4121381f04c6-rice-and-spice_variant_0-2023-05-31115706.png",
      "description": "Spiced and buttery rice with 6 pcs of Hot Shots topped with our signature Vietnamese sauce",
      "alt_text": "Flavorful Rice & Spice: Spiced and buttery rice with 5 pieces of Hot Shots topped with our signature Vietnamese sauce",
      "price": 350
    },
    {
      "product_id": 5,
      "product_name": "Zingeratha",
      "image_url": "43a9fb50-ffaa-11ed-8180-812e571998fe-zingeratha_variant_0-2023-05-31115706.png",
      "description": "Tender boneless strips, sliced onions, tangy imli chutney, mint mayo, wrapped in a soft paratha",
      "alt_text": "Zingeratha: Tender boneless strips, sliced onions, tangy imli chutney, and mint mayo wrapped in a soft paratha",
      "price": 350
    },
    {
      "category_id": 2,
      "product_id": 6,
      "product_name": "Zinger Burger",
      "image_url": "6249b820-0513-11ee-9e45-cb0ed000d4a6-Zinger_variant_0-2023-06-07091210.png",
      "description": "Our hero- crispy Zinger fillet, signature mayo and lettuce- sandwiched between a sesame seed bun",
      "alt_text": "Zinger Burger: A scrumptious burger with a flavorful zinger patty, fresh lettuce, mayo, and a toasted bun",
      "price": 550
    },
    {
      "product_id": 7,
      "product_name": "Kentucky Burger",
      "image_url": "332ab600-0461-11ee-8f91-addd12cf7fa1-Kentucky_variant_0-2023-06-06115641.png",
      "description": "OG Zinger fillet layered with beef pepperoni, crispy fried onions, cheese and smokey BBQ sauce- sandwiched between an herb and black sesame bun",
      "alt_text": "Kentucky Burger: Kentucky Burger: An irresistible combination of an OG Zinger fillet, beef pepperoni, crispy fried onions, cheese, and smokey BBQ sauce, sandwiched between an herb and black sesame bun",
      "price": 590
    },
    {
      "product_id": 8,
      "product_name": "Mighty Zinger",
      "image_url": "33685b40-0461-11ee-911c-497570899609-Mighty_variant_0-2023-06-06115641.png",
      "description": "Our signature Zinger but Bigger! Double Zinger fillet with a combination of spicy and plain mayo, lettuce and cheese- sandwiched between a sesame seed bun",
      "alt_text": "Mighty Zinger: Our signature Zinger, but bigger! Double Zinger fillet with a combination of spicy and plain mayo, lettuce, and cheese, all sandwiched between a sesame seed bun",
      "price": 700
    },
    {
      "product_id": 9,
      "product_name": "Twister",
      "image_url": "337af8e0-0461-11ee-a89a-612c84c58a93-twister_variant_0-2023-06-06115641.png",
      "description": "Tender boneless strips, black pepper mayo, diced tomatoes and lettuce- wrapped in a tortilla  ",
      "alt_text": "Twister: Delicious tender boneless strips, black pepper mayo, diced tomatoes, and lettuce, all wrapped in a tortilla",
      "price": 400
    },
    {
      "product_id": 10,
      "product_name": "Zinger Stacker",
      "image_url": "33685b40-0461-11ee-911c-497570899609-Stacker_variant_0-2023-06-06115641.png",
      "description": "Double krunch fillet, jalapenos, spicy mayo, lettuce and cheese with our signature Vietnamese sauce- sandwiched between a sesame seed bun",
      "alt_text": "Zinger Stacker: A delicious combination of double crunch chicken fillet, jalapenos, spicy mayo, lettuce, and cheese, with our signature Vietnamese sauce, all sandwiched between a sesame seed bun",
      "price": 590
    }
  ]

export default function MenuPage(props) {
    //let person = "Muhmmad Ahmad 123";


    return (
        <div className='container'>
            {/* <Header p={person} age={props.age}/> */}
            <Header />
            <Menu />
            <div id="Productmain-height" className="main-height">
                <div id="Productcontainer-xxl" className="container-xxl category-container-custom mt-170 mb-md-100">
                    <div className="row" id="Productrow">
                        <div id="ProductleftBar" className="col-lg-8 col-md-12">
                            {
                                categoryList.map(catgoryItem => (
                                    <div key={"Category"+catgoryItem.category_id} id={"Category"+catgoryItem.category_id} name={catgoryItem.category_name} className="element">
                                        <div key={"mainRow"+catgoryItem.category_id} id={"mainRow"+catgoryItem.category_id} className="row">
                                            <h2 key={"heading"+catgoryItem.category_id} id={"heading"+catgoryItem.category_id} className="menu-title mt-0">
                                                <span>{catgoryItem.category_name}</span>
                                            </h2>
                                            {
                                                productList.map(productItem => (
                                                    // <div class="col">
                                                    <KfcCard productItem={productItem} catgoryItem={catgoryItem} />
                                                    // </div>
                                                ))
                                            }
                                        </div>
                                    </div>
                                ))
                            }
                        </div>
                        <Sidebar />
                    </div>
                </div>
            </div>

        </div >
    )
}

// Header 


