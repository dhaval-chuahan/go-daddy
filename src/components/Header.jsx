import React, { Component } from 'react'

export default class Header extends Component {
  render() {
    return (
      <div>
        <section>
          <div >
            <div className="search-container">
              <input type="text" placeholder="Type the domain you want" />
              <button className='tw-font-sans tw-font-bold'>Search Domains</button>
              <div className="price-container">
                <span className="price tw-font-extrabold">₹ 125.21*/1st yr.</span>
                <span>Satisfy the world's buyers with .shop</span>
              </div>
            </div>
          </div>
        </section>



       
      </div>
    )
  }
}
