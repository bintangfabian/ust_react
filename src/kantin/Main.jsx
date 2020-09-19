import React, { Component, Fragment } from 'react';
import prof from './img/pp.jpg'
import Header from './Header';
import Order from './Order';
import Category from './Category';
import Popular from './Popular';
import Modal from './Modal';

class Main extends Component{
    constructor(props) {
        super(props);
    
        this.state = {
          category: '0',
          popular: [],
          base_url: 'https://belajar-react.smkmadinatulquran.sch.id/api/',
          item: null,
          order: {},
        }
      }
    
      popularOnChange = (e) => {
        return fetch(`${this.state.base_url}populer?category_id=${e}`,
          {
            method: 'POST',
          })
          .then(response => response.json())
          .then(responseJson => {
            this.setState({
              popular: responseJson.data
            })
          })
          .catch(error => 'error')
      }
    
      handlerModal = (item) => {
        this.setState({
          item: item,
        })
      }
    
      onOrderHandler = data => {
        this.setState({
          order: data
        });
        console.log();
      }
    
    render(){
        return(
            <div className="container-fluid">
                <div className="row bg-nav">
                    <div className="col-8 d-flex">
                        <img src="https://freeiconshop.com/wp-content/uploads/edd/menu-rounded-solid.png" height="20px" className="mt-3 mr-3"/> 
                        <h3 className="mt-2 mr-3 ml-3">Minicafe</h3>
                        <div className="input-group mb-2 mr-sm-2 mt-2">
                            <div className="input-group-prepend">
                            <div className="input-group-text bg-search">
                                <img src="https://cdn.iconscout.com/icon/free/png-256/search-1767866-1502119.png" height="20"/>
                            </div>
                            </div>
                            <input type="text" className="form-control bg-search" id="inlineFormInputGroupUsername2" placeholder="Makanan Apa Yang Antum Cari?"/>
                        </div>
                    </div>
                    <div className="col-4 d-flex justify-content-end">
                        <img src="https://img.icons8.com/pastel-glyph/2x/like--v2.png" height="30" className="icon-lope"/>
                        <h6 className="badge badge-warning chat-notif">3</h6>
                        <img src={prof} height="40" className="user-p"/>
                    </div>
                </div>
                <div className="row p-3 mt-2">
                    <div className="col-12 col-sm-12 col-md-12 col-lg-9">
                        <div>
                            <Header/>
                        </div>
                        <div className="">
                            <Category popular={this.popularOnChange} />
                        </div>
                        <div className="">
                            <Popular popular={this.state.popular} onShowModal={this.handlerModal} />
                        </div>
                    </div>
                    <div className="col-12 col-sm-12 col-md-12 col-lg-3">
                        <Order item={this.state.order}/>
                    </div>
                </div>
                <Modal item={this.state.item} onOrderHandler={this.onOrderHandler} />
            </div>
        )
    }
}

export default Main;