import React from 'react';
import ".././pages.css"
import bg2 from "../../images/extra/banner-1.png"
import PhoneIcon from '@mui/icons-material/Phone';

const Extra = () => {
    return (
        <div id="extra" className="extraSection">
            <div className="row justify-content-around align-items-center">
                <div className="col-lg-5 col-sm-10 mx-auto ">
                    <div className="specialContent">
                        <h1>
                            Rideo World Most Latest Motorcycle Store
                        </h1>
                        <p>RIDEO the most latgest bike store in the wold can serve you latest qulity of motorcycle also you can sell here your motorcycle it quo minus iduod maxie placeat facere possimus, omnis voluptas assumenda est, omnis dolor llendus. Temporibus autem quibusdam</p>
                        <h3>Have Any Question ? </h3>
                        <p><PhoneIcon/> 019-888-999</p>
                    </div>

                </div>
                <div className="col-lg-5 col-sm-10 mx-auto  specialImage" >
                    <div className="image">
                        <img src={bg2} alt="" srcset="" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Extra;