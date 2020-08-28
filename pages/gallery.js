import Layout from "../components/Layout/layout";
import Photograph from "../components/Gallery/Photograph";


function GalleryPage(props) {

    const photograph = props.data.data.map((list,index) => {
      return <Photograph  key={index} imagelink={list.imagelink}  index={index}  />
    })

    return (
      <Layout>
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
                        Galleries
                        <div className="underLine"></div>
                    </h4>
                   
                </div>
            </div>
            <h1>
                Galleries
            </h1>
            <p>
                Once a player is always a player irrespective of place,things,situation.Real player is not afraid of loosing, he is afraid of not playing the games, he is afraid of not taking the whole responsibility.
            </p>
    </header>
        <main className="main">
           {photograph}
        </main>

    <style jsx>{`
      .main{
        display: grid;
        grid-template-columns: repeat(auto-fit,minmax(325px,1fr));
      
        }
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
    `}</style>
      </Layout>
    )
  }
  
  GalleryPage.getInitialProps = async function() {
    const res = await fetch('https://apis.edgiav.com/user/gallery');
    const data = await res.json();
    return {
        data
    }
}

  export default GalleryPage
