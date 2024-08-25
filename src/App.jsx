
import './App.css'
import Hero from './Components/Hero/Hero'
import Nav from './Components/Nav/Nav'
import PopularPoduct from './Components/PopularPoduct/PopularPoduct'

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
         SuperQuality
        </section>
        <section className='padding-x py-10'>
         services
        </section>
        <section className='padding'>
         specialOffers
        </section>
        <section className=' bg-pale-blue padding'>
         CustomerReviews
        </section>
        <section className='padding-x sm:py-32 py-16 w-full'>
         Subscribe
        </section>
        <section className='padding-x bg-black bg-clip-padding-t pb-8'>
         Footer
        </section>
      </main>

    </>
  )
}

export default App
