let widthimg = 150;
function Tours (props){
    
    return(
        <>
        <img src = {props.image} style={{width: widthimg }} />
        <p>{props.name}</p>
        <hr></hr>
        </>
    )
}

export default Tours