function header() {
    return (
        <nav className="header">
            <br /><h1>Little Lemon</h1><br />
            <h3>Chicago</h3>
            <h6><i>A small family-owned restaurant, that offers different Italian dishes for our guests.<br />
                You can order brekfast, lunch or dinner.<br /> To book a table please press button
                <button onclick="window.location.href='./BookingPage';" class="ReserveTable">Reserve a Table</button></i></h6>
            
            <img id="header-logo"
                src="/restauranfood.jpg"
                alt="Header logo"
                width="150px"
                height="150px"
            />
        </nav>
    );
}

export default header;