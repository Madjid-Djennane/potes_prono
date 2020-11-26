import styled from 'styled-components'

const Input = styled.input`
  height: 36px;
  font-size: 20px;
  padding: 0 10px;
  border: 2px solid #ddd;
  border-radius: 4px;
  font-family: 'Rubik', sans-serif;
  outline: 0;
  transition: 0.2s;
  margin-top: 20px;

  &:focus {
    border-color: #0f7ef1;
  }
`

const Button = styled.button`
  outline: none;
  cursor: pointer;
  margin: 0;

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

export { Input, Button }
