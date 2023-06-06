import styled from 'styled-components';

const FilterComponent = styled.div`
  width: 300px;
  padding: 20px;
  input {
    display: block;
    margin-top: 5px;
    padding: 5px;
    font-size: 18px;
    border: 2px solid transparent;
    border-radius: 10px;
    outline: none;
    box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
    transition: all 300ms cubic-bezier(0.215, 0.61, 0.355, 1);
  }

  input:hover,
  input:focus {
    border: 2px solid #6a95ff;
  }
`;

export { FilterComponent };
