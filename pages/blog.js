import Layout from "../components/Layout/layout";
import Head from "next/head"
import Blog from "../components/Blog/blog";


function HomePage(props) {

    const blog = props.data.data.map((list,index) => {
        return (
           
                <Blog id={list._id}   imagelink={list.imagelink} category={list.category} title={list.title} date={list.created}  index={index}  />
          
        )
      })
   
    return (


      <Layout>
          <Head>
              <title>Blog</title>
              <meta name="title" content="Blog Edgiav" />
          <meta name="description" content="Clicking can be a passion, can be a hobby, can be any random job. But, what’s more important is CLICKING." />

         
          <meta property="og:type" content="website" />
          <meta property="og:url" content="https://edgiav.com/" />
          <meta property="og:title" content="Edgiav Blog" />
          <meta property="og:description" content="Clicking can be a passion, can be a hobby, can be any random job. But, what’s more important is CLICKING." />
          <meta property="og:image" content="/logo/logo.png" />

          <meta property="twitter:card" content="website" />
          <meta property="twitter:url" content="https://edgiav.com/" />
          <meta property="twitter:title" content="Edgiav Blog" />
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
                       Blog
                        <div className="underLine"></div>
                    </h4>
                   
                </div>
            </div>
            <h1>
               Read Our Blog
            </h1>
            <p>
            A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth.
            </p>
        </header>
        
        <div className="blog">
            {blog}
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

            .blog{
                display:flex;
                flex-direction:row;
                flex-wrap:wrap;
                padding-bottom:50px
            }

            
        `}</style>
      </Layout>
    )
  }
  
  HomePage.getInitialProps = async function() {
      
   try{
    const res = await fetch('https://api.edgiav.com/api/blog');
    const data = await res.json();
    return {
        data
    }
   }
   catch{
       return data;
   }
}

  export default HomePage
