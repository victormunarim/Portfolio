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
} from 'grommet';
import Teste from './components/teste'

export default function Home() {
  return (
    <Header justify="end" align="center" gap='60px' background="grey" height='90px' pad={{right: '60px'}}>
      <Button label='Resumo' hoverIndicator />
      <Button label='Projetos' hoverIndicator />
      <Button label='Competências' hoverIndicator />
      <Button label='Redes' hoverIndicator />
    </Header>
  );
}