import React, { Component } from 'react';
import cartdata from '../public/data/cartData.json'
import * as Actions from '../components/redux/actions/index'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
class Mainmenu extends React.Component {
    constructor(props){
        super(props);
    }
    render() {
        const {products,changeNum} = this.props;
        var datalist = products.map(function(good,index){
            var productQuentity = good.productQuentity;
            var productNum = good.productNum;
            return <div key={index} className="good-item">
                <div className="good-name">{good.productName}</div>
                <button disabled={productNum <= 0} className="good-reduce" onClick={() => changeNum(good.productId,'reduce')}>reduce</button>
                <div className="good-num">{good.productNum}</div>
                <button disabled={productNum >= productQuentity} className="good-add" onClick={() => changeNum(good.productId,'add')}>add</button>
            </div>;
        });
        return (
            <div id="mainmenu">
                {datalist}
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        products: state.products
    }
}

function mapDispatchToProps(dispatch) {
    var actions = {
        setCurLocale: Actions.setCurLocale,
        changeNum: Actions.changeNum
    }
    return bindActionCreators(actions, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Mainmenu);
