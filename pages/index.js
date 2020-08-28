import Layout from "../components/Layout/layout";
import Photograph from "../components/Gallery/Photograph";
import Head  from "next/head";

function HomePage(props) {

    const photograph = props.data.data.map((list,index) => {
      return <Photograph  key={index} imagelink={list.imagelink}  index={index}  />
    })

    return (
      <Layout>
        <Head>
       
          <title>Edgiav Photography</title>
          <meta name="title" content="Edgiav Photography" />
          <meta name="description" content="Clicking can be a passion, can be a hobby, can be any random job. But, what’s more important is CLICKING." />

         
          <meta property="og:type" content="website" />
          <meta property="og:url" content="https://edgiav.com/" />
          <meta property="og:title" content="Edgiav Photography" />
          <meta property="og:description" content="Clicking can be a passion, can be a hobby, can be any random job. But, what’s more important is CLICKING." />
          <meta property="og:image" content="/logo/logo.png" />

          <meta property="twitter:card" content="website" />
          <meta property="twitter:url" content="https://edgiav.com/" />
          <meta property="twitter:title" content="Edgiav Photography" />
          <meta property="twitter:description" content="Clicking can be a passion, can be a hobby, can be any random job. But, what’s more important is CLICKING." />
          <meta property="twitter:image" content="/logo/logo.png" />

          
        </Head>
        <main className="main">
           {photograph}
        </main>

    <style jsx>{`
      .main{
        display: grid;
        grid-template-columns: repeat(auto-fit,minmax(325px,1fr));
      
      }
    `}</style>
      </Layout>
    )
  }
  
  HomePage.getInitialProps = async function() {
    const res = await fetch('https://apis.edgiav.com/user/gallery');
    const data = await res.json();
    return {
        data
    }
}

  export default HomePage
