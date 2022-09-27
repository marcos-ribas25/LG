import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`

:root {
  --orange: #ff6400;
  --blue: #003d59;
  --container: 1380px;
}

html {
  scroll-behavior: smooth;
  overflow-x: unset!important;
}

body {
  background-color: #efefef;
    overflow-x: hidden !important;
}

body::-webkit-scrollbar {
  width: 7px;
}

body::-webkit-scrollbar-track {
  background: #f1f1f1;
}

body::-webkit-scrollbar-thumb {
  background: var(--yellow);
}

body::-webkit-scrollbar-thumb:hover {
  background: var(--primary-color);
}

*:focus {
    outline: transparent !important;
}

.error-message {
    font-size: 13px;
    color: #db3232;
    text-align: left;
    margin-top: 5px;
}

button.swiper-button-disabled {
        opacity: .6;
      }

a,
button {
    cursor: pointer;
    text-decoration: none !important;
    transition: 0.25s;
}

a:hover,
button:hover {
    transition: 0.25s;
}

a::after,
a::before {
    transition: 0.3s;
}

a:hover::after,
a:hover::before {
    transition: 0.3s;
}

ol,
ul {
    list-style: none !important;
    padding-left: 0 !important;
    margin-bottom: 0 !important;
}

.container {
    max-width: var(--container);
    width: 100%;
    padding-left: 15px;
    padding-right: 15px;
    margin-left: auto;
    margin-right: auto;
}

  .show-mobile {
    display: none !important;
  }

  @media only screen and (max-width: 1600px) {
    html {
        font-size: 15.5px;
    }
    .container {
      max-width: 1240px;
    }
  }
  @media only screen and (max-width: 1400px) {
    html {
        font-size: 15px;
    }
    .container {
      max-width: 1080px;
    }
  }
  @media only screen and (max-width: 1200px) {
    html {
        font-size: 14.5px;
    }
    .container {
      max-width: 970px;
    }
  }
  @media only screen and (max-width: 1100px) {
    .container {
      max-width: 920px;
    }
  }
  @media only screen and (max-width: 1024px) {
    html {
        font-size: 14px;
    }
    .container {
      max-width: 735px;
    }
  }
@media only screen and (max-width: 900px) {
    .error-message {
    font-size: 12px;
    margin-top: 4px;
    padding-left: 10px;
}
}
@media only screen and (max-width:768px) {
  html {
        font-size: 13.5px;
    }
  .container {
      max-width: 630px;
    }
    .show-mobile {
      display: flex !important;
    }

    .hide-mobile {
      display: none !important;
    }
    
}
@media only screen and (max-width: 650px) {
  .container {
      max-width: 500px;
    }
  }

@media only screen and (max-width: 500px) {
    html {
        font-size: 13px;
    }
  }
`;
