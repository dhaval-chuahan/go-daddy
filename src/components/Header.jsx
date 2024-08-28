import React, { Component } from 'react'

export default class Header extends Component {
  render() {
    return (
      <div>
        <section>
          <div>
            <div className="search-container">
              <input type="text" className='input-1' placeholder="Type the domain you want" />
              <div className='part-b'><svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="white" class="bi bi-search" viewBox="0 0 16 16">
  <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0"/>
</svg></div>
              <button className='tw-font-sans tw-font-bold input-2 -tw-ml-10  '>Search Domains</button>
              
              <div className="price-container">
                <span className="price tw-font-extrabold">₹ 125.21*/1st yr.</span>
                <span>Satisfy the world's buyers with.shop</span>
              </div>
            </div>
          </div>
        </section>
        
        <section className="image-section">
          <img src="https://img1.wsimg.com/cdnassets/transform/a4a12cf6-d7d3-4475-b371-0ac1f38c0ac8/mrq-hp-airo-landscape" alt="" className='img-sec' />
    <div className="left-content">
        <div className="badge">NEW</div>
        <h1>Put your domain into action with AI.</h1>
        <p>Buy a new domain and get GoDaddy Airo™, our customizable, AI-powered solution that can easily deliver a website, logo, and more.</p>
        <button className="learn-more-btn">Learn More</button>
    </div>
    <div className="right-content">
       
        <div className="call-to-action">
            <h2>Find the perfect domain and business name with AI.</h2>
            <button className="ai-search-btn">Try AI Domain Search</button>
        </div>
    </div>
</section>



       
      </div>
    )
  }
}
