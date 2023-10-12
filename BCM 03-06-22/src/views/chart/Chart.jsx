import React from 'react'
import './chart.css'
import  usermanual from '../../assets/images/manual 1.svg'
import  design from '../../assets/images/settings 1.png'
import  handshake from '../../assets/images/handshake 1.png'
import  interact from '../../assets/images/interact 1.png'
import  curveLine from '../../assets/images/Line 204.png'
import { CircularProgressbar } from 'react-circular-progressbar';



const Chart = () => {
    const percentage = 40;
  return (
    <div className="container">
      <div className="row">
      <div className="chart-page d-flex">
      <div className="chart">
         <div className="chart-details">
            <p>Envision, define and document the goals of your BCM program</p>
            <div className="chart-control">
                <div className="chart-control-detail ">
                    <h5>Policy</h5>
                    <span className='chart-control-active'>Approved</span>
                </div>
                <span className='circle circle-active'></span>
            </div>
            <div className="chart-control">
                <div className="chart-control-detail">
                    <h5>Procedures</h5>
                    <span>Awaiting Approval</span>
                </div>
                <span className='circle'></span>
            </div>
            <div className="chart-control chart-control-disable">
                <div className="chart-control-detail">
                    <h5>Playbook</h5>
                    <span>Not Approved</span>
                </div>
                <span className='circle'></span>
            </div>
            <div className="chart-control chart-control-disable">
                <div className="chart-control-detail">
                    <h5>Appetite</h5>
                    <span>Not Approved</span>
                </div>
                <span className='circle'></span>
            </div>
          </div>
         </div>
        <div className="chart-all">
           <div className="chart-nav ">
                <div className="chart-line">
                     <div className="chart-line-curve">
                         <img src={curveLine} alt="" />
                     </div>
                     <div className="chart-line-verticle"></div>
                </div>
           </div>
<div className="d-flex defin-design">
    <div className="define-mode chart-design">
        <svg xmlns="http://www.w3.org/2000/svg" width="336" height="336" viewBox="0 0 336 336" fill="none" className='round-wrapper'>
            <path d="M0 16C0 7.16344 7.16763 -0.0397508 15.9942 0.380874C54.6551 2.22325 92.749 10.7341 128.582 25.5765C169.347 42.4621 206.387 67.2116 237.588 98.4121C268.788 129.613 293.538 166.653 310.424 207.418C325.266 243.251 333.777 281.345 335.619 320.006C336.04 328.832 328.837 336 320 336H285.204C276.367 336 269.253 328.83 268.729 320.009C266.95 290.125 260.197 260.708 248.712 232.98C235.183 200.319 215.354 170.642 190.356 145.644C165.358 120.646 135.681 100.817 103.02 87.288C75.2925 75.803 45.8752 69.0497 15.9908 67.2714C7.16983 66.7466 0 59.6327 0 50.7961V16Z" fill="#3E66FB"/>
            <path d="M0 16C0 7.16344 7.16763 -0.0397508 15.9942 0.380874C54.6551 2.22325 92.749 10.7341 128.582 25.5765C169.347 42.4621 206.387 67.2116 237.588 98.4121C268.788 129.613 293.538 166.653 310.424 207.418C325.266 243.251 333.777 281.345 335.619 320.006C336.04 328.832 328.837 336 320 336H285.204C276.367 336 269.253 328.83 268.729 320.009C266.95 290.125 260.197 260.708 248.712 232.98C235.183 200.319 215.354 170.642 190.356 145.644C165.358 120.646 135.681 100.817 103.02 87.288C75.2925 75.803 45.8752 69.0497 15.9908 67.2714C7.16983 66.7466 0 59.6327 0 50.7961V16Z" fill="white" fill-opacity="0.5"/>
        </svg>
            <div className="define-shape ">
            <div class="shape main-chart active">
           <div className="title-curve">
                <div className="chart-title d-flex">
                    <h5 className='text-1'>D</h5>
                    <h5 className='text-2'>e</h5>
                    <h5 className='text-3'>f</h5>
                    <h5 className='text-4'>i</h5>
                    <h5 className='text-5'>n</h5>
                    <h5 className='text-6'>e</h5>
                    <h5 className='text-7 chart-text'>m</h5>
                    <h5 className='text-8 chart-text'>o</h5>
                    <h5 className='text-9 chart-text'>d</h5>
                    <h5 className='text-10 chart-text'>e</h5>
                </div>
           </div>
           <svg viewBox="0 0 100 100" className='round-progressbar'>
             <path id="blue-arc" d="M10 50 A50 20,0, 0 1 ,90,50" stroke='#dabdff' stroke-width='24' fill='none'>
             </path>
             <path id="arc" d="M10 50 A50 20,0, 0 1 ,90,50" stroke='#f8f2ff' stroke-width='24' fill='none' className='progress-text'>     
             </path>
             <circle xlinkHref='#arc' class="stroke-3" cx="35" cy="43" r="11" stroke='rgba(181, 123, 255, 1)' stroke-width='2' fill="rgba(207, 169, 255, 1)">
              </circle>
              <text x="35%"> 
                <textPath xlinkHref='#arc'>35%</textPath>
             </text>
           </svg>
        <div class="shape-inner shape-inner-2">
            <div class="shape-inner-inner">
            <img src={usermanual} alt="" />
            </div>
        </div>
        </div>
            </div>
        </div>
<div className="design-mode chart-design">
<svg xmlns="http://www.w3.org/2000/svg" width="336" height="336" viewBox="0 0 336 336" fill="none" className='round-wrapper'>
<path d="M0 16C0 7.16344 7.16763 -0.0397508 15.9942 0.380874C54.6551 2.22325 92.749 10.7341 128.582 25.5765C169.347 42.4621 206.387 67.2116 237.588 98.4121C268.788 129.613 293.538 166.653 310.424 207.418C325.266 243.251 333.777 281.345 335.619 320.006C336.04 328.832 328.837 336 320 336H285.204C276.367 336 269.253 328.83 268.729 320.009C266.95 290.125 260.197 260.708 248.712 232.98C235.183 200.319 215.354 170.642 190.356 145.644C165.358 120.646 135.681 100.817 103.02 87.288C75.2925 75.803 45.8752 69.0497 15.9908 67.2714C7.16983 66.7466 0 59.6327 0 50.7961V16Z" fill="#3E66FB"/>
<path d="M0 16C0 7.16344 7.16763 -0.0397508 15.9942 0.380874C54.6551 2.22325 92.749 10.7341 128.582 25.5765C169.347 42.4621 206.387 67.2116 237.588 98.4121C268.788 129.613 293.538 166.653 310.424 207.418C325.266 243.251 333.777 281.345 335.619 320.006C336.04 328.832 328.837 336 320 336H285.204C276.367 336 269.253 328.83 268.729 320.009C266.95 290.125 260.197 260.708 248.712 232.98C235.183 200.319 215.354 170.642 190.356 145.644C165.358 120.646 135.681 100.817 103.02 87.288C75.2925 75.803 45.8752 69.0497 15.9908 67.2714C7.16983 66.7466 0 59.6327 0 50.7961V16Z" fill="white" fill-opacity="0.5"/>
</svg>
    <div className="define-shape define-shape-2">
         <div className="define-circle"></div>
        <div class="shape shape-2 main-chart">
            <div className="title-curve">
                <div className="chart-title design-title d-flex">
                    <h5 className='text-1'>D</h5>
                    <h5 className='text-2'>e</h5>
                    <h5 className='text-3'>s</h5>
                    <h5 className='text-4'>i</h5>
                    <h5 className='text-5'>g</h5>
                    <h5 className='text-6'>n</h5>
                </div>
           </div>
           <svg viewBox="0 0 100 100" className='round-progressbar'>
             <path id="blue-arc" d="M10 50 A50 20,0, 0 1 ,90,50" stroke='#dabdff' stroke-width='24' fill='none'>
             </path>
             <path id="arc" d="M10 50 A50 20,0, 0 1 ,90,50" stroke='#f8f2ff' stroke-width='24' fill='none' className='progress-text'>     
             </path>
             <circle xlinkHref='#arc' class="stroke-3" cx="20" cy="46" r="11" stroke='rgba(181, 123, 255, 1)' stroke-width='2' fill="rgba(207, 169, 255, 1)">
              </circle>
              <text x="20%"> 
                <textPath xlinkHref='#arc'>20%</textPath>
             </text>
           </svg>
        <div class="shape-inner shape-inner-2">
            <div class="shape-inner-inner">
            <img src={design} alt="" />
            </div>
        </div>
     </div>
 </div>
 </div>
 </div>
        <div className="d-flex improove-embed">
        <div className="improve-mode chart-design">
        <svg xmlns="http://www.w3.org/2000/svg" width="336" height="336" viewBox="0 0 336 336" fill="none" className='round-wrapper'>
<path d="M0 16C0 7.16344 7.16763 -0.0397508 15.9942 0.380874C54.6551 2.22325 92.749 10.7341 128.582 25.5765C169.347 42.4621 206.387 67.2116 237.588 98.4121C268.788 129.613 293.538 166.653 310.424 207.418C325.266 243.251 333.777 281.345 335.619 320.006C336.04 328.832 328.837 336 320 336H285.204C276.367 336 269.253 328.83 268.729 320.009C266.95 290.125 260.197 260.708 248.712 232.98C235.183 200.319 215.354 170.642 190.356 145.644C165.358 120.646 135.681 100.817 103.02 87.288C75.2925 75.803 45.8752 69.0497 15.9908 67.2714C7.16983 66.7466 0 59.6327 0 50.7961V16Z" fill="#3E66FB"/>
<path d="M0 16C0 7.16344 7.16763 -0.0397508 15.9942 0.380874C54.6551 2.22325 92.749 10.7341 128.582 25.5765C169.347 42.4621 206.387 67.2116 237.588 98.4121C268.788 129.613 293.538 166.653 310.424 207.418C325.266 243.251 333.777 281.345 335.619 320.006C336.04 328.832 328.837 336 320 336H285.204C276.367 336 269.253 328.83 268.729 320.009C266.95 290.125 260.197 260.708 248.712 232.98C235.183 200.319 215.354 170.642 190.356 145.644C165.358 120.646 135.681 100.817 103.02 87.288C75.2925 75.803 45.8752 69.0497 15.9908 67.2714C7.16983 66.7466 0 59.6327 0 50.7961V16Z" fill="white" fill-opacity="0.5"/>
</svg>
    <div className="define-shape">
        <div class="shape shape-3  main-chart">
            <div className="title-curve">
                <div className="chart-title improve-title d-flex">
                    <h5 className='text-1'>i</h5>
                    <h5 className='text-2'>m</h5>
                    <h5 className='text-3'>p</h5>
                    <h5 className='text-4'>r</h5>
                    <h5 className='text-5'>o</h5>
                    <h5 className='text-6'>v</h5>
                    <h5 className='text-7'>e</h5>
                </div>
           </div>
          <svg viewBox="0 0 100 100" className='round-progressbar'>
             <path id="blue-arc" d="M10 50 A50 20,0, 0 1 ,90,50" stroke='#dabdff' stroke-width='24' fill='none'>
             </path>
             <path id="arc" d="M10 50 A50 20,0, 0 1 ,90,50" stroke='#f8f2ff' stroke-width='24' fill='none' className='progress-text'>    
             </path>
             <circle xlinkHref='#arc' class="stroke-3" cx="75" cy="45" r="11" stroke='rgba(181, 123, 255, 1)' stroke-width='2' fill="rgba(207, 169, 255, 1)">
              </circle>
              <text x="75%"> 
                <textPath xlinkHref='#arc'>75%</textPath>
             </text> 
           </svg>
        <div class="shape-inner shape-inner-2">
            <div class="shape-inner-inner">
            <img src={handshake} alt="" />
            </div>
        </div>
        </div>
        </div>
 </div>
 <div className="embed-mode chart-design">
         <svg xmlns="http://www.w3.org/2000/svg" width="336" height="336" viewBox="0 0 336 336" fill="none" className='round-wrapper'>
        <path d="M0 16C0 7.16344 7.16763 -0.0397508 15.9942 0.380874C54.6551 2.22325 92.749 10.7341 128.582 25.5765C169.347 42.4621 206.387 67.2116 237.588 98.4121C268.788 129.613 293.538 166.653 310.424 207.418C325.266 243.251 333.777 281.345 335.619 320.006C336.04 328.832 328.837 336 320 336H285.204C276.367 336 269.253 328.83 268.729 320.009C266.95 290.125 260.197 260.708 248.712 232.98C235.183 200.319 215.354 170.642 190.356 145.644C165.358 120.646 135.681 100.817 103.02 87.288C75.2925 75.803 45.8752 69.0497 15.9908 67.2714C7.16983 66.7466 0 59.6327 0 50.7961V16Z" fill="#3E66FB"/>
        <path d="M0 16C0 7.16344 7.16763 -0.0397508 15.9942 0.380874C54.6551 2.22325 92.749 10.7341 128.582 25.5765C169.347 42.4621 206.387 67.2116 237.588 98.4121C268.788 129.613 293.538 166.653 310.424 207.418C325.266 243.251 333.777 281.345 335.619 320.006C336.04 328.832 328.837 336 320 336H285.204C276.367 336 269.253 328.83 268.729 320.009C266.95 290.125 260.197 260.708 248.712 232.98C235.183 200.319 215.354 170.642 190.356 145.644C165.358 120.646 135.681 100.817 103.02 87.288C75.2925 75.803 45.8752 69.0497 15.9908 67.2714C7.16983 66.7466 0 59.6327 0 50.7961V16Z" fill="white" fill-opacity="0.5"/>
        </svg>
    <div className="define-shape">
        <div class="shape shape-4 main-chart">
             <div className="title-curve">
                <div className="chart-title embed-title d-flex">
                    <h5 className='text-1'>e</h5>
                    <h5 className='text-2'>m</h5>
                    <h5 className='text-3'>b</h5>
                    <h5 className='text-4'>e</h5>
                    <h5 className='text-5'>d</h5>
                </div>
           </div>
           <svg   viewBox="0 0 100 100" className='round-progressbar'>
             {/* <g id="id" stroke='green' strokeWidth=".2">
                <path d="M0 10 H100"></path>
                <path d="M0 20 H100"></path>
                <path d="M0 30 H100"></path>
                <path d="M0 40 H100"></path>
                <path d="M0 50 H100" strokeWidth="1"></path>
                <path d="M0 60 H100"></path>
                <path d="M0 70 H100"></path>
                <path d="M0 80 H100"></path>
                <path d="M0 90 H100"></path>
                <path d="M10 0 v100"></path>
                <path d="M20 0 v100"></path>
                <path d="M30 0 v100"></path>
                <path d="M40 0 v100"></path>
                <path d="M50 0 v100" strokeWidth="1"></path>
                <path d="M60 0 v100"></path>
                <path d="M70 0 v100"></path>
                <path d="M80 0 v100"></path>
                <path d="M90 0 v100"></path>
             </g> */}
             {/* <g id="points" fill="#000">
               <circle cx="10" cy="50" r="1"></circle>
               <circle cx="50" cy="50" r="1"> </circle>
               <circle cx="90" cy="50" r="1"></circle>
              </g> */}
             <path id="blue-arc" d="M10 50 A50 20,0, 0 1 ,90,50" stroke='#dabdff' stroke-width='24' fill='none'>
             </path>
             <path id="arc" d="M10 50 A50 20,0, 0 1 ,90,50" stroke='#f8f2ff' stroke-width='24' fill='none' className='progress-text'>     
             </path>
             <circle xlinkHref='#arc' class="stroke-3" cx="35" cy="42" r="11" stroke='rgba(181, 123, 255, 1)' stroke-width='2' fill="rgba(207, 169, 255, 1)">
              </circle>
              <text x="35%"> 
                <textPath xlinkHref='#arc'>35%</textPath>
             </text>
           </svg>
           </div>
         {/* <div className="chart-progress-status">
         <svg xmlns="http://www.w3.org/2000/svg" width="245" height="245" viewBox="0 0 245 245" fill="none" className='progress-status'>
        <path d="M230.132 244.715C238.186 244.715 244.76 238.18 244.28 230.141C242.66 202.988 236.522 176.26 226.087 151.066C213.789 121.376 195.763 94.3992 173.039 71.6753C150.316 48.9514 123.338 30.9259 93.6483 18.6278C68.455 8.1924 41.727 2.05432 14.5742 0.43436C6.53472 -0.0452826 0 6.52887 0 14.5826V65.2409C0 73.2946 6.54148 79.7566 14.5638 80.4679C31.2257 81.9453 47.5949 85.9522 63.1012 92.3751C83.1067 100.662 101.284 112.807 116.596 128.119C131.907 143.431 144.053 161.608 152.34 181.614C158.763 197.12 162.769 213.489 164.247 230.151C164.958 238.173 171.42 244.715 179.474 244.715H230.132Z" fill="#B57BFF"/>
        <path d="M230.132 244.715C238.186 244.715 244.76 238.18 244.28 230.141C242.66 202.988 236.522 176.26 226.087 151.066C213.789 121.376 195.763 94.3992 173.039 71.6753C150.316 48.9514 123.338 30.9259 93.6483 18.6278C68.455 8.1924 41.727 2.05432 14.5742 0.43436C6.53472 -0.0452826 0 6.52887 0 14.5826V65.2409C0 73.2946 6.54148 79.7566 14.5638 80.4679C31.2257 81.9453 47.5949 85.9522 63.1012 92.3751C83.1067 100.662 101.284 112.807 116.596 128.119C131.907 143.431 144.053 161.608 152.34 181.614C158.763 197.12 162.769 213.489 164.247 230.151C164.958 238.173 171.42 244.715 179.474 244.715H230.132Z" fill="#F8F2FF"/>
        </svg>
        <svg xmlns="http://www.w3.org/2000/svg" width="129" height="179" viewBox="0 0 129 179" fill="none" className='progress-bar-shape'>
            <path d="M41.0844 173.578C47.3328 179.826 57.5042 179.858 63.3588 173.239C82.5215 151.575 97.9824 126.852 109.079 100.063C120.176 73.273 126.725 44.8591 128.493 15.9902C129.034 7.17018 121.819 7.62939e-05 112.983 7.62939e-05H62.4151C53.5785 7.62939e-05 46.4893 7.17769 45.7001 15.9789C44.0845 33.9962 39.7426 51.6959 32.7965 68.4654C25.8503 85.2349 16.4049 100.821 4.80718 114.703C-0.85817 121.485 -0.920688 131.573 5.3277 137.821L41.0844 173.578Z" fill="#9948FF" fill-opacity="0.4"/>
        </svg>
         <div className="progress-bar">35%</div>
         </div> */}
        <div class="shape-inner shape-inner-2">
            <div class="shape-inner-inner">
            <img src={interact} alt="" />
            </div>
        </div>
</div>
    </div>
 </div>
 </div>
    </div>
</div>
</div>


  )
}
export default Chart


