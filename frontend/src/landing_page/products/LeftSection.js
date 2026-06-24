import React from 'react';

function LeftSection({imageURL, productName, productDescription, tryDemo, learnMore, googlePlay, appStore}) {
    return ( 
        <div className='container mt-5'>
            <div className='row align-items-center'>
                <div className='col-12 col-md-6 mb-4 mb-md-0 text-center'>
                    <img src={imageURL} alt={productName} className='img-fluid' />
                </div>
                <div className='col-12 col-md-6 p-md-5 text-center text-md-start'>
                    <h1>{productName}</h1>
                    <p>{productDescription}</p>
                    <div className='d-flex justify-content-center justify-content-md-start gap-3'>
                        <a href={tryDemo} style={{textDecoration:"none"}}>Try Demo</a>
                        <a href={learnMore} style={{textDecoration:"none"}}>Learn More</a>
                    </div>
                   <div className='mt-3 d-flex flex-column flex-sm-row justify-content-center justify-content-md-start gap-3'>
                    <a href={googlePlay}><img src="/media/images/googlePlayBadge.svg" alt="Google Play" className='img-fluid' style={{maxHeight:"40px"}}/></a>
                    <a href={appStore}><img src="/media/images/appstoreBadge.svg" alt="App Store" className='img-fluid' style={{maxHeight:"40px"}}/></a>
                   </div>
                </div>
            </div>
        </div>
     );
}

export default LeftSection;