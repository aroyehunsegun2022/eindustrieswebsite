import React from 'react'
import "./brand.css"
import { dangote, access, dreams ,mtn} from "./imports"

const Brand = () => {
    return (
        <div className='e__brand section__padding'>
            <div>
                <img src={dangote} alt="dangote" />
            </div>
            <div>
                <img src={access} alt="access" />
            </div>
            <div>
                <img src={dreams} alt="dreams" />
            </div>
            <div>
                <img src={mtn} alt="mtn" />
            </div>
            {/* <div>
                <img src={stripe} alt="stripe" />
            </div> */}
        </div>
    )
}

export default Brand

