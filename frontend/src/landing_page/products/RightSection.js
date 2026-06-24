import React from "react";

function RightSection({
  imageURL,
  productName,
  productDescription,
  learnMore,
}) {
  return (
    <div className='container mt-5'>
            <div className='row align-items-center'>
                <div className='col-12 col-md-6 order-2 order-md-1 p-md-5 text-center text-md-start'>
                    <h1>{productName}</h1>
                    <p>{productDescription}</p>
                    <div>
                        <a href={learnMore} style={{textDecoration:"none"}}>Learn More</a>
                    </div>
                </div>
                 <div className='col-12 col-md-6 order-1 order-md-2 mb-4 mb-md-0 text-center'>
                    <img src={imageURL} alt={productName} className='img-fluid' />
                </div>
            </div>
        </div>
  );
}

export default RightSection;
