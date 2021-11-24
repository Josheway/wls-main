import React, { ReactElement, FC, useState, useEffect } from "react";



// define interface to represent component props

interface Props {

    title: String

}


const Other: FC<Props> = ({ title }): ReactElement => {

    const [data, setData] = useState([]);

    const apiGet = () => {
        fetch('https://knv7atr5oe.execute-api.us-east-1.amazonaws.com/default/fetchData')
        .then((response) => response.json())
        .then((json) => {
            console.log (json);
            setData(json);
        });
    };

    useEffect(() => {
        apiGet();
        
    }, []);

    return (

        <div>

            {title}

            {/* <button onClick={apiGet} >Fetch API</button> */}
            <br />
            {/* <pre>{JSON.stringify(data, null, 2)}</pre> */}

            <div>
                <ul>
                    {data.map( (item: any) => (
                        <li key={item.index} >{item.shortDesc}</li> ))};
                </ul>
            </div>

        </div>

    );

};


export default Other;