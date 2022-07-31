import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import "./linkpage.css";
const Container = styled.div`
  color: #000;
`;
export default function LinkPage() {
  return (
    <Container>
      <Link to="/login">Login</Link>
      <br />
      <Link to="/register">Register</Link>
      <br />

      <Link to="/admin">Admin</Link>
      <br />

      <Link to="/editor">Editor</Link>
      <br />

      <Link to="/admin-editor">Admin-editor</Link>
      <br />

      <Link to="/user">User</Link>
    </Container>
  );
}
