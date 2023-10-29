function Content(){
    const food = [];
    
    for(let i = 0; i < 100; i++){
        food.push(
        <div className="col-12 col-md-4 col-d-2" id="food">
            <Card/>
        </div>)
    }

    return(
        <>
        <div className="container ">
            <div className="row py-5">
                {food}
            </div>
        </div>
        </>
    )    
}

function Card(){
    return(
        <>
            <div className="container card my-3 food">
                <div className="row">
                <img src="src\assets\food.png" alt="" />

                </div>
                <div className="row">
                    <div className="food-name">Gado Gado</div>
                    <div className="food-desc">
                        Adanya gado-gado bermula pada abad ke-17,
                        saat Kesultanan Mataram yang dipimpin 
                        Sultan Agung melakukan Penyerbuan di Batavia, 
                        kehabisan pasokan bahan makanan terutama beras.
                    </div>

                </div>
            </div>
        </>
    );
}

export default Content