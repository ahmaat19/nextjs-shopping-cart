import React from 'react'
import { products } from '../utils/data'
import Image from 'next/image'
import { FaCartPlus, FaTimesCircle } from 'react-icons/fa'
import { useCart } from 'react-use-cart'

export default function Home() {
  const { addItem, inCart, removeItem } = useCart()

  if (products.length > 0) {
    return (
      <div className='row g-3'>
        {products.map((product) => (
          <div key={product.id} className='col-md-3 col-12'>
            <div className='card border-0 shadow'>
              <Image
                src={product.image}
                width='150'
                height='150'
                priority
                className='card-img-top img-fluid image'
                alt={product.name}
              />

              <div className='card-body text-center'>
                <h6 className='card-title fw-light'>{product.name}</h6>
                <div className='card-text text-center'>
                  <div className='d-flex justify-content-around'>
                    <button className='btn btn-dark btn-sm rounded-0 shadow '>
                      ${product.price}
                    </button>
                    {inCart(product.id) && (
                      <button
                        onClick={() => removeItem(product.id)}
                        className='btn btn-danger btn-sm rounded-pill'
                      >
                        <FaTimesCircle className='mb-1' />
                      </button>
                    )}

                    <button
                      onClick={() => addItem(product)}
                      className='btn btn-primary btn-sm rounded-pill'
                    >
                      <FaCartPlus className='mb-1' />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    )
  } else <div>Nothing to display</div>
}
