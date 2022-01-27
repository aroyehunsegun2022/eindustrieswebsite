import React from 'react'
import "./services.css"
import styled from 'styled-components'

const ServiceContainer = styled.div `
display: flex;
align-items: center;
margin: 0 1rem;
flex-direction: ${({isReversed}) => isReversed && "row-reverse"}
`;

const Services = (props) => {

    const { title, details, imgurl, isReversed,  } = props

    return (
        <div>
            <div className='e__services-body'>
                <ServiceContainer className='e__services-container' isReversed={isReversed}>
                {/* <div className='e__services-container' > */}
                    <div className='e__services-desc'>
                        <h1 className='e__services-desc_title'>{title}</h1>
                        <p className='e__services-desc_details'>{details}</p>
                    </div>
                    <div className='e__services-img'>
                        <img src={imgurl} alt='services pic' />
                    </div>
                {/* </div> */}
                </ServiceContainer>
            </div>
            <div className='e__services-small'>
                    <div className='e__services-container1 dis' >
                        <div className='e__services-desc'>
                            <h1 className='e__services-desc_title'>{title}</h1>
                            <p className='e__services-desc_details'>{details}</p>
                        </div>
                        <div className='e__services-img'>
                            <img src={imgurl} alt='services pic' />
                        </div>
                    </div>
            </div>
        </div>
    )
}

export default Services

