/* Copyright (C) Nodeport SA de CV - All Rights Reserved
* Unauthorized copying of this file, via any medium is strictly prohibited
* Proprietary and confidential
* Written by Darien Miranda <dmiranda@nodeport.co> and America Mendoza <amendoza@nodeport.co>
* Inspired on the work by Israel Arellano  <Isra_darrell@startuplab.mx>
* February 2021
*/
import React from 'react';
import PropTypes from 'prop-types';
import NPElse from "./NPElse";

class NPIf extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        if(!this.props.children){
            return null;
        }
        const children = Array.isArray(this.props.children) ? this.props.children : [this.props.children];
        if(this.props.condition){
            return children.filter((el) => el.type !== NPElse);
        }else{
            return children.filter((el) => el.type === NPElse);
        }
    }
};

NPIf.propTypes = {
    condition: PropTypes.bool,
}
NPIf.defaultProps = {
    condition: false
};

export default NPIf;
