import styled from "styled-components";

export const DivStyle = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  max-height: 320px;
  overflow-y: scroll;

  ::-webkit-scrollbar{
    display: none;
  }

  .card-div {
    display: flex;
    align-items: center;
    margin-left: 20px;
    margin-right: 20px;
    gap: 10px;
    background-color: lightgray;
    min-height: 110px;
    border-radius: 4px;
  }

  .infoCard-div {
    margin-right: 10px;
  }

  img {
    width: 90px;
    border-radius: 100%;
    margin-left: 10px;
  }

  p {
    font-size: 12px;
  }

  a {
    text-transform: capitalize;
  }

  @media(min-width: 450px){
    ::-webkit-scrollbar {
      display: initial;
      width: 15px; 
    }

    ::-webkit-scrollbar-track {
      background: blueviolet; 
      border-radius: 10px;
    }

    ::-webkit-scrollbar-thumb {
      background-color: pink; 
      border-radius: 20px; 
      border: 4px solid blueviolet;
    }
  }
`;
