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

export default function competencias({ conteudo }) {
    return (
        <Box margin={{right: '50px'}} round='20px' pad='10px' width='fit-content' height='fit-content' background='light-2'>
            <Text>{conteudo}</Text>
        </Box>
    )
}