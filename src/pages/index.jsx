import React from 'react';
import { Link } from 'gatsby';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';

import SignatureLarge from '../assets/img/signature_large.png';
import SignatureMedium from '../assets/img/signature_medium.png';
import SignatureSmall from '../assets/img/signature_small.png';

const IndexPage = ({ title }) => (
  <main>
    <style jsx>
      {`
      #signature {
        margin: 1.125rem 0 0 1.125rem;
        width: 20.3125rem;
      }
      `}
    </style>
    <Helmet>
      <title>{`${title} - Home`}</title>
    </Helmet>
    <div className="page-content">
      <h1>Simeon Smith</h1>
      <h2 className="sub-heading">Problem Solver, Graphic Designer, & Web Developer</h2>
      <p>
      I am a web developer, graphic designer, and avid problem solver. I have worked in a range
      of jobs and believe I can better myself in any situation.
      </p>
      <p>
      I love clear and concise designs. Finding information should be simple. Visuals should
      enhance messages and guide users to the content they seek.
      </p>
      <p>
      People are complex and surprising. Putting them in boxes does everyone a disservice.
      Viewing individuals complexly helps me come up with unique and effective solutions for
      each challenge.
      </p>
      <p>
        {'Please '}
        <Link to="/my-work">check out my work</Link>
        {' and feel free to '}
        <Link to="/make-contact/">contact me</Link>
        {' with any questions.'}
      </p>
      <img
        id="signature"
        srcSet={`${SignatureSmall} 309w,
        ${SignatureMedium} 338w ,
        ${SignatureLarge} 584w`}
        size="(max-width: 411px) 309px,
        (max-width: 768px) 338px,
        584px"
        src={SignatureLarge}
        alt="Simeon Smith's Signature"
      />
    </div>
  </main>
);

IndexPage.propTypes = {
  title: PropTypes.string,
};

IndexPage.defaultProps = {
  title: 'SimeonSmith.dev',
};

export default IndexPage;
