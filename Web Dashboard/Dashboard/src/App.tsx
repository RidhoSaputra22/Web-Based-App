import '../node_modules/bootstrap/dist/css/bootstrap.css'
import './App.css'
import './saldo'
function App() {
  
  return (
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

            <Saldo>
              
            </Saldo>

      
    </>
  )
}

export default App
