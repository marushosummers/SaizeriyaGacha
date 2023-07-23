import styled from 'styled-components';

export const Divider: React.FC = () => {
  return <StyledContainer>{'🍝'}</StyledContainer>;
};

const StyledContainer = styled.div`
  margin: 5px auto;
  text-align: center;
  font-size: 1.9em;
`;
