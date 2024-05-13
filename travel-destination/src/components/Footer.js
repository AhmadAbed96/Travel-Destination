function Footer (props){
    let urlFacebook = "https://www.facebook.com/";
    let urlX = "https://twitter.com/";
    return(
        <>
        <a href= {urlFacebook} style = {{color : "blue"}}>facebook</a>
        <br/>
        <a href= {urlX} style={{color : "black"}}>X</a>
        <p>&copy;Ahmad</p>
        </>
        
    )

}
export default Footer