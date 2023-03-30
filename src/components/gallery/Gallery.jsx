import "./gallery.css"

export default function Gallery() {
  return (
    <>
    <div className='gallery-container'>
        <div className="gallery-img-container">
            <img className='gallery-img img-fluid' src="/images/pexels-photo-1099680.jpeg" alt="" />
        </div>
        <div className="gallery-text">
            <h1 className="gallery-heading">Restaurant</h1>
            <hr className="gallery-line" />
            <p className='gallery-desc'>
                Currently open for dine in & take out.
            </p>
            <hr className="gallery-line" />
            <div className="gallery-button">
                <button className="galleryButton">VIEW MENU</button>
            </div>
        </div>
    </div>
    <div className='gallery-container-1'>
    <div className="gallery-text-1">
        <h1 className="gallery-heading-1">Market & Cafe with fresh baked goods</h1>
        <hr className="gallery-line" />
        <p className='gallery-desc-1'>
            Stock up on bread, pastries, and grab n' go salads and sandwiches.
        </p>
        <hr className="gallery-line" />
        <div className="gallery-button">
            <button className="galleryButton">VIEW MENU</button>
        </div>
    </div>
    <div className="gallery-img-container-1">
        <img className='gallery-img img-fluid' src="/images/pexels-photo-8753672.jpeg" alt="" />
    </div>
</div>
</>
  )
}
