import React, { Component } from 'react';
import styles from "./css/contact.module.css"

class Contact extends Component {

    handleClick = () => {
        alert('Clicked')
    }
    render() {
        return (
                <div>
                    <div className={styles.mains}>
                    
                        <div className={styles.info}>
                            <div className={styles.information}>
                                <span className={styles.bold}>Address</span><br />
                                <span className={styles.light}>Regency Enclave, Raseora Sitapur-261001</span>
                            </div>

                            <div className={styles.information}>
                                <span className={styles.bold}>E-mail</span><br />
                                <span className={styles.light}>eddworld29@gmail.com</span>
                            </div>

                            <div className={styles.information}>
                                <span className={styles.bold}>Phone Number</span><br />
                                <span className={styles.light}>+91 6392361319</span>
                            </div>

                            <div className={styles.information}>
                                <span className={styles.bold}>Website</span><br />
                                <span className={styles.light}>edgiav.com</span>
                            </div>
                        </div>
                    </div>
                    <div className={styles.contact}>
                        <div className={styles.map}>
                            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d227822.55035627162!2d80.8024271802209!3d26.84862299412667!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x399bfd991f32b16b%3A0x93ccba8909978be7!2sLucknow%2C%20Uttar%20Pradesh!5e0!3m2!1sen!2sin!4v1594788395064!5m2!1sen!2sin" frameborder="0"  allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>
                        </div>
                        <div className={styles.form}>
                            <form>
                                <div className={styles.control}>
                                
                                    <input type="text" placeholder="Enter Name" />
                                </div>

                                <div className={styles.control}>
                                
                                    <input type="email" placeholder="Enter Email"/>
                                </div>

                                <div className={styles.control}>
                                
                                    <input type="number" placeholder="Enter Mobile Number"/>
                                </div>

                                <div className={styles.control}>
                                
                                    <textarea type="text" placeholder="Your Message"/>
                                </div>

                                <div className={styles.control}>
                                    <button onClick={this.handleClick}>Send Message</button>
                                </div>
                            </form>
                        </div>
                    </div> 
                </div>
           
        );
    }
}

export default Contact;