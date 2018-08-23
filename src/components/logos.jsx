import React from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import faReact from '@fortawesome/fontawesome-free-brands/faReact';
import faNodeJS from '@fortawesome/fontawesome-free-brands/faNodeJs';
import faJS from '@fortawesome/fontawesome-free-brands/faJs';

const ReactLogo = ({ className }) => (
  <FontAwesomeIcon alt="React" className={className} icon={faReact} />
);

ReactLogo.propTypes = {
  className: PropTypes.string,
};

ReactLogo.defaultProps = {
  className: '',
};

const JavaScriptLogo = ({ className }) => (
  <FontAwesomeIcon alt="JavaScript" className={className} icon={faJS} />
);

JavaScriptLogo.propTypes = {
  className: PropTypes.string,
};

JavaScriptLogo.defaultProps = {
  className: '',
};

const ReduxLogo = ({ className }) => (
  <svg alt="redux" className={className} width="100%" height="100%" viewBox="0 0 100 100" version="1.1" xmlns="http://www.w3.org/2000/svg">
    <g>
      <path d="M69.538,69.245c3.654,-0.378 6.425,-3.527 6.299,-7.307c-0.126,-3.779 -3.275,-6.803 -7.055,-6.803l-0.252,0c-3.905,0.126 -6.928,3.402 -6.803,7.307c0.126,1.89 0.882,3.528 2.016,4.662c-4.283,8.44 -10.834,14.613 -20.661,19.779c-6.677,3.527 -13.606,4.787 -20.535,3.905c-5.669,-0.756 -10.078,-3.275 -12.85,-7.433c-4.031,-6.173 -4.409,-12.85 -1.008,-19.527c2.394,-4.787 6.173,-8.315 8.567,-10.078c-0.504,-1.638 -1.26,-4.41 -1.638,-6.426c-18.267,13.229 -16.377,31.118 -10.834,39.559c4.157,6.299 12.598,10.204 21.921,10.204c2.519,0 5.039,-0.252 7.558,-0.882c16.126,-3.149 28.346,-12.724 35.275,-26.96Z" />
      <path d="M91.711,53.624c-9.574,-11.213 -23.684,-17.386 -39.81,-17.386l-2.016,0c-1.134,-2.268 -3.527,-3.779 -6.173,-3.779l-0.252,0c-3.905,0.126 -6.929,3.401 -6.803,7.307c0.126,3.779 3.276,6.803 7.055,6.803l0.252,0c2.772,-0.126 5.165,-1.89 6.173,-4.284l2.268,0c9.574,0 18.645,2.772 26.834,8.189c6.299,4.157 10.834,9.575 13.354,16.126c2.142,5.291 2.016,10.456 -0.252,14.866c-3.527,6.677 -9.449,10.33 -17.259,10.33c-5.04,0 -9.827,-1.512 -12.347,-2.646c-1.385,1.26 -3.905,3.276 -5.669,4.536c5.417,2.519 10.961,3.905 16.252,3.905c12.094,0 21.039,-6.677 24.44,-13.354c3.654,-7.307 3.402,-19.905 -6.047,-30.613Z" />
      <path d="M27.712,71.387c0.126,3.779 3.276,6.803 7.055,6.803l0.252,0c3.906,-0.126 6.929,-3.402 6.803,-7.307c-0.126,-3.779 -3.275,-6.803 -7.055,-6.803l-0.252,0c-0.252,0 -0.629,0 -0.881,0.126c-5.166,-8.567 -7.307,-17.889 -6.551,-27.968c0.503,-7.559 3.023,-14.11 7.432,-19.527c3.654,-4.661 10.709,-6.929 15.496,-7.055c13.354,-0.252 19.023,16.378 19.401,23.055c1.638,0.378 4.41,1.259 6.299,1.889c-1.511,-20.409 -14.109,-30.991 -26.204,-30.991c-11.338,0 -21.795,8.189 -25.952,20.283c-5.795,16.126 -2.016,31.621 5.039,43.842c-0.63,0.881 -1.008,2.267 -0.882,3.653Z" />
    </g>
  </svg>
);

ReduxLogo.propTypes = {
  className: PropTypes.string,
};

ReduxLogo.defaultProps = {
  className: '',
};

const NodeLogo = ({ className }) => (
  <FontAwesomeIcon alt="NodeJS" className={className} icon={faNodeJS} />
);

NodeLogo.propTypes = {
  className: PropTypes.string,
};

NodeLogo.defaultProps = {
  className: '',
};

const ExpressLogo = ({ className }) => (
  <svg alt="Express.JS" className={`${className} express`} width="100%" height="100%" viewBox="0 0 33 13" version="1.1" xmlns="http://www.w3.org/2000/svg">
    <rect className="artboard" x="0" y="0" width="33" height="12.187" />
    <g>
      <path d="M3.848,9.817l-3.848,0l0,-7.041l3.848,0l0,0.453l-3.357,0l0,2.663l3.169,0l0,0.453l-3.169,0l0,3.02l3.357,0l0,0.452Z" />
      <path d="M6.608,7.125l-1.826,-2.543l0.549,0l1.561,2.206l1.546,-2.206l0.525,0l-1.797,2.543l1.927,2.692l-0.554,0l-1.647,-2.336l-1.657,2.336l-0.525,0l1.898,-2.692Z" />
      <path d="M12.474,9.914c-0.806,0 -1.394,-0.302 -1.763,-0.906l-0.034,0l0.015,0.405c0.013,0.237 0.019,0.497 0.019,0.78l0,1.994l-0.477,0l0,-7.605l0.405,0l0.091,0.747l0.029,0c0.36,-0.565 0.935,-0.848 1.724,-0.848c0.707,0 1.245,0.232 1.616,0.696c0.371,0.464 0.556,1.139 0.556,2.025c0,0.861 -0.195,1.528 -0.585,2.001c-0.39,0.474 -0.922,0.711 -1.596,0.711Zm-0.01,-0.424c0.536,0 0.951,-0.199 1.245,-0.597c0.294,-0.399 0.441,-0.956 0.441,-1.672c0,-1.538 -0.556,-2.307 -1.667,-2.307c-0.61,0 -1.058,0.168 -1.343,0.504c-0.286,0.335 -0.429,0.882 -0.429,1.64l0,0.154c0,0.818 0.137,1.403 0.412,1.753c0.274,0.35 0.721,0.525 1.341,0.525Z" />
      <path d="M18.166,4.481c0.222,0 0.46,0.022 0.713,0.067l-0.091,0.458c-0.219,-0.055 -0.445,-0.082 -0.679,-0.082c-0.447,0 -0.813,0.19 -1.098,0.568c-0.286,0.379 -0.429,0.858 -0.429,1.436l0,2.889l-0.477,0l0,-5.235l0.405,0l0.048,0.944l0.034,0c0.215,-0.385 0.444,-0.656 0.688,-0.811c0.244,-0.156 0.54,-0.234 0.886,-0.234Z" />
      <path d="M21.86,9.914c-0.761,0 -1.354,-0.235 -1.779,-0.704c-0.426,-0.468 -0.638,-1.125 -0.638,-1.969c0,-0.835 0.205,-1.504 0.616,-2.006c0.411,-0.503 0.965,-0.754 1.662,-0.754c0.616,0 1.103,0.215 1.459,0.645c0.356,0.431 0.535,1.015 0.535,1.753l0,0.386l-3.771,0c0.006,0.719 0.174,1.268 0.503,1.647c0.329,0.379 0.8,0.568 1.413,0.568c0.299,0 0.561,-0.021 0.788,-0.062c0.226,-0.042 0.513,-0.132 0.859,-0.27l0,0.433c-0.295,0.129 -0.568,0.216 -0.818,0.263c-0.251,0.046 -0.527,0.07 -0.829,0.07Zm-0.139,-5.009c-0.504,0 -0.909,0.166 -1.214,0.498c-0.305,0.333 -0.483,0.812 -0.535,1.438l3.237,0c0,-0.607 -0.132,-1.081 -0.395,-1.423c-0.263,-0.342 -0.628,-0.513 -1.093,-0.513Z" />
      <path d="M28.405,8.454c0,0.469 -0.178,0.829 -0.534,1.082c-0.357,0.252 -0.862,0.378 -1.517,0.378c-0.7,0 -1.256,-0.108 -1.667,-0.323l0,-0.515c0.527,0.263 1.082,0.394 1.667,0.394c0.517,0 0.909,-0.085 1.177,-0.257c0.268,-0.172 0.402,-0.401 0.402,-0.686c0,-0.264 -0.106,-0.485 -0.32,-0.665c-0.213,-0.18 -0.564,-0.356 -1.052,-0.53c-0.523,-0.189 -0.891,-0.352 -1.103,-0.489c-0.212,-0.136 -0.372,-0.29 -0.479,-0.462c-0.108,-0.172 -0.162,-0.381 -0.162,-0.629c0,-0.391 0.165,-0.701 0.494,-0.929c0.329,-0.228 0.789,-0.342 1.38,-0.342c0.565,0 1.101,0.106 1.608,0.318l-0.178,0.433c-0.513,-0.212 -0.99,-0.318 -1.43,-0.318c-0.427,0 -0.766,0.071 -1.016,0.212c-0.251,0.142 -0.376,0.337 -0.376,0.588c0,0.273 0.097,0.491 0.291,0.655c0.195,0.164 0.574,0.347 1.139,0.549c0.472,0.17 0.816,0.323 1.031,0.46c0.215,0.136 0.377,0.291 0.484,0.465c0.108,0.173 0.161,0.377 0.161,0.611Z" />
      <path d="M33,8.454c0,0.469 -0.178,0.829 -0.535,1.082c-0.356,0.252 -0.862,0.378 -1.517,0.378c-0.7,0 -1.255,-0.108 -1.666,-0.323l0,-0.515c0.527,0.263 1.082,0.394 1.666,0.394c0.517,0 0.91,-0.085 1.178,-0.257c0.268,-0.172 0.402,-0.401 0.402,-0.686c0,-0.264 -0.107,-0.485 -0.32,-0.665c-0.214,-0.18 -0.565,-0.356 -1.053,-0.53c-0.523,-0.189 -0.891,-0.352 -1.102,-0.489c-0.212,-0.136 -0.372,-0.29 -0.48,-0.462c-0.107,-0.172 -0.161,-0.381 -0.161,-0.629c0,-0.391 0.165,-0.701 0.494,-0.929c0.329,-0.228 0.789,-0.342 1.379,-0.342c0.566,0 1.102,0.106 1.609,0.318l-0.178,0.433c-0.514,-0.212 -0.991,-0.318 -1.431,-0.318c-0.427,0 -0.765,0.071 -1.016,0.212c-0.25,0.142 -0.375,0.337 -0.375,0.588c0,0.273 0.097,0.491 0.291,0.655c0.194,0.164 0.574,0.347 1.139,0.549c0.472,0.17 0.816,0.323 1.031,0.46c0.215,0.136 0.376,0.291 0.484,0.465c0.107,0.173 0.161,0.377 0.161,0.611Z" />
    </g>
    <style jsx>
      {`
      .express {
        padding-bottom: 0;
        .artboard {
          fill: none;
        }
      }
      `}
    </style>
  </svg>
);

ExpressLogo.propTypes = {
  className: PropTypes.string,
};

ExpressLogo.defaultProps = {
  className: '',
};

const MySQLLogo = ({ className }) => (
  <svg alt="MySQL" className={`mysql-logo ${className}`} width="100%" height="100%" viewBox="0 0 1755 1192" version="1.1" xmlns="http://www.w3.org/2000/svg">
    <g>
      <g>
        <path d="M421.723,1085.21l-67.682,0c-2.394,-114.243 -8.985,-221.645 -19.762,-322.285l-0.602,0l-103.047,322.285l-51.53,0l-102.432,-322.285l-0.588,0c-7.599,96.625 -12.386,204.053 -14.374,322.285l-61.692,0c3.976,-143.774 13.968,-278.563 29.937,-404.38l83.887,0l97.632,297.134l0.602,0l98.234,-297.134l80.263,0c17.578,147.371 27.963,282.173 31.154,404.38m293.524,-298.351c-27.556,149.541 -63.915,258.199 -109.037,326.025c-35.155,52.21 -73.672,78.341 -115.615,78.341c-11.182,0 -24.98,-3.374 -41.329,-10.07l0,-36.058c7.992,1.151 17.369,1.805 28.146,1.805c19.592,0 35.338,-5.389 47.345,-16.192c14.36,-13.157 21.54,-27.949 21.54,-44.31c0,-11.222 -5.598,-34.162 -16.767,-68.899l-74.274,-230.655l66.492,0l53.309,172.508c11.98,39.17 16.976,66.518 14.975,82.094c29.152,-77.857 49.516,-162.751 61.117,-254.615l64.098,0l0,0.026Z" />
        <path d="M1616.17,1085.21l-192.256,0l0,-404.38l64.674,0l0,354.602l127.582,0l0,49.778Zm-242.583,9.769l-74.339,-36.685c6.592,-5.415 12.896,-11.274 18.572,-18.062c31.598,-37.117 47.357,-92.008 47.357,-164.713c0,-133.781 -52.497,-200.705 -157.532,-200.705c-51.504,0 -91.681,16.976 -120.415,50.942c-31.572,37.143 -47.332,91.838 -47.332,164.15c0,71.082 13.968,123.227 41.917,156.303c25.569,29.963 64.112,44.964 115.655,44.964c19.225,0 36.869,-2.354 52.942,-7.101l96.782,56.343l26.393,-45.436Zm-240.817,-90.687c-16.375,-26.341 -24.562,-68.637 -24.562,-126.955c0,-101.817 30.931,-152.785 92.858,-152.785c32.37,0 56.095,12.19 71.266,36.516c16.348,26.38 24.575,68.297 24.575,125.804c0,102.654 -30.957,153.988 -92.846,153.988c-32.382,0.013 -56.107,-12.137 -71.291,-36.568m-121.057,-31.167c0,34.293 -12.581,62.425 -37.718,84.462c-25.164,21.946 -58.907,32.946 -101.19,32.946c-39.55,0 -77.897,-12.634 -115.014,-37.772l17.382,-34.723c31.938,15.995 60.855,23.947 86.816,23.947c24.365,0 43.408,-5.402 57.219,-16.113c13.798,-10.751 22.025,-25.831 22.025,-44.899c0,-24.026 -16.754,-44.559 -47.489,-61.758c-28.342,-15.563 -85.024,-48.103 -85.024,-48.103c-30.722,-22.391 -46.103,-46.429 -46.103,-86.032c0,-32.775 11.47,-59.233 34.423,-79.361c22.979,-20.207 52.629,-30.277 88.974,-30.277c37.536,0 71.658,10.057 102.393,29.963l-15.589,34.737c-26.289,-11.169 -52.237,-16.754 -77.832,-16.754c-20.729,0 -36.738,4.983 -47.868,14.988c-11.221,9.966 -18.14,22.718 -18.14,38.36c0,23.908 17.107,44.703 48.679,62.242c28.721,15.589 86.816,48.691 86.816,48.691c31.507,22.352 47.24,46.168 47.24,85.456" />
        <path d="M1697.36,545.385c-39.106,-0.994 -69.383,2.942 -94.795,13.693c-7.337,2.93 -19.003,2.93 -20.023,12.202c3.963,3.924 4.421,10.254 7.86,15.669c5.859,9.769 16.074,22.913 25.399,29.767c10.241,7.847 20.52,15.616 31.297,22.456c19.004,11.757 40.544,18.598 59.063,30.316c10.79,6.814 21.515,15.629 32.318,22.966c5.31,3.911 8.71,10.254 15.603,12.7l0,-1.491c-3.453,-4.395 -4.434,-10.751 -7.821,-15.642l-14.675,-14.152c-14.177,-19.042 -31.794,-35.665 -50.797,-49.319c-15.642,-10.777 -49.856,-25.425 -56.199,-43.448l-0.994,-0.994c10.751,-1.007 23.502,-4.904 33.717,-7.899c16.623,-4.381 31.781,-3.387 48.835,-7.769c7.848,-1.962 15.629,-4.42 23.503,-6.84l0,-4.407c-8.841,-8.802 -15.145,-20.495 -24.444,-28.813c-24.876,-21.488 -52.289,-42.505 -80.617,-60.096c-15.171,-9.796 -34.685,-16.1 -50.837,-24.431c-5.82,-2.943 -15.629,-4.395 -19.056,-9.286c-8.762,-10.751 -13.693,-24.902 -20.049,-37.627c-14.125,-26.851 -27.845,-56.644 -40.034,-85.038c-8.815,-19.042 -14.177,-38.059 -24.928,-55.676c-50.353,-83.049 -105.035,-133.35 -189.078,-182.722c-18.062,-10.28 -39.55,-14.661 -62.503,-20.049l-36.66,-1.936c-7.821,-3.427 -15.655,-12.725 -22.482,-17.12c-27.884,-17.578 -99.672,-55.676 -120.18,-5.375c-13.209,31.794 19.54,63.052 30.787,79.178c8.305,11.195 19.069,23.934 24.876,36.646c3.44,8.305 4.408,17.12 7.847,25.896c7.821,21.502 15.132,45.422 25.412,65.485c5.362,10.228 11.209,20.978 18.062,30.238c3.923,5.415 10.75,7.808 12.241,16.636c-6.814,9.731 -7.35,24.418 -11.26,36.633c-17.578,55.205 -10.712,123.594 14.203,164.164c7.795,12.215 26.393,39.105 51.269,28.799c22.024,-8.789 17.146,-36.633 23.476,-61.051c1.451,-5.899 0.497,-9.77 3.426,-13.641l0,0.954c6.814,13.668 13.694,26.838 20.011,40.544c15.158,23.921 41.551,48.849 63.536,65.42c11.705,8.841 20.978,23.96 35.639,29.361l0,-1.464l-0.968,0c-2.968,-4.382 -7.311,-6.344 -11.208,-9.744c-8.815,-8.802 -18.572,-19.553 -25.412,-29.309c-20.481,-27.374 -38.608,-57.677 -54.695,-88.948c-7.873,-15.172 -14.661,-31.755 -21.004,-46.9c-2.956,-5.847 -2.956,-14.662 -7.86,-17.604c-7.351,10.737 -18.062,20.036 -23.424,33.193c-9.299,21.044 -10.267,46.927 -13.72,73.843l-1.922,0.941c-15.564,-3.91 -20.979,-20.01 -26.89,-33.677c-14.635,-34.711 -17.094,-90.426 -4.395,-130.473c3.401,-10.241 18.114,-42.493 12.242,-52.249c-2.943,-9.352 -12.726,-14.675 -18.088,-22.038c-6.304,-9.26 -13.209,-20.978 -17.604,-31.258c-11.718,-27.347 -17.617,-57.651 -30.238,-84.985c-5.898,-12.739 -16.139,-25.922 -24.43,-37.654c-9.313,-13.183 -19.553,-22.469 -26.916,-38.098c-2.433,-5.375 -5.847,-14.164 -1.936,-20.01c0.955,-3.924 2.943,-5.389 6.84,-6.369c6.33,-5.35 24.418,1.451 30.761,4.394c18.114,7.324 33.259,14.164 48.378,24.418c6.84,4.904 14.177,14.19 22.953,16.636l10.28,0c15.603,3.4 33.194,0.942 47.881,5.362c25.883,8.318 49.333,20.521 70.363,33.691c63.994,40.583 116.767,98.247 152.393,167.119c5.846,11.221 8.331,21.501 13.667,33.207c10.293,23.96 23.018,48.391 33.233,71.841c10.267,22.953 20.05,46.39 34.711,65.459c7.311,10.253 36.685,15.629 49.856,21.004c9.743,4.381 24.914,8.279 33.703,13.654c16.623,10.241 33.181,21.998 48.81,33.259c7.782,5.859 32.239,18.075 33.691,27.858m-498.376,-424.586c-6.745,-0.07 -13.47,0.757 -19.997,2.459l0,0.981l0.941,0c3.937,7.807 10.777,13.222 15.655,20.036c3.937,7.834 7.351,15.603 11.209,23.424l0.942,-0.968c6.892,-4.878 10.319,-12.699 10.319,-24.431c-2.969,-3.453 -3.427,-6.827 -5.899,-10.254c-2.877,-4.891 -9.22,-7.324 -13.17,-11.247" />
        <path d="M1743.9,1085.14l10.123,0l0,-49.542l-15.184,0l-12.386,33.809l-13.457,-33.809l-14.622,0l0,49.542l9.56,0l0,-37.693l0.536,0l14.099,37.693l7.285,0l14.046,-37.693l0,37.693Zm-81.545,0l10.711,0l0,-41.145l14.021,0l0,-8.41l-39.341,0l0,8.41l14.583,0l0.026,41.145Z" />
      </g>

    </g>
    <style jsx>
      {`
      .mysql-logo {
        height: 2rem;
      }
      `}
    </style>
  </svg>
);

MySQLLogo.propTypes = {
  className: PropTypes.string,
};

MySQLLogo.defaultProps = {
  className: '',
};

const GatsbyLogo = ({ className }) => (
  <svg className={className} viewBox="0 0 256 256" version="1.1" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid">
    <g>
      <path d="M128,0 C57.3075981,0 0,57.307374 0,128 C0,198.69285 57.3078221,256 128,256 C198.69285,256 256,198.692626 256,128 C256,57.307374 198.69285,0 128,0 Z M27.503973,129.334313 L126.665463,228.496027 C72.2144512,227.786305 28.2134711,183.785325 27.503973,129.334313 Z M150.496265,225.983324 L30.0166761,105.503735 C40.2328216,60.8232766 80.2223482,27.4871709 128,27.4871709 C161.397489,27.4871709 190.984927,43.7800881 209.262736,68.8464075 L195.346089,81.125855 C180.519662,59.8637627 155.886614,45.9486835 128,45.9486835 C92.4948508,45.9486835 62.259523,68.5011796 50.8311596,100.061636 L155.938588,205.169064 C181.463942,195.925651 201.095107,174.378594 207.669894,147.692325 L164.102633,147.692325 L164.102633,128.000224 L210.051317,128.000224 L210.051317,127.999776 L228.512829,127.999776 L228.512829,128 C228.512829,175.777652 195.176947,215.767178 150.496265,225.983324 Z" />
    </g>
  </svg>
);

GatsbyLogo.propTypes = {
  className: PropTypes.string,
};

GatsbyLogo.defaultProps = {
  className: '',
};

function pickLogo(type) {
  switch (type) {
    case 'react':
      return <ReactLogo />;
    case 'redux':
      return <ReduxLogo />;
    case 'node':
      return <NodeLogo />;
    case 'express':
      return <ExpressLogo />;
    case 'mysql':
      return <MySQLLogo />;
    case 'gatsby':
      return <GatsbyLogo />;
    case 'javascript':
      return <JavaScriptLogo />;
    default:
      return null;
  }
}

const Logos = ({ type, className }) => (
  <span className="tech-logos">
    {pickLogo(type)}
    <style jsx>
      {`
      .tech-logos :global(svg) {
        width: initial;
        height: 1.5rem;
        fill: white;
        color: white;
        padding: 0.25rem;

        > * {
          fill: white;
        }

        &.svg-inline--fa {
          width: initial;
          height: 1.5rem;
        }
      }
      `}
    </style>
  </span>
);

export default Logos;
