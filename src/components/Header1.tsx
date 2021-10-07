import React, { ReactElement, FC } from "react";



// define interface to represent component props

interface Props {

    title: String

}


const Header1: FC<Props> = ({ title }): ReactElement => {

    return (

        <div>

            {title}

        </div>

    );

};


export default Header1;