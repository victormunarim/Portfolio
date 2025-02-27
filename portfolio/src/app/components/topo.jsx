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

export default function Topo() {
    return (
        <Header sticky="scrollup" direction="row" justify="between" align="center" height='70px' width='100%' background='black' >
            <Text margin={{ left: '70px' }} size='25px'>Portfólio</Text>
            <Box direction="row">
                <Box margin={{ right: '50px' }} pad='5px'>
                    <Button color='white' plain={false}>Resumo</Button>
                </Box>
                <Box margin={{ right: '50px' }} pad='5px'>
                    <Button color='white' plain={false}>Competências</Button>
                </Box>
                <Box margin={{ right: '50px' }} pad='5px'>
                    <Button color='white' plain={false}>Projetos</Button>
                </Box>
                <Box margin={{ right: '50px' }} pad='5px'>
                    <Button color='white' plain={false}>Redes</Button>
                </Box>
            </Box>
        </Header>
    )
}