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
        <Box elevation='large' margin={{right: '50px'}} round='20px' pad='10px' width='fit-content' height='fit-content' background='black'>
            <Text color='white'>{conteudo}</Text>
        </Box>
    )
}