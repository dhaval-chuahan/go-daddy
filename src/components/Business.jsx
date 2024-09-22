import React, { Component } from 'react'

export default class Business extends Component {
  render() {
    return (
      <div>
        <br />
        <h1 className='tw-text-center tw-text-5xl tw-font-bold tw-font-sans help'>What can we help you with?</h1>
        <div className='Do-cir'>
          <div className='round-cir'>Domain</div>
          <div className='round-cir'>Recommended</div>
          <div className='round-cir'>WordPress and security</div>
        </div>
        <br />
        <br />
        <br />
        <div>
          <img src="https://img1.wsimg.com/cdnassets/transform/ec1ec404-8337-4417-9c0a-a4bf5eeace3a/intl-img-hp-recore-domains-large-landscape" className='Do-sec' alt="" />
          <div className='all-det'>          
            <h1 className='tw-font-bold tw-text-2xl'>Domains</h1>
            <p className='domain-pera'>Get started with the perfect domain, which comes with free domain privacy protection forever.</p>
            <br />
            <button className='Do-btn'>Search Domain</button>
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-arrow-right right-arrow" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8"/>
</svg>
          </div>
        </div>
        <div>
          <img src="https://img1.wsimg.com/cdnassets/transform/fa9063d0-1ec3-4ab1-83e8-dbf6d03f9d3c/img-hp-recore-co-small" alt="" className='Do-sec-2' />
          <div className='sec-box'>
            <h2 className='tw-font-bold tw-text-2xl'>.co for ₹ 1.00/1st year</h2><br />
            <p className='domain-pera-1'>Ensure your company and website stand out with a .co domain. 3-year purchase required. Additional year(s) ‪₹ 3,299.00‬.</p>
            <br />
            <button className='Do-btn'>Find Your Domain</button>
          </div>
          <br />
          <img src="" alt="" />
          
        </div>
      </div>
    )
  }
}
