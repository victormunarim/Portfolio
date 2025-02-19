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
import Botao from './components/teste'

export default function Home() {
  return (
    <Box direction="row" justify="between" align="center" height='70px' width='100%' background='grey' >
      <Text margin={{ left: '50px' }}>Portfólio</Text>
      <Box direction="row">
        <Botao conteudo={'Resumo'}></Botao>
        <Botao conteudo={'Projetos'}></Botao>
        <Botao conteudo={'Competências'}></Botao>
        <Botao conteudo={'Redes'}></Botao>
      </Box>
    </Box>
  );
}