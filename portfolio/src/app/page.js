import Topo from './components/topo.jsx'
import Resumo from './components/resumo.jsx'
import Competencias from './components/competencias.jsx'
import Projetos from './components/projetos.jsx'
import Footer from './components/footer.jsx'

export default function Home() {
  return (
    <>
      <Topo></Topo>
      <Resumo></Resumo>
      <Competencias></Competencias>
      <Projetos></Projetos>
      <Footer></Footer>
    </>
  );
}