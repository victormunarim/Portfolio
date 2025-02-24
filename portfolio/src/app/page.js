import Image from "next/image";
import {
  Header,
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
} from 'grommet';
import Botao from './components/botoes'
import Competencias from './components/competencias'

export default function Home() {
  return (
    <>
      <Box direction="row" justify="between" align="center" height='70px' width='100%' background='black' >
        <Text margin={{ left: '50px' }} size='25px'>Portfólio</Text>
        <Box direction="row">
          <Botao conteudo={'Resumo'}></Botao>
          <Botao conteudo={'Projetos'}></Botao>
          <Botao conteudo={'Competências'}></Botao>
          <Botao conteudo={'Redes'}></Botao>
        </Box>
      </Box>
      <Box direction="row">
        <Box>
          <Box>
            <Text margin={{ top: '50px', left: '50px' }} size='25px'>Resumo</Text>
          </Box>
          <Box width='550px' height='400px' margin={{ left: '50px', top: '15px' }} round='20px' background='light-2' >
            <Text wordBreak='break-word' margin='20px'>odjfsdkmfpddddddddddddddddddddddddddddddddddmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmsdf</Text>
          </Box>
        </Box>
        <Box>
          <Box>
            <Text margin={{ top: '50px', left: '50px' }} size='25px'>Competências</Text>
          </Box>
          <Box wrap height='400px' width='550px' direction="row" margin={{ left: '50px', top: '15px' }}>
            <Competencias conteudo='comapd'></Competencias>
            <Competencias conteudo='comapd'></Competencias>
            <Competencias conteudo='comapd'></Competencias>
            <Competencias conteudo='comapd'></Competencias>
            <Competencias conteudo='comapd'></Competencias>
            <Competencias conteudo='comapd'></Competencias>
            <Competencias conteudo='comapd'></Competencias>
            <Competencias conteudo='comapd'></Competencias>
            <Competencias conteudo='comapd'></Competencias>
            <Competencias conteudo='comapd'></Competencias>
          </Box>
        </Box>
      </Box>
    </>
  );
}