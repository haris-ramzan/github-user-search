import React from "react";
import { Avatar, UserFullname, Card } from "./style";
export const UserInfo = ({ user }) => (
  <Card
    style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}
  >
    <Avatar src={user.avatar_url} />
    <UserFullname target="__blank" href={user.html_url}>
      {user.name}
    </UserFullname>
    {/* <p>User ID: {user.id}</p> */}
    <div>
      <center>
        <i>"{user.bio}"</i>
      </center>
    </div>
  </Card>
)