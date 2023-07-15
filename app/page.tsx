import Header from './components/header';
import SpaceContent from './components/space';
import ContentProgram from './components/program';
import Banner from './components/banner';
import ProgramSlogan from './components/buttonbanner';
import Waveborder from './components/waveborder';
import { Stepborder, Layerpeaks } from './components/waveborder';
import Toolsframework from './components/toolsframe';
import Footer from './components/footer';



export default function Home() {

  return (
    <main className="flex min-h-screen flex-col items-center">
      <Header/>
      <Banner/>
      <Waveborder/>
      <ProgramSlogan/>
      <Stepborder/>
      <ContentProgram/>
      <Layerpeaks/>
      <Toolsframework/>
      <Footer/>
    </main>
  )
}
