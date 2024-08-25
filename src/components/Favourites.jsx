const Favourites = ({handleRemove, handleData}) => {
  
  return (
    <div className='mt-5 container mb-5'>
      <center>
        {handleData && handleData.length>0 ? <h1>Favourites</h1> :  null}
      </center>
      {
        handleData  && handleData.length>0? <div className='fav mt-5'>
        {
          handleData && handleData.length > 0 ? handleData.map((item, idx) => {
            return <div className="col-12 col-sm-6 col-md-4 ms-3 mb-3" key={idx}>
              <img src={item.image} className="card-img-top img-fluid" alt="..." />
              <div className="card-body">
                <h5 className="card-title mt-3">{item.title}</h5>
                <button className='btn btn-danger mt-3' type='button' onClick={()=>handleRemove(item.id)}>Remove to favourites</button>
              </div>
            </div>
          }) : null
        }
      </div> : null
      }

    </div>
  )
}

export default Favourites