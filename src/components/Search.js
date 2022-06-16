import React from "react"
import { UserameBox, Card, Label, Button } from './style';
export const Search = ({ onChange, onClick }) => (
    <Card
        style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center'
        }}
    >
        <div style={{ marginRight: 10 }}>
            <Label>Username:</Label>
            <UserameBox
                type="text"
                className="usernamebox"
                placeholder="Enter Username"
                onChange={onChange}
            />
        </div>
        <Button onClick={onClick}>
            Search
        </Button>
    </Card>
)