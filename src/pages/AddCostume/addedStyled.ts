import styled from 'styled-components';

export const ContainButton = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const AddButton = styled.button`
  width: 50%;
  padding: 10px;
  font-size: clamp(15px, 2vw, 20px);
  cursor: pointer;
  border: none;
  background-color: white;
  transition: all 0.3s ease;

  &:hover {
    background-color: grey;
    color: white;
    transition: all 0.3s ease;
  }

  @media (max-width: 992px) {
    width: 60%;
  }
`;
