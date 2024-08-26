
import './App.css'
import Hero from './Components/Hero/Hero'
import Nav from './Components/Nav/Nav'
import PopularPoduct from './Components/PopularPoduct/PopularPoduct'
import Services from './Components/Services/Services'
import SpecialOffer from './Components/SpecialOffer/SpecialOffer'
import SuperQuality from './Components/SuperQuality/SuperQuality'
import CustomerReview from './Components/CustomerReview/CustomerReview'
import Subscribe from './Components/Subscrib/Subscribe'
import Footer from './Components/Footer/Footer'
function App() {

  return (
    <>
      <main className='relative'>
        <Nav></Nav>
        <section className='xl:padding-l wide:padding-r padding-b'>
          <Hero></Hero>
        </section>
        <section className='padding'>
        <PopularPoduct></PopularPoduct>
        </section>
        <section className='padding'>
         <SuperQuality/>
        </section>
        <section className='padding-x py-10'>
         <Services></Services>
        </section>
        <section className='padding'>
         <SpecialOffer></SpecialOffer>
        </section>
        <section className=' bg-pale-blue padding'>
         <CustomerReview></CustomerReview>
        </section>
        <section className='padding-x sm:py-32 py-16 w-full'>
         <Subscribe></Subscribe>
        </section>
        <section className='padding-x bg-black bg-clip-padding-t pb-8'>
         <Footer></Footer>
        </section>
      </main>

    </>
  )
}

export default App
