import Hero from '../components/Hero'
import Projects from '../components/Projects/Projects'
import ImageGrid from '../components/ImageGrid'
import Services from '../components/Services/Services';
import Technologies from '../components/Technologies'
import Team from '../components/Team/Team'
import Partnerships from '../components/Partnerships/Partnerships'
import FAQ from '../components/FAQ'

export default function Home() {
  return (
    <div >

      <main >
        <Hero />
        <Projects />
        <ImageGrid />
        <Services />
        <Technologies />
        <Team />
        <Partnerships />
        <FAQ />
      </main>

    </div>
  )
}
