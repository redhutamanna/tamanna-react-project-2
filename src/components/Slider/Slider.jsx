import React from 'react';
import './Slider.css';


const Slider = () => {
  return (
    <>
    <div className="container">
      <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src="https://images.unsplash.com/photo-1545587899-7383e00366fc?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGdpZnQlMjBpdGVtc3xlbnwwfHwwfHx8MA%3D%3D" className="d-block w-100 h-500 " alt="..."/ >
          </div>
          <div className="carousel-item">
            <img src="https://plus.unsplash.com/premium_photo-1670715051403-0f6f94436210?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fGdpZnQlMjBpdGVtc3xlbnwwfHwwfHx8MA%3D%3D" className="d-block w-100" alt="..."/>
          </div>
          <div className="carousel-item">
            <img src="https://plus.unsplash.com/premium_photo-1668166505655-8d8f6fa0620f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjl8fGdpZnQlMjBpdGVtc3xlbnwwfHwwfHx8MA%3D%3D" className="d-block w-100" alt="..."/>
          </div>
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls"
          data-bs-slide="prev">
          <span className="carousel-control-prev-icon buttones" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls"
          data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </div>
    </>
  
  )
}

export default Slider