import css from 'styled-jsx/css';

import colors from '../consts/colors';

const layoutStyle = css.global`
@keyframes bgOn {
  0%  {
    opacity: 0.25;
    transition: none;
  }
  40% {
    opacity: 0.4;
  }
  100% {
    opacity: 1;
  }
}

body {
  background: ${colors.navy()};
  color: ${colors.carolina()};
  font-family: 'Open Sans', 'Arial', 'sans-serif';
  font-size: 1.25rem;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  font-weight: 300;

  @media screen and (max-width: 1700px) {
    font-size: 1.125rem;
  }

  @media screen and (max-width: 925px) {
    font-size: 1rem;
  }
}

h1 {
  color: white;
  font-family: 'Josefin Slab', 'serif';
  font-size: 2.875rem;
  font-weight: 600;
  margin: 2.375rem 0 1.25rem 0;

  @media screen and (max-width: 1700px) {
    font-size: 2.5rem;
    margin: 2.375rem 0 1.25rem 0;
  }

  @media screen and (max-width: 925px) {
    font-size: 2rem;
    margin: 2.125rem 0 1rem 0;
  }

  @media screen and (max-width: 700px) {
    font-size: 1.875rem;
    margin: 2rem 0 0.875rem 0;
  }
}

main .page-content > h1:first-child {
  margin-top:0;
  padding-right: 2.25rem;
  box-sizing: border-box;
}

h2 {
  color: white;
  font-family: 'Josefin Slab', 'Arial', sans-serif;
  font-size: 2.125rem;
  margin: 2.375rem 0 1.2375rem 0;

  @media screen and (max-width: 1700px) {
    font-size: 1.875rem;
    margin: 2.25rem 0 1.25rem 0;
  }
  @media screen and (max-width: 925px) {
    font-size: 1.5rem;
    margin: 2rem 0 1rem 0;
  }

  @media screen and (max-width: 700px) {
    font-size: 1.375rem;
    margin: 1.875rem 0 0.875rem 0;
  }

  &.sub-heading {
    color: ${colors.lilac()};
    font-family: 'Josefin Sans', 'Arial', sans-serif;
    font-style: italic;
    font-weight: 300;
    font-size: 1.5625rem;
    line-height: 2rem;
    margin: 1.375rem 0;


    @media screen and (max-width: 1700px) {
      font-size: 1.375rem;
      line-height: 1.875rem;
      margin: 1.25rem 0;
    }

    @media screen and (max-width: 925px) {
      font-size: 1.25rem;
      line-height: 1.625rem;
      margin: 1rem 0;
    }

    @media screen and (max-width: 700px) {
      font-size: 1.125rem;
      line-height: 1.375rem;
      margin: 0.875rem 0;
    }
  }
}

h3 {
  color: white;
  font-family: 'Josefin Slab', 'Arial', sans-serif;
  font-size: 2rem;
  margin: 2.375rem 0 1.2375rem 0;

  @media screen and (max-width: 1700px) {
    font-size: 1.75rem;
    margin: 2.25rem 0 1.25rem 0;
  }
  @media screen and (max-width: 925px) {
    font-size: 1.375rem;
    margin: 2rem 0 1rem 0;
  }

  @media screen and (max-width: 700px) {
    font-size: 1.25rem;
    margin: 1.875rem 0 0.875rem 0;
  }

  &.sub-heading {
    color: ${colors.lilac()};
    font-family: 'Josefin Sans', 'Arial', sans-serif;
    font-style: italic;
    font-weight: 300;
    font-size: 1.375rem;
    line-height: 1.875rem;
    margin: 1.25rem 0;


    @media screen and (max-width: 1700px) {
      font-size: 1.25rem;
      line-height: 1.625rem;
      margin: 1rem 0;
    }

    @media screen and (max-width: 925px) {
      font-size: 1.125rem;
      line-height: 1.375rem;
      margin: 0.875rem 0;
    }

    /*
    @media screen and (max-width: 700px) {
      font-size: 1rem;
      line-height: 1.25rem;
      margin: 0.875rem 0;
    }
    */
  }
}

p {
  margin: 1.125rem 0;
  line-height: 1.5rem;


  @media screen and (max-width: 1700px) {
    margin: 1rem 0;
    line-height: 1.375rem;
  }

  @media screen and (max-width: 925px) {
    margin: 0.875rem 0;
    line-height: 1.25rem;
  }
}

a {
  &:link {
    color: ${colors.spring()};
    transition: all 0.5s;

    &:focus, &:active {
      color: ${colors.spring()};
    }
  }

  &:visited {
    color: ${colors.lilac()};
  }

  &:hover {
    color: ${colors.springLight()};
  }
}

main {
  margin: 6rem;
  max-height: calc(100vh - 16.25rem);
  min-width: calc(100% - 10rem);
  padding-right: 0.5rem;
  box-sizing: border-box;
  overflow-y: scroll;
  position: relative;
  z-index: 1;

  > div {
    overflow: hidden;

    @media screen and (max-width: 700px) {
      overflow: initial;
    }
  }

  @media screen and (max-width: 1700px) {
    margin: 5rem;
    max-height: calc(100vh - 14.25rem);
  }

  @media screen and (max-width: 1100px) {
    max-height: calc(100vh - 14rem);
  }

  @media screen and (max-width: 900px) {
    margin: 4rem;
    max-height: calc(100vh - 11.6rem);
  }

  @media screen and (max-width: 700px) {
    margin: 3rem;
    max-height: unset;
    width: calc(100vw - 6rem);
    overflow: initial;
  };

  @media screen and (max-width: 500px) {
    margin: 2rem;
    width: calc(100vw - 4rem);
  };
}

.page-content {
  p {
    max-width: 45rem;

    @media screen and (max-width: 1700px) {
      max-width: 35rem;
    }

    @media screen and (max-width: 900px) {
      max-width: 30rem;
    }

    @media screen and (max-width: 800px) {
      max-width: 25rem;
    }
  }
}

.wrapper {
  min-height: 100%;
  min-width: 100%;
}

.background-wrapper {
  position: absolute;
  min-width: 100vw;
  max-width: 100vw;
  min-height: 100vh;
  left: 0;
  top: 0;
  overflow: hidden;
  z-index: -1;
  padding-left: 60%;
  line-height: 0;
  box-sizing: border-box;
  text-align: right;

  @media screen and (max-width: 700px) {
    position: fixed;
  }
}

#background {
  max-height: 100vh;
  min-height: 100vh;
  z-index: -1;
  overflow: hidden;
}

#background.turnOff {
  opacity: 0.25;
}

#background.turnOn {
  animation-name: bgOn;
  animation-duration: 2.5s;
}

.bg-photo-credit {
  position: absolute;
  bottom: 0;
  right: 0;
  margin: 0;
  padding: 0.25rem;
  font-size: 0.375rem;
  color: ${colors.lilacBright()};
  pointer-events: all;
  transition: none;

  a:link, a:visited, a:active, a:focus {
    color: ${colors.lilacBright()};
    text-decoration: none;
  }

  @media screen and (max-width: 700px) {
    position: fixed;
    right: initial;
    width: 100%;
    text-align: center;
    font-size: 0.75rem;
    color: ${colors.lilacBright(0.75)};

    a:link, a:visited, a:active, a:focus {
      color: ${colors.lilacBright(0.75)};
    }
  }
}

.background-gradient {
  background: linear-gradient(to top, ${colors.navy(0)} 5%, ${colors.navy(0.65)} 30%);
  left: 0;
  min-height: 100vh;
  min-width: 100vw;
  position: absolute;
  top: 0;
  z-index: 0;
  transition: opacity 0.5s;
  pointer-events: none;

  @media screen and (max-width: 700px) {
    position: fixed;
    background: radial-gradient(at top right, ${colors.navy(0)} 4rem,
${colors.navy(0.65)} 18rem);

    &.turnOff {
      opacity: 0;
    }
  }
}

@media screen and (min-width: 700px) {
  main::-webkit-scrollbar {
    -webkit-appearance: none;
    width: 8px;
  }

  main::-webkit-scrollbar-thumb {
    border-radius: 4px;
    background-color: ${colors.lilacBright(0.25)};
    box-shadow: inset 0 0 0.25rem ${colors.lilac(0.65)};
    transition: all 0.5s;
  }

  main:hover::-webkit-scrollbar-thumb {
    background-color: ${colors.lilacBright(0.75)};
    box-shadow: inset 0 0 0.25rem ${colors.lilac(0.85)};
  }
}
`;

export default layoutStyle;