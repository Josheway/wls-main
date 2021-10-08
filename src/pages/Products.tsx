import React, { ReactElement, FC } from "react";



// define interface to represent component props

interface Props {

    title: String

}


const Products: FC<Props> = ({ title }): ReactElement => {

    return (

        <div>

            {title}

        </div>

    );

};


export default Products;