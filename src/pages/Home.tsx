import Cards from "../components/Cards";
import FormComponent from "../components/FormComponent";
import HeaderComponents from "../components/HeaderComponents";
import useFormLogic from "../hook/useFormLogic";
import FooterComponent from "../components/FooterComponent";
import AboutComponent from "../components/AboutComponent";

const Home = () => {
  const{fields, Category, handleChange, handleSubmit, fielfile, user, placeHolder} =useFormLogic();
  
  return (
    <div>
      <HeaderComponents isOpen={true}/>
        <main>
          <section className="mt-10">
            <Cards variant='secondCard'/>
          </section>
          <section className="mb-10">
            <Cards variant='firstCard'/>
          </section>
          <section>
            <AboutComponent />
          </section>
          <section>
            <FormComponent 
              fields={fields}
              Category={Category}
              handleChange={handleChange}
              handleSubmit={handleSubmit}
              fielfile={fielfile}
              user={user}
              placeHolder={placeHolder}
          />
          </section>
          <section>
            <Cards />
          </section>
        </main>
       <FooterComponent />
    </div>
  )
}

export default Home