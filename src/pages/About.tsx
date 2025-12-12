import HeaderComponents from "../components/HeaderComponents";
import FooterComponent from "../components/FooterComponent";
import AboutComponent from "../components/AboutComponent";

const About = () => {
  return (
    <div>
       <HeaderComponents isOpen={false}/>
       <main>
        <section>
          <AboutComponent />
        </section>
       </main>
       <FooterComponent />
    </div>
  )
}

export default About