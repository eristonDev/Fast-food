import FormComponent from "../components/FormComponent";
import HeaderComponents from "../components/HeaderComponents";
import useFormLogic from "../hook/useFormLogic";
import FooterComponent from "../components/FooterComponent";

const Booktable = () => {
  const{fields, Category, handleChange, handleSubmit, fielfile, user, placeHolder} =useFormLogic();
  return (
    <div>
       <HeaderComponents isOpen={false}/>
       <main>
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
       </main>
       <FooterComponent />
    </div>
  )
}

export default Booktable