import "./carousel.css"

export default function Carousel() {
  return (
    <div className="carousel">
        <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="true">
            <div className="carousel-indicators">
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to={"0"} className="active" aria-current="true" aria-label="Slide 1"></button>
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to={"1"} aria-label="Slide 2"></button>
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to={"2"} aria-label="Slide 3"></button>
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to={"3"} aria-label="Slide 4"></button>
            </div>
            <div className="carousel-inner">
                <div className="carousel-item active">
                    <img src="/images/pexels-photo-958545.jpeg" className="d-block w-100" alt="..." />
                </div>
                <div className="carousel-item">
                    <img src="/images/pexels-photo-1099680.jpeg" className="d-block w-100" alt="..." />
                </div>
                <div className="carousel-item">
                    <img src="/images/pexels-photo-1600711.jpeg" className="d-block w-100" alt="..." />
                </div>
                <div className="carousel-item">
                    <img src="/images/pexels-photo-8753672.jpeg" className="d-block w-100" alt="..." />
                </div>
            </div>
        </div>
    </div>
  )
}
