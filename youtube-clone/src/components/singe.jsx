import React from 'react'

function Single({detail}) {
    // const {id, title, description} = detail[0];
    console.log(typeof(detail[0]), "Jhkjdshdksjh")
   
    return (
        <div>
            <div>
            <iframe width="560" title="frame" height="315" 
            src= {`https://www.youtube.com/embed/${detail.id}`}
            frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
            <h4>{detail.title}</h4>
            <p></p>
            </div>
        </div>
    )
}

export default Single
