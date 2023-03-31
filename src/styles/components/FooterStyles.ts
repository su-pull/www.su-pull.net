import css from 'styled-jsx/css';

const styles = css`
  .footer_text {
    position: relative;
    font-size: 12px;
  }
  .footer_icon {
    position: static;
    bottom: 40px;
    display: flex;
    gap: 12px;
  }

  .footer_main {
    position: absolute;
    left: 0;
    right: 0;
    bottom: 0;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    height: 120px;
  }

  .footer_container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
  }
  @media screen and (max-width: 739.98px) {
    .footer_main {
      right: 16px;
    }
    .footer_text {
      left: 16px;
    }
  }
`;

export default styles;
