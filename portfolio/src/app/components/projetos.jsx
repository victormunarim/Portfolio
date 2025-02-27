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

export default function Projetos() {
    return (
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
    )
}