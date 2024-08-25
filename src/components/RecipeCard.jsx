import React from 'react'

const RecipeCard = ({ cardData, queryName, favRecipe }) => {
    return (
        <div className='mt-5 row'>
            <div className='d-flex justify-content-between mb-4'>
                <div>
                    <span className='text'>Result about
                        <span className='text-success' style={{ fontWeight: '700' }}> {queryName}</span>
                    </span>
                </div>
                <div><span className='text'><b>{cardData.length}</b> Items Found</span></div>
            </div>
            {
                cardData.length > 0 ? cardData.map((item, idx) => {
                    return <div className="card col-12 col-sm-6 col-lg-3 mb-4" key={idx}>
                        <img src={item.image} className="card-img-top img-fluid" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title">{item.title}</h5>
                            <button className='btn btn-dark' type='button' onClick={() => favRecipe(item)}>Add to Favourite</button>
                        </div>
                    </div>
                }) : <center className='mt-5 mb-5'>
                    <h4>No item found for <span className='text-danger'>{queryName}</span> try something different</h4>
                </center>
            }
        </div>
    )
}

export default RecipeCard