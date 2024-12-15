import GreekSalad from "./GreekSalad.jpg"
import Bruschetta from "./Bruschetta.svg"

function HomePage() {
    return (
        <div className="HomePage">
            <br /><h1 className="HomePage">Specials</h1><br />
            <button onclick="window.location.href='./Menu';" class="MenuOnline">Menu Online</button>
            <div className="HomePage-container">
            <div className="Specials GreekSalad">
                <img className="greek-salad-image" src={GreekSalad} alt="Greek Salad" />
                <p className="dish-name">Greek salad - $12.99</p>
                <p className="dish-description">It  is a refreshing Mediterranean dish<br></br> made with fresh vegetables like ripe tomatoes,
                    <br></br> crisp cucumbers, green bell peppers, and red onions.</p>
                <p className="order-delivery"> <a href="./OrderOnline">Order a delivery...</a></p>
                </div>
            <div className="Specials Bruschetta">
               <img className="bruschetta-image" src={Bruschetta} alt="Bruschetta" />
               <p className="dish-name">Bruschetta - $7.99</p>
                    <p className="dish-description">It  is a classic Italian appetizer consisting of grilled <br>
                    </br> or toasted bread rubbed with garlic and topped with a mixture of <br>
                    </br>diced fresh tomatoes, basil, olive oil, and sometimes balsamic vinegar...</p>
               <p className="order-delivery"> <a href="./OrderOnline">Order a delivery...</a></p>
                </div>
                </div>
                
        </div>
    );
}

export default HomePage;
