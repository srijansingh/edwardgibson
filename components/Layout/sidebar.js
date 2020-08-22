import React, { Component } from 'react';
import styles from "../css/sidebar.module.css";
import ActiveLink from "./ActiveLink";
import Head from "next/head";


class Sidebar extends Component {
    state = {
        open:false
    }

    handleClick = () => {
        this.setState({
            open:!this.state.open
        })
    }
    render() {
        return (
            <div>
                 <Head>
                   
                    <script src="https://kit.fontawesome.com/a000f9134d.js" crossorigin="anonymous"></script>
                </Head>
                <div>
               
                <aside className={styles.aside}>
                    <div className={styles.logo}>
                        <img src="/logo/logo.png" />
                    </div>
                    <div className={styles.ul}>

                    <ActiveLink activeClassName={styles.active} target="_blank" href="/"><span className={styles.link} >Home</span></ActiveLink>
                    <ActiveLink activeClassName={styles.active} target="_blank" href="/gallery"><span className={styles.link} >Gallery</span></ActiveLink>                           
                    <ActiveLink activeClassName={styles.active} target="_blank" href="/blog"><span className={styles.link} >Blog</span></ActiveLink>
                    <ActiveLink activeClassName={styles.active} target="_blank" href="/about"><span className={styles.link} >About</span></ActiveLink>
                    <ActiveLink activeClassName={styles.active} target="_blank" href="/contact"><span className={styles.link} >Contact</span></ActiveLink>
                         
                    </div>
                    <div className={styles.followUs}>
                        <h4>Follow us here</h4>
                        <div className={styles.followUsNetworks}>
                        <a href="https://www.facebook.com/edward.yadav.71" target="_blank"><i className="fab fa-facebook-f " ></i></a>
                        <a href=""><i className="fab fa-twitter "   ></i></a>
                        <a href="https://instagram.com/edgiav" target="_blank"><i className="fab fa-instagram " ></i></a>
                        <a href="https://www.linkedin.com/in/edgiav/" target="_blank"><i className="fab fa-linkedin-in " ></i></a>
                        </div>
                    </div>
                </aside>


                {
                    this.state.open ? 

                    <aside className={styles.asideopen}>
                        <div className={styles.cross} onClick={this.handleClick}>
                            <span className={styles.cross1}></span>
                            <span className={styles.cross2}></span>
                        </div>
                    <div className={styles.logo}>
                        <img src="/logo/logo.png" />
                    </div>
                    <div className={styles.ul}>

                    <ActiveLink activeClassName={styles.active} href="/"><a className={styles.link} >Home</a></ActiveLink>
                    <ActiveLink activeClassName={styles.active} href="/gallery"><a className={styles.link} >Gallery</a></ActiveLink>                           
                    <ActiveLink activeClassName={styles.active} href="/blog"><a className={styles.link} >Blog</a></ActiveLink>
                    <ActiveLink activeClassName={styles.active} href="/about"><a className={styles.link} >About</a></ActiveLink>
                    <ActiveLink activeClassName={styles.active} href="/contact"><a className={styles.link} >Contact</a></ActiveLink>
                         
                    </div>
                    <div className={styles.followUs}>
                        <h4>Follow us here</h4>
                        <div className={styles.followUsNetworks}>
                            <a href="https://www.facebook.com/techronx"  target="blank">  <i className="fab fa-facebook-f "  ></i></a>
                            <a href="https://www.twitter.com/mytechronx" target="blank"> <i className="fab fa-twitter "    ></i></a>
                            <a href="https://www.linkedin.com/company/techronx" target="blank"><i className="fab fa-instagram "   ></i></a>
                            <a href="https://api.whatsapp.com/send?phone=7289991556" target="blank"><i className="fab fa-linkedin-in " ></i></a>
                        </div>
                    </div>
                </aside>

                :

                <div  onClick={this.handleClick} className={styles.hello}>
                    <span className={styles.big}></span>
                    <span className={styles.sml}></span>
                    <span className={styles.med}></span>
                 </div>
                }
                
                </div>
                <style jsx global>{`
                body {
                    margin: 0;
                    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
                    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
                    sans-serif;
                    -webkit-font-smoothing: antialiased;
                    -moz-osx-font-smoothing: grayscale;
                }
                `}</style>
                
            </div>
        );
    }
}

export default Sidebar;