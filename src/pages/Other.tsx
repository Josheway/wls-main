import React, { ReactElement, FC } from 'react';

// define interface to represent component props

interface Props {

    title: string

}

const Other: FC<Props> = ({ title }): ReactElement => (

  <div>

    {title}

  </div>

);

export default Other;
