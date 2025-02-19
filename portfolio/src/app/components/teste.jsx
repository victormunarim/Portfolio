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

export default function botao({conteudo}) {
    return (
        <Box margin={{right: '50px'}} border={{ color: 'white', size: '2px' }}>
            <Button>{conteudo}</Button>
        </Box>
    )
}