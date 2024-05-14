import { Link } from "react-router-dom"



function Tours(props) {

    return (
        <>
            

            <div className="card" style={{ width: "18rem" }}>
                <img height={200} className="card-img-top " src={props.city.image} alt="Card image cap" />
                <div className="card-body">
                    <h5 className="card-title">{props.city.name}</h5>

                    <Link to={`tourDetails/${props.city.id}`} className="btn btn-primary">
                        More details

                    </Link>
                </div>
            </div>
        </>
    )
}

export default Tours