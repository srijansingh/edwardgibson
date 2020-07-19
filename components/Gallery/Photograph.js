import React, { Component } from 'react';

class Photograph extends Component {
    render() {
        return (
            <div>
               <div className="photo">
                   <img className="img" src={this.props.imagelink}/>
                </div> 
                <style jsx>{`
                   .photo{
                    background-color: rgb(73, 73, 73);
                    height:325px;
                } 
                .img{
                    width:100%;
                    height:100%;
                }
                `}</style>
            </div>
        );
    }
}

export default Photograph;