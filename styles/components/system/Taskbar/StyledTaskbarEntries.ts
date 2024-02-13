import styled from 'styled-components';

const StyledTaskbarEntries = styled.ol`
  background-color: purple;
  left: ${({ theme }) => theme.sizes.startButton.width};
  height: 100%;
  position: absolute;
  right: ${({ theme }) => theme.sizes.clock.width};
`;

export default StyledTaskbarEntries;
