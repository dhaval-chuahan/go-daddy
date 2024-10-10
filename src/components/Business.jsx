import React, { Component } from 'react'

export default class Business extends Component {
  render() {
    return (
      <>
        <div>
          <h1 className='tw-text-center tw-text-5xl tw-font-bold tw-font-sans help'>What can we help you with?</h1>
          <div className='Do-cir'>
            <div className='round-cir'>Domain</div>
            <div className='round-cir'>Recommended</div>
            <div className='round-cir'>WordPress and security</div>
          </div>
          <div className="bus-flex">
            <div className='main-div1'>
            <div className="bus-div1 div-center">
              <div className='Do-sec'>
                  <div className='all-det'>
                    <h1 className='tw-font-bold tw-text-2xl max-sm:tw-mt-32 max-sm:-tw-ml-16 header-1'>Domains</h1>
                   <div className='div-text1'>
                   <p className='domain-pera max-sm:tw-hidden'>Get started with the perfect domain, which comes with free domain privacy protection forever.</p>
                    <br />
                    <button className='Do-btn max-sm:tw-hidden'>Search Domain</button>
                   </div>
                   <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-arrow-right right-arrow" viewBox="0 0 16 16">
                      <path fill-rule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8" />
                    </svg>
                  </div>
                
              </div>

            </div>
            </div>
            <div className="bus-div2 div-center">
              <div className="bus-sub-div1">
                  <div className='all-det1'>
                    <h2 className='tw-font-bold tw-text-2xl max-sm:tw-hidden '>.co for ₹ 1.00/1st year</h2><br />
                    <div className='div-text1'>
                    <p className='domain-pera-1 max-sm:tw-hidden'>Ensure your company and website stand out with a .co domain. 3-year purchase required. Additional year(s) ‪₹ 3,299.00‬.</p>
                    <br />
                    <button className='Do-btn max-sm:tw-hidden'>Find Your Domain</button>
                    </div>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-arrow-right right-arrow tw-hidden" viewBox="0 0 16 16">
                      <path fill-rule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8" />
                    </svg>
                  </div>
              </div>
              <div className="bus-sub-div2">
                   <div className='all-det2'>
                   <h2 className='tw-font-bold tw-text-2xl max-sm:tw-hidden '>.in ‪₹ 1.00‬/1st yr</h2><br />
                    <div className='div-text1'>
                    <p className='domain-pera-1 max-sm:tw-hidden'>Boost your local impact with our localized top-level domains.</p>
                    <br />
                    <button className='Do-btn max-sm:tw-hidden'>Get Started</button>
                    </div>
                   </div>
                  
              </div>
            </div>
          </div>
        </div>
      </>

    )
  }
}
