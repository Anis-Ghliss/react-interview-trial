import React,{useState,useEffect} from 'react'


function Details(props) {

    let id = props.match.params.id
    let type = props.match.params.type
    const [data,setData] = useState({})
    let url = `https://api.themoviedb.org/3/${type}/${id}?api_key=9d53106069f72bac07db98c4a220b731&language=en-US`
    console.log(url)

    useEffect(()=>{
        fetch(url)
        .then(response => response.json())
        .then(data1 => {
            setData(data1)
            console.log(data1)
        })
        .catch(console.log())
    },[])

    return(
        <div className="details-container">
            <div className="card">
                <div className="poster">
                    <img src={"https://image.tmdb.org/t/p/w500"+data["poster_path"]} className="image-poster" alt=""/>
                </div>
                <div className="dtails">
                    {type === "movie" ? <h1>{data["title"]}</h1> : <h1>{data["name"]}</h1>}
                </div>
            </div>
        </div>
    )
}
export default Details


function InfoDetail(props) {
    return(
        <div>

        </div>
    )
}