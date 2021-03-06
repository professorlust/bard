import styled from 'styled-components';

export default styled.input`
  display: block;
  width: 100%;
  padding: 10px 15px;
  border: 0;
  cursor: pointer;
  text-align: center;
  color: white;
  background-color: #2e35ff;

  &:hover {
    background-color: #4e54fb;
  }

  &:disabled {
    background-color: #f1f1f1;
  }
`;