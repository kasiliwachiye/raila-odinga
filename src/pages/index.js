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
      gatsbyImageData(
        layout: FULL_WIDTH
        placeholder: BLURRED
        formats: [AUTO, WEBP]
      )
    }
  }

  {
    stalin: file(relativePath: { eq: "stalin.png" }) {
      ...FullWidthImage
    }
    fyp_people: file(relativePath: { eq: "fiveyearplan/people.png" }) {
      ...FullWidthImage
    }
    fyp_poster1: file(relativePath: { eq: "fiveyearplan/poster1.png" }) {
      ...FullWidthImage
    }
    fyp_poster2: file(relativePath: { eq: "fiveyearplan/poster2.png" }) {
      ...FullWidthImage
    }
    fyp_poster3: file(relativePath: { eq: "fiveyearplan/poster3.png" }) {
      ...FullWidthImage
    }
    purge_people: file(relativePath: { eq: "purge/people.png" }) {
      ...FullWidthImage
    }
    purge_rubble: file(relativePath: { eq: "purge/rubble.png" }) {
      ...FullWidthImage
    }
    purge_soldiers: file(relativePath: { eq: "purge/soldiers.png" }) {
      ...FullWidthImage
    }
    prop_poster1: file(relativePath: { eq: "propaganda/poster1.png" }) {
      ...FullWidthImage
    }
    prop_poster2: file(relativePath: { eq: "propaganda/poster2.png" }) {
      ...FullWidthImage
    }
    prop_poster3: file(relativePath: { eq: "propaganda/poster3.png" }) {
      ...FullWidthImage
    }
    prop_poster4: file(relativePath: { eq: "propaganda/poster4.png" }) {
      ...FullWidthImage
    }
    prop_poster5: file(relativePath: { eq: "propaganda/poster5.png" }) {
      ...FullWidthImage
    }
    prop_poster6: file(relativePath: { eq: "propaganda/poster6.png" }) {
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
    nkvd_police1: file(relativePath: { eq: "nkvd/police1.png" }) {
      ...FullWidthImage
    }
    nkvd_police2: file(relativePath: { eq: "nkvd/police2.png" }) {
      ...FullWidthImage
    }
    nkvd_police3: file(relativePath: { eq: "nkvd/police3.png" }) {
      ...FullWidthImage
    }
    nkvd_police4: file(relativePath: { eq: "nkvd/police4.png" }) {
      ...FullWidthImage
    }
    nkvd_police5: file(relativePath: { eq: "nkvd/police5.png" }) {
      ...FullWidthImage
    }
    cult_poster1: file(relativePath: { eq: "cult/poster1.png" }) {
      ...FullWidthImage
    }
    cult_poster2: file(relativePath: { eq: "cult/poster2.png" }) {
      ...FullWidthImage
    }
    cult_poster3: file(relativePath: { eq: "cult/poster3.png" }) {
      ...FullWidthImage
    }
    cult_poster4: file(relativePath: { eq: "cult/poster4.png" }) {
      ...FullWidthImage
    }
    cult_poster5: file(relativePath: { eq: "cult/poster5.png" }) {
      ...FullWidthImage
    }
  }
`;
