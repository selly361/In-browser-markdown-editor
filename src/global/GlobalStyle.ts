import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`

*, *::before, *::after {
  box-sizing: border-box;
}

* {
  margin: 0;
  padding: 0;
}

html {
  --13px: 0.8125rem;
  --14px: 0.875rem;
  --15px: 0.9375rem;
  --16px: 1rem;
  --17px: 1.0625rem;
  --18px: 1.125rem;
  --19px: 1.1875rem;
  --20px: 1.25rem;
  --21px: 1.3125rem;
  --24px: 1.5rem;
  --28px: 1.75rem;
  --32px: 2rem;
  
  
  --black-1-opaque: rgba(21, 22, 25, .5);
  --black-2-opaque: rgba(30, 30, 30, .5);


  --black-1: hsla(225, 9%, 9%, 1.00);
  --black-2: hsla(216, 8%, 12%, 1.00);
  --black-3: hsla(220, 7%, 18%, 1.00);
  --black-4: hsla(216, 9%, 23%, 1.00);

  --grey-1: hsla(216, 8%, 38%, 1.00);
  --grey-2: hsla(213, 4%, 51%, 1.00);
  --grey-3: hsla(222, 9%, 78%, 1.00);
  --grey-4: hsla(0, 0%, 89%, 1.00);
  --grey-5: hsla(0, 0%, 96%, 1.00);

  --dark-orange: hsla(13, 75%, 58%, 1.00);
  --light-orange: hsla(21, 86%, 67%, 1.00);
  --white: hsla(0, 0%, 100%, 1.00);


  --h1-font-size: var(--32px);
  --h2-font-size: var(--28px);
  --h3-font-size: var(--24px);
  --h4-font-size: var(--20px);
  --h5-font-size: var(--16px);
  --h6-font-size: var(--14px);

  --roboto: 'Roboto' , sans-serif; 
  --robotoSlab: 'Roboto Slab', sans-serif;
  --robotoMono: 'Roboto Mono', sans-serif;
}

h1, h2, h3 , h4 , h5 , h6 {
  font-weight: var(--bolder);
  font-family: var(--roboto);
  transition: .5s;
  line-height: 35px;
}


  p, h1, h2, h3, h4, h5, h6 {
    overflow-wrap: break-word;
    word-break: break-word;
}




h1 {
  font-size: var(--h1-font-size);
}

h2 {
  font-size: var(--h2-font-size);
  font-weight: var(--light);
  font-family: var(--robotoSlab);

}

h3 {
  font-size: var(--h3-font-size);
}

h4 {
  font-size: var(--h4-font-size);
}

h5 {
  font-size: var(--h5-font-size);
}

h6 {
  font-size: var(--h6-font-size);
  color: var(--dark-orange);
}





#root {
  isolation: isolate;
  
}

html, body, #root {
  font-family: var(--robotoSlab);
  height: 100vh;
  width: 100vw;
  overflow-x:hidden;

}


body {
  line-height: 1.5;
}

img, picture, video, canvas, svg {
  display: block;
  max-width: 100%;
}

input, button, textarea, select {
  font: inherit;
}

button, svg {
  cursor: pointer;
}

p, h1, h2, h3, h4, h5, h6 {
  overflow-wrap: break-word;
}

input, button, fieldset, textarea{
  border: none;
  background-color: transparent;
  outline: none;
}




`;
