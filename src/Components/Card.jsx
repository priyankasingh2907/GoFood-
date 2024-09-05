

export default function Card() {
  return (
    <>
    <div className="card m-4" style={{"width":"18rem" , "maxHeight":"300px", objectFit:"contain"}}>
    
    <div className="card-body">
    <img src="/public/pinar-kucuk-Ae7jQFDTPk4-unsplash.jpg" width="250px" style={{objectFit:"cover"}} height="100px" alt="" />
        <div className="card-title">
            Card Title
        </div>
        <div className="card-text">Important text.
        </div>
    <div className=" w-100">
        <select name="qty" className="mt-2 h-100 bg-success rounded" id="qty">
            {
                Array.from(Array(6),(e,i)=>{
                    return <option key={i+1} value={i+1}>{i+1}</option>
                })
            }
        </select>
        <select name=""className="m-2 h-100 bg-success rounded" id="">
            <option value="">Select Size</option>
            <option value="Small">Small</option>
            <option value="Medium">Medium</option>
            <option value="Large">Large</option>
            <option value="X-Large">X-Large</option>
        </select>
        <hr />
        <div className="d-inline h-100 fs-5">
            <span>Price: $20</span>
            <button className="btn btn-success btn-sm m-2">Add to Cart</button>
        </div>
    </div>
    </div>
   
</div>
    </>
  )
}
