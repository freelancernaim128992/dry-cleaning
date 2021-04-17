import React from 'react';

const FooterCol = ({title, menuInfo, children}) => {
    return (
        <div className="col-md-3 mt-5">
            <h5 className="">{title ? title : ''}</h5>
            <ul className="list-unstyled mt-3">
                {
                    menuInfo.map(info => <li className="text-white lh-lg">{info.name}</li>)
                }
            </ul>
            {children && children}
        </div>
    );
};

export default FooterCol;