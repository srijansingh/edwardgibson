import Layout from "../components/Layout/layout";
import Head from "next/head";
import ReactHtmlParser from 'react-html-parser';
import {withRouter} from "next/router";


const Blog = withRouter((props)=> {

    const title = props.data.data.title;
    const content = props.data.data.content;
    return (


      <Layout>
          <Head>
              <title>{title}</title>
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
              {title}
            </h1>
            <p>
                {ReactHtmlParser(content)}
            </p>
        </header>
        
       
        
        
       
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
            }

            
        `}</style>
      </Layout>
    )
  })
  
  Blog.getInitialProps = async function(context) {
      
  
    const res = await fetch('http://edserver.herokuapp.com/api/blog/'+context.query.id);
    const data = await res.json();
    return {
        data
    }
  
   
}

  export default Blog