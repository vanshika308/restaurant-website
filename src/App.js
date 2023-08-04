import Header from "./Layout/Header";
import Meals from "./Meals/AvailableMeals";
import Cart from "./Cart/Cart";
function App() {
  return (
    <>
       <Cart/>
       <Header/>
       <main>
        <Meals />
      </main>
       
    </>
   
  );
}
export default App;