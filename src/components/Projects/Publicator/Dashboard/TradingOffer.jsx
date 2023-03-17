import React from 'react'

export default function TradingOffer() {
  return (
    <div className='trading'>
      <div className="trading-text">
        <p className='for-skalp'>Your trading offers for “SKALP”</p>
        <select className='sort'>
            <option>Sort</option>
        </select>
      </div>
      <div className="lord-item">
        <div className="lord">
            <div className="lord-img">
                <img className="lord-img1" src="/images/vector.png" alt="" />
            </div>
            <div className="lord-text">
                <p>OFFER “LORD HANDSOME”: <span className='text-success'> + </span>  0,0016 ETH </p>
                <p>19-04-2022</p>
            </div>
            <div className="btn-lord">
                <button className='buy-now1'>Accept</button>
            </div>
        </div>
        <div className="lord">
            <div className="lord-img">
                <img className="lord-img1" src="/images/vector3.png" alt="" />
            </div>
            <div className="lord-text">
                <p>OFFER “LORD HANDSOME”: <span className='text-success'> + </span>  0,0016 ETH </p>
                <p>19-04-2022</p>
            </div>
            <div className="btn-lord">
                <button className='buy-now1'>Accept</button>
            </div>
        </div>
        <div className="lord">
            <div className="lord-img">
                <img className="lord-img1" src="/images/vector4.png" alt="" />
            </div>
            <div className="lord-text">
                <p>OFFER “LORD HANDSOME”: <span className='text-success'> + </span>  0,0016 ETH </p>
                <p>19-04-2022</p>
            </div>
            <div className="btn-lord">
                <button className='buy-now1'>Accept</button>
            </div>
        </div>
        <div className="lord">
            <div className="lord-img">
                <img className="lord-img1" src="/images/vector5.png" alt="" />
            </div>
            <div className="lord-text">
                <p>OFFER “LORD HANDSOME”: <span className='text-success'> + </span> 0,0016 ETH </p>
                <p>19-04-2022</p>
            </div>
            <div className="btn-lord">
                <button className='buy-now1'>Accept</button>
            </div>
        </div>
      </div>
    </div>
  )
}
