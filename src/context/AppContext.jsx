import React, { useState } from 'react';

export const AppContext = React.createContext();

export const AppProvider = ({ children }) => {
    const [secId, setSecId] = useState(1);
    const [regionId, setRegionId] = useState(1);
    const [instanceTypeId, setInstanceTypeId] = useState(1);    
    
    // Cart
    const [cartImage, setCartImage] = useState({});
    const [cartInstanceType, setCartInstanceType] = useState({});
    const [cartStorage, setCartStorage] = useState({});    
    const [cartNetwork, setCartNetwork] = useState({});    
    
    
    //  Section
    const handleSecChange = (id) => {
        if (id < 1 || id > 5) return;
        setSecId(id);
    };
    const handleSecChangeCount = (id) => {
        setSecId(secId + id);
    };

    //  Region
    const handleChangeRegionId = (id) => {
        setRegionId(id)
    }

    //  Instance Type Id
    const handleInstanceTypeId = (id) => {
        setInstanceTypeId(id)
    }
    

    //  cartImage
    const handleCartImage = (imageObject) => {
        setCartImage({...cartImage, ...imageObject})
    }
    
    // cartInstanceType
    const handleCartInstanceType = (instanceTypeObj) => {
        setCartInstanceType({...cartInstanceType, ...instanceTypeObj})
    }


    return (
        <AppContext.Provider 
          value ={{
            secId,
            handleSecChange,
            handleSecChangeCount,
            regionId,
            handleChangeRegionId,
            cartImage,
            handleCartImage,
            instanceTypeId,
            handleInstanceTypeId,
            cartInstanceType,
            handleCartInstanceType


        }}>
            {children}
        </AppContext.Provider>
    );

};

