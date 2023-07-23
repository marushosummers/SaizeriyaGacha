import Loader from 'react-loader-spinner';
import styled from 'styled-components';

const StyledContainer = styled.div`
  padding-top: 5px;
`;

export const Spinner: React.FC = () => {
  return (
    <StyledContainer>
      <Loader type="Oval" color="#E5F2E5" height={30} width={30} />
    </StyledContainer>
  );
};
