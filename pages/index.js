import Layout from "../components/Layout/layout";
import Photograph from "../components/Gallery/Photograph";


function HomePage(props) {

    const photograph = props.data.data.map((list,index) => {
      return <Photograph  key={index} imagelink={list.imagelink}  index={index}  />
    })

    return (
      <Layout>
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
    const res = await fetch('http://edserver.herokuapp.com/user/gallery');
    const data = await res.json();
    return {
        data
    }
}

  export default HomePage
