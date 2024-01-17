import styles from './style';
import { NavBar, Hero, Stats, GetStarted, Footer, Business, Billing, Button, CTA, 
   CardDeal, Clients, FeedBackCard, Testimonials } from './components/index.js'

const App = () => {
  return (
   <div className="bg-primary w-full overflow-hidden">
     <div className={`${styles.paddingX} ${styles.flexCenter}`}>
        <div className={`${styles.boxWidth}`}>
          <NavBar />
        </div>
     </div>

     <div className={`bg-primary ${styles.flexStart}`}>
      <div>
        <div className={`${styles.boxWidth}`}>
          <Hero />
        </div>
      </div>  
      </div>      

      <div className={`bg-primary ${styles.paddingX} ${styles.flexStart}`}>
          <div className={`${styles.boxWidth}`}>
            <Stats /> 
            <Business />
            <Billing /> 
            <CardDeal /> 
            <Testimonials /> 
            <Clients /> 
            <CTA /> 
            <Footer />
          </div>
     </div>
   </div>
  )
}

export default App;