// functional Component (JSX)
//import {sum} from '../utils'

function Menu(props) {
   // const { age } = props;

    return (
        <>
            <div className="extra-mian" />
            <div className="w-100 bg-theme">
                <div className="category-container mobile-scroll">
                    <a href="./" className="category-active">Everyday Value</a>
                    <a href="./">Ala-Carte-&amp;-Combos</a>
                    <a href="./">Signature-Boxes</a>
                    <a href="./">Sharing</a>
                    <a href="./">Snacks-&amp;-Beverages</a>
                    <a href="./">Midnight (Start at 12 am)</a>
                </div>
            </div>
        </>
    )
    // return(
    //   <>
    //   <p> Menu ... </p>
    //   <p> Age++ = {sum(age, 1)}</p>
    //   </>
    // )
}

export default Menu;