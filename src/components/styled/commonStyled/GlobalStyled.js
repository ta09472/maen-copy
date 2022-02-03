import { createGlobalStyle } from "styled-components";

const GlobalStyled = createGlobalStyle`
a {
  text-decoration: none;

}
a:visited {
  color: transparent;
}

button {
  color: #718093;
}

body {
    padding: 0;
    margin: 0;

}

h2 {
  margin-top:0.2em;
  margin-bottom:0.2em;
}
p {
  margin:0.2em;
}
html {
  z-index: 1;
}
`;

export default GlobalStyled;
