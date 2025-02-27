import { Github, Linkedin, WhatsApp, MailOption, Mail } from 'grommet-icons';
import {
    Page,
    PageContent,
    Heading,
    Paragraph,
    Grid,
    Card,
    Text,
    Button,
    Menu,
    Box,
    List,
    Carousel,
    Image,
} from 'grommet';

export default function Footer() {
    return (
        <Box direction='row' gap='20px' background='black' justify='center' height='70px' align='center' margin={{ top: '50px' }}>
            <Github color='light-2' size='40px'></Github>
            <Linkedin color='plain' size='40px'></Linkedin>
            <WhatsApp color='plain' size='40px'></WhatsApp>
            <MailOption color='white' size='40px'></MailOption>
        </Box>
    )
}