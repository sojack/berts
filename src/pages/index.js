import React from "react";
import Seo from "../components/seo";
import Layout from "../components/layout";
import { Link } from "gatsby";
// import { StaticImage } from "gatsby-plugin-image"



const IndexPage = () => {
  return (
    <Layout>
      <Seo title="Ottawa Senators Concession Online Menu" />
      <p>Ottawa Senators Concession Online Menu</p>
      <ul>
        <li>
          <Link to="/berts">Berts</Link>
        </li>
        <li>
          <Link to="/checkpoint">Checkpoint</Link>
        </li>
      </ul>
    </Layout>
  );
};

export default IndexPage;
