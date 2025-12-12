import Cards from "../components/Cards";
import HeaderComponents from "../components/HeaderComponents";
import FooterComponent from "../components/FooterComponent";

const Menu = () => {
  
  return (
    <div>
       <HeaderComponents isOpen={false}/>
       <main className="mb-10">
        <section>
          <Cards variant={'firstCard'} />
        </section>
       </main>
       <FooterComponent />
    </div>
  )
}

export default Menu