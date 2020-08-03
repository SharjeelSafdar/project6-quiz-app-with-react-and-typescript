import styled, { createGlobalStyle } from 'styled-components';
// import bgImage0 from './images/bg_image_0.jpg';
import bgImage1 from './images/bg_image_1.jpg';
// import bgImage2 from './images/bg_image_2.jpg';
// import bgImage3 from './images/bg_image_3.jpg';
// import bgImage4 from './images/bg_image_4.jpg';
// import bgImage5 from './images/bg_image_5.jpg';
// import bgImage6 from './images/bg_image_6.jpg';
// import bgImage7 from './images/bg_image_7.jpg';
// import bgImage8 from './images/bg_image_8.jpg';
// import bgImage9 from './images/bg_image_9.jpg';

// const bgImages = [ bgImage0, bgImage1, bgImage2, bgImage3, bgImage4, bgImage5, bgImage6, bgImage7, bgImage8, bgImage9 ];
// const currentBackgroundImage = bgImages[Math.floor(Math.random()*10000000) % bgImages.length]

export const GlobalStyle = createGlobalStyle`
    html {
        height: 100%;
    }
    body {
        background-image: url(${/* currentBackgroundImage */bgImage1});
        background-size: cover;
        margin: 0;
        padding: 0 20px;
        display: flex;
        justify-content: center;
    }
    #root {
        display: flex;
        flex-direction: column;
        justify-content: center;
    }
    * {
        box-sizing: border-box;
        font-family: 'Catamaran', sans-serif;
    }
`;

export const Title = styled.h1`
    font-family: Fascinate Inline, Haettenschweiler, 'Arial Narrow Bold', sans-serif;
    background-image: linear-gradient(180deg, #fff, #87f1ff);
    background-size: 100%;
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    -moz-background-clip: text;
    -moz-text-fill-color: transparent;
    filter: drop-shadow(2px 2px #0085a3);
    font-size: 70px;
    font-weight: 400;
    text-align: center;
    margin: 20px;
`;