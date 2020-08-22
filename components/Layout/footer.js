import React, { Component } from 'react';
import styles from "../css/footer.module.css";

class Footer extends Component {
    constructor(){
        super();
        this.state = {
            blog:[],
            gallery:[]
        }
    }
    componentDidMount(){
        fetch('https://api.edgiav.com/user/category/blog',{
            method: "GET",
            headers: {
                "Accept": "application/json",
                "Content-Type": "application/json"
            }
        }).then(result => {
            result.json().then(response => {
               
               this.setState({
                   blog:response.category
               })
            })
        }).catch(err => {
            console.log(err)
        })

        fetch('https://api.edgiav.com/user/category/gallery',{
            method: "GET",
            headers: {
                "Accept": "application/json",
                "Content-Type": "application/json"
            }
        }).then(result => {
            result.json().then(response => {
               
               this.setState({
                   gallery:response.category
               })
            })
        }).catch(err => {
            console.log(err)
        })
        
    }
    render() {
        const blog = this.state.blog.map((list, index) => {
            return (
                <li key={index} className={styles.photgraghy}>
                   <a><span>{list}</span></a> 
                </li>
            )
        })

        const gallery = this.state.gallery.map((list, index) => {
            return (
                <li key={index} className={styles.photgraghy}>
                   <a><span>{list}</span></a> 
                </li>
            )
        })
        return (
            <footer className={styles.footer}>
            <div className={styles.flexItem}>
                <div className={styles.category} >
                    <h3>Gallery</h3>
                    {gallery}
                </div>

                <div className={styles.category}>
                    <h3>Blog</h3>
                    {blog}
                </div>

                <div className={styles.category}>
                    <h3>Have a questions?</h3>
                    <li>
                        <a>
                        <span>
                        Regency Enclave, Raseora Sitapur-261001
                        </span>
                        </a>
                    </li>
                    <li>
                        <a href="#">
                        <span>
                        +91 6392361319
                        </span>
                        </a>
                    </li>
                    <li>
                    <a href="mailto:eddworld29@gmail.com">eddworld29@gmail.com</a>
                    </li>
                </div>
            </div>
                <p className={styles.para}>
                    Copyright ©2020 All rights reserved 
                </p>
            </footer>

        );
    }
}

export default Footer;