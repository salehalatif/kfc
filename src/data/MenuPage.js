import React from 'react'
import KfcCard from '../component/KfcCard'

let Menudata = [
  {
    id: 1,
    title: '3 Pcs Chicken',
    description: '3 pieces of Hot and Crispy Fried Chicken ',
    img: 'pcschicken.png',
    price: 620

  },
  {
    id: 2,
    title: 'showerma',
    description: 'this burger is very famus ',
    img: 'pcschicken.png',
    price: 600
  },
  {
    id: 3,
    title: 'Zinger burger',
    description: 'this burger is very famus ',
    img: 'pcschicken.png',
    price: 600
  },
  {
    id: 4,
    title: 'chicken burger',
    description: 'this burger is very famus ',
    img: 'pcschicken.png',
    price: 600
  },
  {
    id: 5,
    title: 'burger',
    description: 'this burger is very famus ',
    img: 'pcschicken.png',
    price: 600
  },
]

export default function MenuPage() {
  return (
    <>
      <div className="row row-cols-1 row-cols-md-3">
        {
          Menudata.map(item => (
            <KfcCard item={item} />
          ))
        }
      </div>
    </>
  )
}
