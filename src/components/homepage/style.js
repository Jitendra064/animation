import styled from "styled-components";

export const Divcomponents = styled.div`
  color: #ffff;
  height: 600px;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: skyblue;

  .divup {
    width: 200px;
    height: 200px;
    margin: 0 10px;
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    .div1 {
      height: 100%;
      width: 100%;
      background-color: green;
      margin: 0 10px;
      position: absolute;
      transition: all 0.7s ease-in-out;
    }

    .div2 {
      width: 100%;
      height: 100%;
      background-color: blue;
      cursor: pointer;
      position: absolute;
      transition: all 0.7s ease-in-out;
    }

    &:hover {
      .div1 {
        transform: translateY(50%);
      }
      .div2 {
        transform: translateY(-50%);
      }
    }
  }
`;

export const ImageComponents = styled.div`
  background-color: black;
  height: 100vh;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;

  .imgs {
    width: 80%;
    height: 70%;
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
    animation: animate 10s ease-in-out 0s infinite normal none;

    @keyframes animate {
      0% {
        background-image: url("https://images.pexels.com/photos/1015568/pexels-photo-1015568.jpeg?auto=compress&cs=tinysrgb&w=600");
      }
      20% {
        background-image: url("https://images.pexels.com/photos/887723/pexels-photo-887723.jpeg?auto=compress&cs=tinysrgb&w=600");
      }
      40% {
        background-image: url("https://images.pexels.com/photos/1267697/pexels-photo-1267697.jpeg?auto=compress&cs=tinysrgb&w=600");
      }
      60% {
        background-image: url("https://images.pexels.com/photos/2323432/pexels-photo-2323432.jpeg?auto=compress&cs=tinysrgb&w=600");
      }
      80% {
        background-image: url("https://images.pexels.com/photos/974382/pexels-photo-974382.jpeg?auto=compress&cs=tinysrgb&w=600");
      }
      100% {
        background-image: url("https://images.pexels.com/photos/2159065/pexels-photo-2159065.jpeg?auto=compress&cs=tinysrgb&w=600");
      }
    }
  }
`;

export const ImageOpenComponents = styled.div`
  height: 600px;
  width: 100%;
  background-color: #562d0f;
  display: flex;
  padding: 2rem 4rem;
  gap: 10px;

  .div1 {
    border: 1px solid #f9f8f86b;
    height: 80%;
    width: 80%;
    border-radius: 10px;
    transition: flex 1s ease-in-out;
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
    flex: 1;
    background-image: url("https://images.pexels.com/photos/1015568/pexels-photo-1015568.jpeg?auto=compress&cs=tinysrgb&w=600");

    &:hover {
      flex: 4;
    }
  }
  .div2 {
    border: 1px solid #f9f8f86b;
    height: 80%;
    width: 80%;
    border-radius: 10px;
    transition: flex 1s ease-in-out;
    flex: 1;
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
    background-image: url("https://images.pexels.com/photos/1267697/pexels-photo-1267697.jpeg?auto=compress&cs=tinysrgb&w=600");

    &:hover {
      flex: 4;
    }
  }
  .div3 {
    border: 1px solid #f9f8f86b;
    height: 80%;
    width: 80%;
    border-radius: 10px;
    transition: flex 1s ease-in-out;
    flex: 1;
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
    background-image: url("https://images.pexels.com/photos/2323432/pexels-photo-2323432.jpeg?auto=compress&cs=tinysrgb&w=600");
    &:hover {
      flex: 4;
    }
  }
  .div4 {
    border: 1px solid #f9f8f86b;
    height: 80%;
    width: 80%;
    border-radius: 10px;
    transition: flex 1s ease-in-out;
    flex: 1;
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
    background-image: url("https://images.pexels.com/photos/974382/pexels-photo-974382.jpeg?auto=compress&cs=tinysrgb&w=600");
    &:hover {
      flex: 4;
    }
  }
  .div5 {
    border: 1px solid #f9f8f86b;
    height: 80%;
    width: 80%;
    border-radius: 10px;
    transition: flex 1s ease-in-out;
    flex: 1;
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
    background-image: url("https://images.pexels.com/photos/2159065/pexels-photo-2159065.jpeg?auto=compress&cs=tinysrgb&w=600");

    &:hover {
      flex: 4;
    }
  }
`;
