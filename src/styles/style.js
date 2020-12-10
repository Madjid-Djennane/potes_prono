import styled from 'styled-components'

const Input = styled.input`
  width: 400px;
  height: 36px;
  font-size: 20px;
  padding: 0 10px;
  border: 2px solid #ddd;
  border-radius: 4px;
  font-family: 'Rubik', sans-serif;
  outline: 0;
  transition: 0.2s;
  margin: 15px 0px 15px 0px;

  &:focus {
    border-color: #0f7ef1;
  }

  @media (max-width: 500px) {
    width: 90%;
  }
`

const Button = styled.button`
  outline: none;
  cursor: pointer;

  max-height: 40px;
  display: block;
  min-width: 90px;
  border: none;
  padding: 0 10px;
  font-size: 16px;
  color: #fff;
  line-height: 35px;
  text-align: center;
  background: none;
  transition: background 0.3s ease;

  background-color: ${props => props.color};

  &:hover {
    filter: opacity(90%);
  }
`

const FormButton = styled.button`
  outline: none;
  cursor: pointer;
  margin-top: -15px;
  margin-bottom: 15px;

  max-height: 40px;
  display: block;
  min-width: 90px;
  border: none;
  padding: 0 10px;
  font-size: 16px;
  color: #fff;
  line-height: 35px;
  text-align: center;
  background: none;
  transition: background 0.3s ease;

  background-color: ${props => props.color};

  &:hover {
    filter: opacity(90%);
  }
`

const Form = styled.form`
  display: flex;
  flex-direction: column;
  padding: 20px;
`

const H1 = styled.h1`
  margin: 0;
  color: #333;
  text-align: center;
`

const Radio = styled.input`
  width: 2.5em;
  height: 2.5em;
  margin: 0px 0px 0px 10px;

  @media (max-width: 768px) {
    width: 1.5em;
    height: 1.5em;
  }
`

const Title = styled.p`
  font-size: 65px;
  font-weight: bold;
  color: #999;
  text-transform: uppercase;
  letter-spacing: 0.05em;

  @media (max-width: 768px) {
    font-size: 25px;
  }

  @media (max-width: 1200px) {
    font-size: 35px;
  }

  @media (max-width: 500px) {
    font-size: 15px;
  }
`

const BetStyle = styled.div`
  width: 250px;
  background: white;
  text-decoration: none;
  color: #444;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  min-height: 100%;
  border-radius: 5%;
  position: relative;
  top: 0;

  @media (max-width: 768px) {
    margin-top: 10px;
    flex-direction: row;
    width: 100%;
  }
`

export { Input, Button, FormButton, Form, H1, Radio, Title, BetStyle }
