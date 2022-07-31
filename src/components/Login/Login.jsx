import { useState, useEffect, useRef } from "react";
import useAuth from "../../hooks/useAuth";
import "./login.css";
import axios from "../../api/axios";
import { useLocation, useNavigate } from "react-router-dom";
import styled from "styled-components";
const LOGIN_URL = "/login";

const MainContainer = styled.div`
  min-height: 100vh;
  background-color: #f55655;
  color: #000;
  font-family: "Quicksand", "Helvetica Neue", Helvetica, Arial, sans-serif;
  font-weight: 600;
`;
const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  padding: 1rem 0.5rem;
`;

const Section = styled.section`
  width: 100%;
  max-width: 420px;
  min-height: 400px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  padding: 1rem;
  background-color: #fff;
  box-shadow: 0 0 15px -10px rgb(0 0 0 / 75%);
`;
const Form = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  flex-grow: 1;
  padding-bottom: 1rem;
`;

export default function Login() {
  const { setAuth, persist, setPersist } = useAuth();
  const userRef = useRef();
  const errRef = useRef();
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";
  const [email, setEmail] = useState("");

  const [pwd, setPwd] = useState("");

  const [errMsg, setErrMsg] = useState("");

  useEffect(() => {
    userRef.current.focus();
  }, []);

  useEffect(() => {
    setErrMsg("");
  }, [email, pwd]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        LOGIN_URL,
        JSON.stringify({ email, pwd }),
        {
          headers: { "Content-Type": "application/json" },
          withCredentials: true,
        }
      );
      const accessToken = response?.data?.accessToken;
      setAuth({ email, accessToken });
      //clear state and controlled inputs
      //need value attrib on inputs for this
      setEmail("");
      setPwd("");
      navigate(from, { replace: true });
    } catch (err) {
      if (!err?.response) {
        setErrMsg("No Server Response");
      } else if (err.response?.status === 400) {
        setErrMsg("Missing Email Or Password");
      } else if (err.response?.status === 401) {
        setErrMsg("Wrong Email Or Password");
      } else {
        setErrMsg("Check The Server");
      }
      errRef.current.focus();
    }
  };
  const togglePersist = () => {
    setPersist((prev) => !prev);
  };
  useEffect(() => {
    localStorage.setItem("persist", persist);
  }, [persist]);
  return (
    <>
      <MainContainer>
        <Container>
          <Section>
            <p
              ref={errRef}
              className={errMsg ? "errmsg" : "offscreen"}
              aria-live="assertive"
            >
              {errMsg}
            </p>
            <h1>Login</h1>
            <Form onSubmit={handleSubmit}>
              <label htmlFor="email">Email:</label>
              <input
                type="text"
                id="email"
                ref={userRef}
                autoComplete="off"
                onChange={(e) => setEmail(e.target.value)}
                value={email}
                required
              />

              <label htmlFor="password">Password:</label>
              <input
                type="password"
                id="password"
                onChange={(e) => setPwd(e.target.value)}
                value={pwd}
                required
              />
              <div className="persistCheck">
                <input
                  type="checkbox"
                  id="persist"
                  onChange={togglePersist}
                  checked={persist}
                />
                <label htmlFor="persist">Trust This Device</label>
              </div>
              <button>Sign In</button>
            </Form>
            <p>
              Already registered?
              <br />
              <span className="line">
                {/*put router link here*/}
                <p>Sign In</p>
              </span>
            </p>
          </Section>
        </Container>
      </MainContainer>
    </>
  );
}
