import sajaLogo from "@/assets/logo.png";
import styled from "styled-components";

function Header() {
  return (
    <StyledDiv>
      <a className="imgContainner" href="/">
        <img src={sajaLogo} alt="사자 로고" />
      </a>
      <nav>
        <ul>
          <li>
            <a href="/">중고거래</a>
          </li>
          <li>
            <a href="/">동네가게</a>
          </li>
          <li>
            <a href="/">인기매물</a>
          </li>
        </ul>
      </nav>
      <input type="text" placeholder="물품이나 동네를 검색해보세요"></input>
      <div>
        <a href="/">로그인</a>
      </div>
      <button>회원가입</button>
    </StyledDiv>
  );
}

export default Header;

const StyledDiv = styled.div`
  display: flex;
  width: 1200px;
  height: 64px;
  justify-content: center;
  margin: 10px auto;
  line-height: 64px;

  img {
    width: 150px;
    height: 64px;
  }

  li {
    float: left;
    margin: 0 16px;
  }

  button {
    background-color: #6c816d;
    color: white;
    width: 100px;
    height: 40px;
    margin: 12px 16px 12px 20px;
    border-radius: 8px;
    border: none;
  }

  input {
    width: 400px;
    height: 40px;
    margin-top: 12px;
    margin-right: 31px;
    margin-left: 16px;
    border-radius: 6px;
    border: none;
    background-color: #f2f3f6;
    padding-left: 10px;
  }

  a {
    text-decoration-line: none;
    color: black;
    width: 64px;
    height: 24px;
    font-weight: 700;
    font-size: 18px;
  }

  .imgContainner {
    width: 150px;
    height: 64px;
  }
`;
