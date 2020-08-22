import React, { Component } from 'react';
import styles from "../css/blog.module.css";
import moment from "moment";

class Blog extends Component {
    render() {
        return (
            <a className={styles.links} href={'/blogs?id=' + this.props.id}>
            <div className={styles.container}>

                <div className={styles.image}>
                    <img src={this.props.imagelink} alt={this.props.title} />
                </div>
                <div className={styles.title}>{this.props.title}</div>
                <div className={styles.info}>
                    <span className={styles.date}>{moment(this.props.date).format('DD MMM, YYYY')}</span>
                    <span className={styles.category}>{this.props.category}</span>
                </div>
                
            </div>
            </a>
        );
    }
}

export default Blog;