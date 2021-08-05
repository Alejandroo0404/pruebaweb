import React from 'react'

const Characters = ({characters = []}) =>{
    return (
        <div className="row">
            {
                characters.map((item, index) => (
                    <div key={index} className="col-3 mb-4">
                        <div className="card" style={{minWidth: "100px"}}>
                            <img src={item.flag} alt="" />
                            <div className="card-body">
                                <h5 className="card-title">{item.name}</h5>
                                <hr />
                                <p>Region {item.region}</p>
                                <p>Subregion {item.subregion}</p>
                            </div>
                        </div>
                    </div>
                ))
            }
 
        </div>
    )
}

export default Characters