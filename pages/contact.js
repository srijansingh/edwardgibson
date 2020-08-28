import Layout from "../components/Layout/layout";
import Head from "next/head";
import Contact from "../components/Contact";

function HomePage(props) {

   
    return (
      <Layout>
          <Head>
              <title>Contact</title>
              <meta name="title" content="Contact Edgiav" />
          <meta name="description" content="Address Regency Enclave, Raseora Sitapur-261001 E-mail eddworld29@gmail.com Phone Number +91 6392361319" />

          <meta property="og:type" content="website" />
          <meta property="og:url" content="https://edgiav.com/" />
          <meta property="og:title" content="Edgiav Contact" />
          <meta property="og:description" content="Address Regency Enclave, Raseora Sitapur-261001 E-mail eddworld29@gmail.com Phone Number +91 6392361319" />
          <meta property="og:image" content="/logo/logo.png" />

          <meta property="twitter:card" content="website" />
          <meta property="twitter:url" content="https://edgiav.com/" />
          <meta property="twitter:title" content="Edgiav Contact" />
          <meta property="twitter:description" content="Address Regency Enclave, Raseora Sitapur-261001 E-mail eddworld29@gmail.com Phone Number +91 6392361319" />
          <meta property="twitter:image" content="/logo/logo.png" />
              <script src="https://kit.fontawesome.com/a000f9134d.js" crossorigin="anonymous"></script>
          </Head>
           <header className="header">
            <div className="path">
                <a className="link" href="index.html">
                    <h4>
                        Home
                        <div className="underLine"></div>
                    </h4>
                    
                </a>
                <div>
                    <h4>
                       Contact
                        <div className="underLine"></div>
                    </h4>
                   
                </div>
            </div>
            <h1>
               Contact Us
            </h1>
            <p>
            A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth.
            </p>
        </header>
        
        <Contact />
        
        
        
       
        <style jsx>{`
            .header{
            
            width:60%;
            padding:20px;
            }
            
            .header > *{
                margin-bottom: 20px;
            }
            
            .path{
                display: flex;
                text-transform: uppercase ;
            }
            
            .header p{
                color:rgb(156, 156, 156);
            }
            
            .link{
                text-decoration:none;
            color:rgb(156, 156, 156);
            margin-right: 15px;
            }
            
            .underLine{
                width: 100%;
                padding: 1px;
                background-color:rgb(156, 156, 156);
            }
            
            .header h1{
                text-transform: capitalize;
                font-weight: 800;
            }

            
        `}</style>
      </Layout>
    )
  }
  
 

  export default HomePage
