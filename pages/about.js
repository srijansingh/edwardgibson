import Layout from "../components/Layout/layout";
import Photograph from "../components/Gallery/Photograph";
import Head from "next/head"

function HomePage(props) {

   
    return (
      <Layout>
          <Head>
              <title>About</title>
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
                About Us
            </h1>
            <p>
                Once a player is always a player irrespective of place,things,situation.Real player is not afraid of loosing, he is afraid of not playing the games, he is afraid of not taking the whole responsibility.
            </p>
        </header>
        
        <div className="container">
            <div className="left">
                <img src="/logo/cover.jpg"/>
            </div>
            <div className="right">
                <h3>
                    Edgiav Photography
                </h3>
                <p>
                    Photography Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.
                </p>
                <ul >
                    <li >Even the all-powerful Pointing has no control about the blind texts</li>
                    <li>One day however a small line of blind text by the name of Lorem Ipsum decided</li>
                    <li>The Big Oxmox advised her not to do so, because there were thousands</li>
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
                <div className="photo"></div>
                <h3>Edward Gibson</h3>
                <p className="profession">Founder, Edgiav Photography</p>
                <p className="description">
                    I am an ambitious workaholic, but apart from that, pretty simple person.
                </p>
                <div className="connect">
                    <a href=""><i className="fab fa-facebook-f " ></i></a>
                    <a href=""><i className="fab fa-twitter "   ></i></a>
                    <a href=""><i className="fab fa-instagram " ></i></a>
                    <a href=""><i className="fab fa-linkedin-in " ></i></a>
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
                background-color: rgb(230, 230, 230);
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
  
  HomePage.getInitialProps = async function() {
    const res = await fetch('http://edserver.herokuapp.com/user/gallery');
    const data = await res.json();
    return {
        data
    }
}

  export default HomePage
