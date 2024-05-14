function Footer (props){
    let urlFacebook = "https://www.facebook.com/";
    let urlX = "https://twitter.com/";
    return(
        <>
        <footer className="bg-body-tertiary text-center text-lg-start">
  {/* Copyright */}
  <div
    className="text-center p-3"
    style={{ backgroundColor: "rgba(0, 0, 0, 0.05)" }}
  >
    © 2024 Copyright:
        <br></br>
    <a className="text-body" href="https://facebook.com/">
      facebook
    </a>
  </div>
  {/* Copyright */}
</footer>

        </>
        
    )

}
export default Footer