import Layout from "../components/Layout/layout";
import Photograph from "../components/Gallery/Photograph";
import Head from "next/head"

function HomePage(props) {

   
    return (
      <Layout>
          <Head>
              <title>About</title>
              <meta name="title" content="About Edgiav" />
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
                       About
                        <div className="underLine"></div>
                    </h4>
                   
                </div>
            </div>
            <h1>
                About Edgiav
            </h1>
            <p>
            Clicking can be a passion, can be a hobby, can be any random job. But, what’s more important is CLICKING. 
            </p>
        </header>
        
        <div className="container">
            <div className="left">
                <img src="/logo/cover.jpg"/>
            </div>
            <div className="right">
                <h3>
                    Edgiav 
                </h3>
                <p>
                
                It has been quite a time looking through the camera, capturing frames, but the perspective still remains the same. To capture a moment.  To describe a story.
                </p>
                <ul >
                    <li >Giving personal tips to budding photographers. </li>
                    <li>Editing tutorials via blogs.</li>
                    <li>Creating a portfolio.</li>
                </ul>
                <div className="socialMedia">
                    <i className="fab fa-facebook-f " ></i>
                    <i className="fab fa-twitter "   ></i>
                    <i className="fab fa-instagram " ></i>
                </div>
            </div>
           

        </div>
        
        <div className="card-container">
            <div className="card">
                <div className="photo">
                    <img src="/logo/edward.png" />
                </div>
                <h3>Edward Gibson</h3>
                <p className="profession">Founder, Edgiav Photography</p>
                <p className="description">
                    I am an ambitious workaholic, but apart from that, pretty simple person.
                </p>
                <div className="connect">
                    <a href="https://www.facebook.com/edward.yadav.71" target="_blank"><i className="fab fa-facebook-f " ></i></a>
                    <a href=""><i className="fab fa-twitter "   ></i></a>
                    <a href="https://instagram.com/edgiav" target="_blank"><i className="fab fa-instagram " ></i></a>
                    <a href="https://www.linkedin.com/in/edgiav/" target="_blank"><i className="fab fa-linkedin-in " ></i></a>
                </div>
            </div>
        </div>
        <style jsx>{`
            .header{
            
            width:60%;
            padding:60px;
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

            .container{
                background-color: rgb(211, 211, 211);
                display: flex;
               
               position: relative;
            }
            
            .left {
                
               
                width:50%;
                background-color: rgb(77, 77, 77);
            }
            .left img{
               
                height:100%;
                width:100%;
            }
            
            .right{
                padding:30px;
                width:50%;
                align-self: center;
                background-color: white;
                transform: scaleX(1.05);
                transform: translateX(-5%);
                height:85%;
                margin:40px 0;
                display: flex;
                flex-flow: column nowrap;
                justify-content: space-evenly;
                box-shadow: -5px 0px 10px 0px rgba(0, 0, 0, 0.295);
                z-index:2;
            }
            
            .right > *{
                color: var(--header-path-color);
                padding: 10px 0;
             }
            
             .right h3{
                 font-weight: 800;
                 font-size: 1.5rem;
             }
             
             .right h3 , .socialMedia i{
                 color:black;
             }
            
            .right:not(h3, .socialMedia){
               color: var(--header-path-color);
            }
            
           .right ul{
                margin-left: 40px;
            }
            
            .right ul li{
                margin-bottom: 5px;
            }
            
            .socialMedia i{
                margin-right: 35px;
                font-size:1.5rem;
            }

            .card-container{
   
                padding:40px 10px;
                display: grid;
                grid-template-columns: repeat(4,1fr);
                grid-row: repeat(1,fr);
                grid-gap:10px;
            }
            
            .card{
                background-color: rgb(255, 255, 255);
                padding:10px;
            }
            
            .card > *{
                padding:8px 0;
            }
            
            .photo{
                height:250px;
                
            }
            .photo img{
                width:100%;
                height:100%;
            }
            .profession{
                padding-top:0px;
                color:var(--header-path-color);
            }
            
            .description{
                color:rgb(139, 138, 138);
            }
            
            .connect i{
                margin-right: 5px;
                color: yellow;
            }
            
        `}</style>
      </Layout>
    )
  }
  
  

  export default HomePage
