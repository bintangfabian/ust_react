import React, { Component } from 'react';
import img from './img/star.png';

class Popular extends Component {
  constructor(props) {
    super(props);

    this.state = {
      base_url: 'https://belajar-react.smkmadinatulquran.sch.id/api/',
      popular: '',
      item: '',
    };
  }

  getAllPopular() {
    return fetch(`${this.state.base_url}populer/all`)
      .then(response => response.json())
      .then(responseJson => {
        this.setState({ popular: responseJson.data });
      })
      .catch(error => 'error')
  }

  onClickHandler = e => {
    this.props.onShowModal(e);
  }


  componentDidMount() {
    this.getAllPopular();
  }

  componentDidUpdate(props) {
    if (props.popular !== this.props.popular) {
      this.setState({ popular: this.props.popular });
    }
  }

  render() {
    return (
        <div className="wrapper-popular p-5">
            <h2 className="popular-title">Popular</h2>
            <div className="row">
                {
                this.state.popular ? this.state.popular.map((item, i) =>
                <div className="col-sm-4 mt-3">
                    <a href="" className="a-popular" data-toggle="modal" data-target="#pesanModal" onClick={_ => this.onClickHandler(item)}>
                        <div className="isimakan">
                            <img src={item.image} class="edgeimage d-block" style={{ width: '100%' }} />
                            <div className="bottom-left">{item.waktu}</div>
                        </div>
                    </a>
                    <h6 className="ukuranjudul mt-3">{item.name}</h6>
                    <span className="ukurantext mt-1"><img src={img} height="20" className="ikonbintang"/>{item.rating}</span>
                    <span className="ukurantext ml-4">Rp. {item.harga}</span>
                </div>
                ) : ''
                }
            </div>
        </div>
    )
  }
}

export default Popular;