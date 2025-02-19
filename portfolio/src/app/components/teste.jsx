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

export default function botao({ conteudo }) {
    return (
        <Box margin={{ right: '50px' }} pad='5px'>
            <Button color='white' plain={false}>{conteudo}</Button>
        </Box>
    )
}