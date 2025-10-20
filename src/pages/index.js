/* eslint react/jsx-pascal-case: 0 */
import React from 'react';
import { graphql } from 'gatsby';

import { Hero, FiveYearPlan, Purge, Propaganda, NKVD, Transition, Cult } from '@views';

const HomePage = ({ data }) => {
  return (
    <>
      <Hero data={data} />
      <div id="economy">
        <FiveYearPlan data={data} />
      </div>
      <div id="purge">
        <Purge data={data} />
      </div>
      <Propaganda data={data} />
      <Transition data={data} />
      <div id="nkvd">
        <NKVD data={data} />
      </div>
      <Cult data={data} />
    </>
  );
};

export default HomePage;

export const query = graphql`
  fragment FullWidthImage on File {
    childImageSharp {
      gatsbyImageData(layout: FULL_WIDTH, placeholder: BLURRED, formats: [AUTO, WEBP])
    }
  }

  {
    raila: file(relativePath: { eq: "raila.png" }) {
      ...FullWidthImage
    }
    early_life: file(relativePath: { eq: "early-life/el-1.png" }) {
      ...FullWidthImage
    }
    early_life1: file(relativePath: { eq: "early-life/el-2.png" }) {
      ...FullWidthImage
    }
    early_life2: file(relativePath: { eq: "early-life/el-3.png" }) {
      ...FullWidthImage
    }
    early_life3: file(relativePath: { eq: "early-life/el-4.png" }) {
      ...FullWidthImage
    }
    detention_1: file(relativePath: { eq: "detention/detention-1.png" }) {
      ...FullWidthImage
    }
    detention_2: file(relativePath: { eq: "detention/detention-2.png" }) {
      ...FullWidthImage
    }
    detention_3: file(relativePath: { eq: "detention/detention-3.png" }) {
      ...FullWidthImage
    }
    election1: file(relativePath: { eq: "elections/elections-1.png" }) {
      ...FullWidthImage
    }
    election2: file(relativePath: { eq: "elections/elections-2.png" }) {
      ...FullWidthImage
    }
    election3: file(relativePath: { eq: "elections/elections-3.png" }) {
      ...FullWidthImage
    }
    election4: file(relativePath: { eq: "elections/elections-4.png" }) {
      ...FullWidthImage
    }
    election5: file(relativePath: { eq: "elections/elections-5.png" }) {
      ...FullWidthImage
    }
    election6: file(relativePath: { eq: "elections/elections-6.png" }) {
      ...FullWidthImage
    }
    trans_image1: file(relativePath: { eq: "transition/image1.png" }) {
      ...FullWidthImage
    }
    trans_image2: file(relativePath: { eq: "transition/image2.png" }) {
      ...FullWidthImage
    }
    trans_image3: file(relativePath: { eq: "transition/image3.png" }) {
      ...FullWidthImage
    }
    reforms1: file(relativePath: { eq: "reforms/reforms-1.png" }) {
      ...FullWidthImage
    }
    reforms2: file(relativePath: { eq: "reforms/reforms-2.png" }) {
      ...FullWidthImage
    }
    reforms3: file(relativePath: { eq: "reforms/reforms-3.png" }) {
      ...FullWidthImage
    }
    reforms4: file(relativePath: { eq: "reforms/reforms-4.png" }) {
      ...FullWidthImage
    }
    reforms5: file(relativePath: { eq: "reforms/reforms-5.png" }) {
      ...FullWidthImage
    }
    legacy1: file(relativePath: { eq: "legacy/legacy-1.png" }) {
      ...FullWidthImage
    }
    legacy2: file(relativePath: { eq: "legacy/legacy-2.png" }) {
      ...FullWidthImage
    }
    legacy3: file(relativePath: { eq: "legacy/legacy-3.png" }) {
      ...FullWidthImage
    }
    legacy4: file(relativePath: { eq: "legacy/legacy-4.png" }) {
      ...FullWidthImage
    }
    legacy5: file(relativePath: { eq: "legacy/legacy-5.png" }) {
      ...FullWidthImage
    }
  }
`;
