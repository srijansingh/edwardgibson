import React, { Component } from 'react';
import styles from "./css/contact.module.css"

class Contact extends Component {
    state = {
        name : '',
        email :'',
        phonenum :'',
        message :'',
        isLoading:false
    }
    handleClick = () => {
        fetch('https://apis.edgiav.com/user/customer', {
            method: "POST",
            headers: {
                "Accept": "application/json",
                "Content-Type": "application/json"
            },
            body: JSON.stringify(this.state)
        }).then(result => {
            result.json().then(response => {
                
                this.setState({
                    isLoading: false
                })
                
            })
        }).catch(err => {
            // alert("Something went wrong")
            this.setState({
                isLoading: false,
                error: err
            });
        });  
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
                                
                                    <input type="text" onChange={()=> this.setState({name:event.target.value})} placeholder="Enter Name"/>
                                </div>

                                <div className={styles.control}>
                                
                                    <input type="email" onChange={()=> this.setState({email:event.target.value})} placeholder="Enter Email"/>
                                </div>

                                <div className={styles.control}>
                                
                                    <input type="number" onChange={()=> this.setState({phonenum:event.target.value})} placeholder="Enter Mobile Number"/>
                                </div>

                                <div className={styles.control}>
                                
                                    <textarea type="text" onChange={()=> this.setState({message:event.target.value})} placeholder="Your Message"/>
                                </div>

                                <div className={styles.control}>
                                    <button onClick={this.handleClick}>
                                        {
                                            this.state.isLoading ? 'Sending...' : 'Send Message'
                                        }
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div> 
                </div>
           
        );
    }
}

export default Contact;