import React, { useState } from "react";
import { Layout, Title, Container } from "../components/style";
import { Search } from "../components/Search";

export const SearchPage = (props) => {
    const { history } = props;
    const [username, setUsername] = useState('');
    const handleNameChange = (e) => {
        if (e.target.value !== '') {
            setUsername(e.target.value);
        }
    }
    return (
        <Layout>
            <Title>
                Search GitHub User
            </Title>
            <Container>
                <Search onChange={handleNameChange} onClick={() => history.push('/User/', { username })} />
            </Container>
        </Layout>
    )
};