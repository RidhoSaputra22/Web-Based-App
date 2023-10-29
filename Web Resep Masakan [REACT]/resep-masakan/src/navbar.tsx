function Navbar(){
    return(
        <>
            <div className="container-fluid ">
                <div className="row border navbar">
                    <div className="col-2">
                    <h1>Logo</h1>
                    </div>
                    <div className="col border">
                        <h1 className="judul">JUDUL </h1>

                    </div>
                    <div className="col-2">
                        <button className="btn btn-dark ">Search</button>
                    </div>
                </div>
            </div>
        </>
    )    
}

export default Navbar