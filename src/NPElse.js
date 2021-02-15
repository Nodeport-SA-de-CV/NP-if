/* Copyright (C) Nodeport SA de CV - All Rights Reserved
* Unauthorized copying of this file, via any medium is strictly prohibited
* Proprietary and confidential
* Written by Darien Miranda <dmiranda@nodeport.co> and America Mendoza <amendoza@nodeport.co>
* Inspired on the work by Israel Arellano  <Isra_darrell@startuplab.mx>
* February 2021
*/
import React from 'react';

class NPElse extends React.Component {
    render() {
        if(!this.props.children){
            return null;
        }
        return this.props.children;
    }
};

export default NPElse;
