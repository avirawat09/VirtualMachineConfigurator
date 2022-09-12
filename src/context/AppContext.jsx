import React, { useState } from 'react';

export const AppContext = React.createContext();

export const AppProvider = ({ children }) => {
    const [secId, setSecId] = useState(1);
    const [regionId, setRegionId] = useState(1);
    const [instanceTypeId, setInstanceTypeId] = useState(1);    
    const [securityRadioBtnId, setSecurityRadioBtnId] = useState(1);    
    const [ruleList, setRuleList] = useState([]);    
    const [ruleItem, setRuleItem] = useState({});    
    
    // Cart
    const [cartImage, setCartImage] = useState({});
    const [cartInstanceType, setCartInstanceType] = useState({});
    const [cartStorage, setCartStorage] = useState({});    
    const [cartNetwork, setCartNetwork] = useState({});    
    const [cartTotal, setCartTotal] = useState(0);    
    
    
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
    
   //  Security Radio btn Id
    const handleSecurityRadioBtnId = (id) => {
        setSecurityRadioBtnId(id)
}


    //  cartImage
    const handleCartImage = (imageObject) => {
        setCartImage({...cartImage, ...imageObject})
    }
    
    // cartInstanceType
    const handleCartInstanceType = (instanceTypeObj) => {
        setCartInstanceType({...cartInstanceType, ...instanceTypeObj})
    }

    // cartInstanceType
    const handleCartStorage = (storageObj) => {
        setCartStorage({...cartStorage, ...storageObj})
    }

    // rule List
    const handleRuleList = (ruleObj) => {
        setRuleList([...ruleList, ruleObj])
    }

    const handleRuleItem = (ruleObj) => {
        setRuleItem({...ruleItem, ...ruleObj})
    }
    const handleCartTotal = (amount) => {
        setCartTotal( amount);
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
            handleCartInstanceType,
            cartStorage,
            handleCartStorage,
            securityRadioBtnId,
            handleSecurityRadioBtnId,
            ruleList,
            handleRuleList,
            ruleItem,
            handleRuleItem,
            cartTotal,
            handleCartTotal

        }}>
            {children}
        </AppContext.Provider>
    );

};

