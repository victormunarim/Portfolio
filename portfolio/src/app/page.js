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
} from 'grommet';
import Botao from './components/botoes'

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
      <Box>
        <Text margin={{top:'50px', left:'50px'}} size='25px'>Resumo</Text>
      </Box>
      <Box width='550px' margin={{left: '50px', top: '15px'}} round='20px' background='lightgrey' height='400px' width='600px'>
        <Paragraph gridArea="<Box>" margin='20px'>odjfsdkmfpddddddddddddddddddddddddddddddddddmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmsdf</Paragraph>
      </Box>
      </>
  );
}