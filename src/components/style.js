import styled from 'styled-components';
export const UserameBox = styled.input`
  width: 80%;
  font-size: 1rem;
  padding: 7px 15px;
  border: 2px solid #eee;
  margin-bottom: 20px;
`
export const Avatar = styled.img`
  height: 150px;
  width: 150px;
  border: none;
  border-radius: 100px;
  margin-bottom: 30px;
`

export const UserFullname = styled.a`
  color: black;
  font-size: 22px;
  cursor: pointer;
  text-decoration: none;
  margin-bottom: 15px;
`
export const Card = styled.div`
  width: 40%;
  padding: 50px;
  background: white;
  border: 2px solid black;
  border-radius: 1px;
  box-shadow: 4px 4px 8px 4px rgba(0, 0, 0, 0.07);
  margin: 30px 0;`
export const Label = styled.label`
//   font-size: 0.5em;
//   text-align: center;
  color: black;
`;
export const Button = styled.button`
  color: black;
  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border: 2px solid black;
  border-radius: 3px;
`;
export const Layout = styled.div`
    background: #eee;
    min-height: 100vh;
    width: 100vw;
  `
export const Title = styled.div.attrs((/* props */) => ({ tabIndex: 0 }))`
    color: black;
  
    &:hover {
      color: grey; // <Title> when hovered
    }
    align-items: center;
    display: flex;
    justify-content: center;
    padding-top: 20px;
    font-weight: 600;
  `
export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-top: 10px
  `