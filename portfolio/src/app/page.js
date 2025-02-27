// import Image from "next/image";
import { Github, Linkedin, WhatsApp, MailOption, Mail } from 'grommet-icons';
import {
  Page,
  PageContent,
  Heading,
  Paragraph,
  Grid,
  Card,
  Footer,
  Text,
  Button,
  Menu,
  Box,
  List,
  Carousel,
  Image,
} from 'grommet';
import Topo from './components/topo.jsx'
import Competencias from './components/competencias'

export default function Home() {
  return (
    <>
    <Topo></Topo>
      <Box direction="row" justify='center'>
        <Box elevation='large' margin={{ top: '50px' }} width='300px' height='450px'>
          <Image fit='cover' src='https://img.freepik.com/fotos-gratis/retrato-de-homem-branco-isolado_53876-40306.jpg'>
          </Image>
        </Box>
        <Box>
          <Box>
            <Text margin={{ top: '50px', left: '70px' }} size='25px'>Resumo</Text>
          </Box>
          <Box elevation='large' width='550px' height='fill' margin={{ left: '70px', top: '15px' }} round='20px' background='black' >
            <Text color='white' size='30px' wordBreak='break-word' margin='20px'>odjfsdkmfpddddddddddddddddddddddddddddddddddmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmsdf</Text>
          </Box>
        </Box>
      </Box>
      <Box align='center'>
        <Box>
          <Text margin={{ top: '50px' }} size='25px'>Competências</Text>
        </Box>
        <Box wrap height='350px' width='550px' direction="row" margin={{ left: '70px', top: '35px' }}>
        <Box elevation='large' margin={{right: '50px'}} round='20px' pad='10px' width='fit-content' height='fit-content' background='black'>
            <Text color='white'>pskdflsdf</Text>
        </Box>
        </Box>
      </Box>
      <Box align='center'>
        <Box>
          <Text size='25px'>Projetos</Text>
        </Box>
        <Box elevation='large' width='400px' height='200px' margin={{ top: '35px' }}>
          <Carousel fill controls={false} play={3000}>
            <Image fit='cover' src='https://cpv.ifsp.edu.br/images/phocagallery/galeria2/thumbs/phoca_thumb_l_image03_grd.png'></Image>
            <Image fit='cover' src='https://cpv.ifsp.edu.br/images/phocagallery/galeria2/thumbs/phoca_thumb_l_image03_grd.png'></Image>
            <Image fit='cover' src='https://cpv.ifsp.edu.br/images/phocagallery/galeria2/thumbs/phoca_thumb_l_image03_grd.png'></Image>
            <Image fit='cover' src='https://cpv.ifsp.edu.br/images/phocagallery/galeria2/thumbs/phoca_thumb_l_image03_grd.png'></Image>
          </Carousel>
        </Box>
      </Box>
      <Box direction='row' gap='20px' background='black' justify='center' height='70px' align='center' margin={{ top: '50px' }}>
        <Github color='light-2' size='40px'></Github>
        <Linkedin color='plain' size='40px'></Linkedin>
        <WhatsApp color='plain' size='40px'></WhatsApp>
        <MailOption color='white' size='40px'></MailOption>
      </Box>
    </>
  );
}