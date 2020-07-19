import Layout from "../components/Layout/layout";
import Head from "next/head";
import Contact from "../components/Contact";

function HomePage(props) {

   
    return (
      <Layout>
          <Head>
              <title>Contact</title>
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
  
  HomePage.getInitialProps = async function() {
    const res = await fetch('http://edserver.herokuapp.com/user/gallery');
    const data = await res.json();
    return {
        data
    }
}

  export default HomePage
