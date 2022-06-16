import React, { useEffect, useState } from "react";
import { Card, Button, Container, Title, Layout } from "../components/style";
import { UserInfo } from "../components/User";
import { Repository } from "../components/Repository";
import Spinner from "../components/spinner";

export const UserPage = (props) => {
    const { location, history } = props;
    const [userData, setUserData] = useState({});
    const [repository, setRepositories] = useState([]);
    const [hasLoaded, setLoaded] = useState(false);
    const [error, setError] = useState(false);

    useEffect(() => {
        const getRepositries = async () => {
            setLoaded(true);
            const response = await (await fetch(
                `https://api.github.com/users/${location.state.username}`
            )).json().then(async (res) => {
                setRepositories([]);
                setUserData(res);
                const repositories = await (await fetch(res.repos_url)).json()
                setLoaded(false);
                setError(false);
                setRepositories(repositories);
            }).catch(err => setError(true))
            if (response?.message === 'Not Found') {
                setLoaded(false);
                setError(true);
                return;
            }
        }
        getRepositries()

    }, [location.state.username])
    let afterSearch;
    let repos;
    if (location.state.username !== '') {
        // Check if the content has loaded, show content
        if (!hasLoaded) {
            // Check for errors Message
            if (error) {
                afterSearch = <Card>{error}</Card>
            } else {
                repos = repository.map((repo, i) => (
                    <Repository repo={repo} key={i} />
                ))
                afterSearch = <UserInfo user={userData} />
            }
        } else {
            // Check for errors Message on 404
            if (error) {
                afterSearch = <Card>No Data Found! Please Try another user.</Card>
            } else {
                // If content has not loaded show the loading box
                afterSearch = <Card><Spinner /></Card>
            }
        }
    }
    return (
        <Layout>
            <Title>
                GitHub User
            </Title>
            <Container>
                {afterSearch}
                {repos}
                <Button onClick={() => history.push('/')}>
                    Back to Search
                </Button>
            </Container>
        </Layout>
    )
};