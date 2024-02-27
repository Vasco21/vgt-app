import styled from 'styled-components';

export const Container = styled.div`
.app__header {
    background-color: pink ;
}

.app__header-h1 {
    color: white;
    font-weight: 700;
    letter-spacing: 0.01em;
    text-transform: capitalize;
    line-height: 90px;
    font-size: 90px;
}
.app__header p{
    color:black;
}

img {
    width: 80%;
    border-radius: 20%;
}

.custom__button p{
    padding: 5px 0;
    background-color: Yellow !important;
    border-radius: 5px;
    width: 100px;
    cursor: pointer;
    transition: 0.2s;
    font-family: "Poppins SemiBold";
    
}
.custom__button p:hover{
    color: blue !important;
}
.custom__button:focus{
    outline: none !important;
    box-shadow: none !important;
}

@media screen and (min-width: 2000px) {
    .app__header-h1 {
        font-size: 180px;
        line-height: 210px;
    }
}

@media screen and (max-width: 1150px) {
    .app__header-h1 {
        font-size: 90px;
    }
}

@media screen and (max-width: 650px) {
    .app__header-h1 {
        font-size: 70px;
        line-height: 87px;
    }
}

@media screen and (max-width: 450px) {
    .app__header-h1 {
        font-size: 50px;
        line-height: 70px;
    }
}

.section__padding {
    padding: 4rem 6rem;
  }
  
  .flex__center {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  
  .app__bg {

    background-position: center;
    background-size: cover;
    background-repeat: repeat;
    background-attachment: fixed;
  }
  
  .app__wrapper {
    display: flex;
    justify-content: space-between;
    align-items: center;
  
    min-height: 100vh;
  }
  
  .app__wrapper_info {
    flex: 1;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: flex-start;
    flex-direction: column;
  }
  
  .app__wrapper_img {
    flex: 1;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  
    margin-left: 2rem;
  }
  
  .app__wrapper_img-reverse {
    justify-content: flex-start;
    margin-right: 2rem;
  }
  
  .app__wrapper_img img {
    width: 80%;
  }
  
  .custom__button {
    background-color: var(--color-crimson);
      color: var(--color-black);
      font-family: var(--font-base);
      font-weight: 700;
      letter-spacing: 0.04em;
      line-height: 28px;
      font-size: 16px;
      padding: 0.5rem 1.5rem;
      border-radius: 1px;
      border: none;
      outline: none;
      cursor: pointer;
  }
  
  .p__cormorant {
    font-family: var(--font-base);
    color: var(--color-white);
    font-weight: 700;
    letter-spacing: 0.04em;
    text-transform: capitalize;
    font-feature-settings: 'tnum' on, 'lnum' on;
    line-height: 29.9px;
    font-size: 23px;
  }
  
  .p__opensans {
    font-family: var(--font-alt);
    color: var(--color-white);
    font-weight: 400;
    letter-spacing: 0.04em;
    text-transform: capitalize;
    line-height: 28px;
    font-size: 16px;
  }
  
  .headtext__cormorant {
    font-family: var(--font-base);
    color: var(--color-golden);
    font-size: 64px;
    line-height: 83.2px;
    letter-spacing: 0.04em;
    text-transform: capitalize;
  }
  
  .spoon__img {
    width: 45px;
  }
  
  @media screen and (min-width: 2000px) {
    .custom__button,
    .p__cormorant {
      font-size: 37px;
      line-height: 67px;
    }
  
    .p__opensans {
      font-size: 30px;
      line-height: 50px;
    }
  
    .headtext__cormorant {
      font-size: 150px;
      line-height: 210px;
    }
  
    .spoon__img {
      width: 80px;
    }
  }
  
  @media screen and (max-width: 1150px) {
    .app__wrapper {
      flex-direction: column;
    }
  
    .app__wrapper_img {
      margin: 5rem 0 0 0;
    }
  
    .app__wrapper_img-reverse {
      margin: 0 0 5rem 0;
    }
  
    .app__wrapper_img img {
      width: 100%;
    }
  }
  
  @media screen and (max-width: 850px) {
    .section__padding {
      padding: 4rem;
    }
  }
  
  @media screen and (max-width: 650px) {
    .section__padding {
      padding: 4rem 2rem;
    }
    
    .p__cormorant {
      font-size: 21px;
    }
  
    .p__opensans {
      font-size: 14px;
    }
  }
  
  @media screen and (max-width: 450px) {
    .p__opensans {
      font-size: 12px;
    }
  
    .p__cormorant {
      font-size: 19px;
    }
  
    .headtext__cormorant {
      font-size: 45px;
      line-height: 70px;
    }
  }

`