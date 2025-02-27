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

export default function Resumo() {
    return (
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
    )
}