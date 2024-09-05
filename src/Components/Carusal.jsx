
export default function Carusal() {
  return (
    <>
    <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="carousel" style={{objectFit:"contain"}}>
  

  
  <div className="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div>
  <div className="carousel-inner">

<div className="carousel-caption" style={{zIndex:1}}>
    <form action="" className="d-flex">
        <input type="search" className="form-control m-3" placeholder="Search..."/>
        <button type="submit" className="btn btn-success m-3 btn-sm">Search</button>
  
    </form>

</div>

    <div className="carousel-item active">
      <img src="/public/klara-kulikova-RsiNFKMvqtg-unsplash.jpg"  width="100%" height="400px" alt="..."/>
    </div>
   
    <div className="carousel-item">
      <img src="/public/shayan-ramesht-exSEmuA7R7k-unsplash.jpg"    width="100%" height="400px" alt="..."/>
  
    </div>
    <div className="carousel-item">
    
      <img src="/public/pinar-kucuk-Ae7jQFDTPk4-unsplash.jpg"  width="100%" height="400px"  alt="..."/>
    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>
    </>
  )
}
