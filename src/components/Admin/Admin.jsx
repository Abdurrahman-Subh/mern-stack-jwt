import React from "react";
import Users from "../Users/Users";
import styled from "styled-components";
import useLogout from "../../hooks/useLogout";
import { useNavigate } from "react-router-dom";
const MainContainer = styled.div`
  height: 100vh;
  background-color: #f55655;
  width: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
`;
const Container = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const TitleContainer = styled.div``;
const Title = styled.h2`
  color: #fff;
  font-weight: 800;
`;
const ContentContainer = styled.div`
  width: 50%;
  height: 30%;
  border: 3px solid #000;
  background-color: #fec202;
  color: #000;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const BtnContainer = styled.div``;
const LogoutBtn = styled.button`
  outline: none;
  border: none;
  padding: 15px 20px;
  background-color: #f55655;
  color: #fff;
`;
export default function Admin() {
  const navigate = useNavigate();
  const logout = useLogout();
  const signOut = async () => {
    await logout();
    navigate("/");
  };
  return (
    <MainContainer>
      <TitleContainer>
        <Title>Admin Page</Title>
      </TitleContainer>
      <Container>
        <ContentContainer>
          <Users />
        </ContentContainer>
        <BtnContainer>
          <LogoutBtn onClick={signOut}>Logout</LogoutBtn>
        </BtnContainer>
      </Container>
    </MainContainer>
  );
}
