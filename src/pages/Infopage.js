const Infopage = () => {
    return (
        <div className="infopage">
            <div>
                <img src="https://upload.wikimedia.org/wikipedia/en/1/1c/The_Grand_Budapest_Hotel.png" alt="img"/>
                <div className="infolist">
                    <p><b>Rating:</b></p>
                    <p><b>Release Year:</b></p>
                    <p><b>Genres:</b></p>
                    <p><b>Countries:</b></p>
                    <p><b>Status:</b></p>
                    <p><b>Dutation:</b></p>
                    <button><i className="fas fa-star"></i> Add to favorites</button><br/>
                    <button><i className="fas fa-star"></i> Add to watch later</button><br/>
                    <button><i className="fas fa-bell"></i> Enable notifications</button><br/>
                </div>
            </div>
            <div className="description">
                <h3>Title</h3>
                <p>Good Girls follows three good girl suburban wives and mothers who suddenly find themselves in desperate circumstances and decide to stop playing it safe, and risk everything to take their power back.</p>
                <iframe title="video" width="560" height="315" src="https://www.youtube.com/embed/1Fg5iWmQjwk" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture allowfullscreen" />
            </div>
        </div>
    )
}

export default Infopage