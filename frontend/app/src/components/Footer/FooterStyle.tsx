import styled from 'styled-components';

const FooterBgS = styled.div`
  position: fixed;
  bottom: 0;
  left: 0;
  display: flex;
  width: 100vw;
  height: 65px;
  padding-top: 13px;
  background: #ffffff;
  align-items: flex-start; /* 세로 가운데 정렬 */
  justify-content: space-around; /* 가로 가운데 정렬 */
  box-shadow: 0px -1px 4px rgba(0, 0, 0, 0.25);
`;

const FooterIconS = styled.div<{ $footerIconType: string }>`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;

  background: url(${props => `/src/assets/icon${props.$footerIconType}.png`});
  background-size: cover;
  background-repeat: no-repeat;

  text-decoration: none;
  pointer-events: none;
`;

const FooterClickableAreaS = styled.div`
  position: relative;
  width: 30px;
  height: 30px;

  border-radius: 30%;

  cursor: pointer;
`;

export { FooterBgS, FooterIconS, FooterClickableAreaS };
