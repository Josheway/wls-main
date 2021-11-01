import React, {
  ReactElement, FC, useEffect, useState,
} from 'react';

import {
  Box, Card, CardContent, CardHeader, Dialog, Tab, Tabs, Typography,
} from '@mui/material';

// define interface to represent component props

interface Props {

    title: String

}

const Products: FC<Props> = ({ title }): ReactElement => {
  const initialState = {
    productList: [],
    typeList: [],
    selectedTab: '',
    dialogOpen: false,
    selectedItem: {
      title: '',
      type: '',
      shortDesc: '',
      longDesc: '',
      image: '',
      ingredients: [],
    },
  };
  const [state, setState] = useState(initialState);

  const handleSelect = (event: any) => {
    const f = state.productList[event.currentTarget.id];
    setState({ ...state, selectedItem: f, dialogOpen: true });
  };

  const handleTabChange = (event: any, value: string) => {
    setState({ ...state, selectedTab: value });
  };

  useEffect(() => {
    fetch('https://knv7atr5oe.execute-api.us-east-1.amazonaws.com/default/fetchData')
      .then((result) => result.json())
      .then((result) => {
        const typeList = new Set(result.map((product: any) => (product.type)));
        // @ts-ignore
        setState({
          ...state, productList: result, typeList: Array.from(typeList), selectedTab: 0,
        });
      });
  }, []);

  const renderTab = () => (
    <div>
      <Box sx={{
        display: 'flex', flexFlow: 'row wrap', justifyContent: 'center', maxWidth: 'lg',
      }}
      >

        {state.productList.map((product: any, index: any) => {
          if (product.type === state.typeList[parseInt(state.selectedTab)]) {
            return (
              <div
                key={`product${product.title}`}
                id={index}
                                    // className={classes.tabContent}
                onClick={handleSelect}
              >
                <Card
                  sx={{
                    m: 5,
                    width: 310,
                  }}
                >
                  <CardHeader
                    title={product.title}
                    sx={{ textAlign: 'center' }}
                  />

                  <CardContent>
                    <div
                      style={{
                        // margin: 5
                        textAlign: 'center',
                      }}
                    >
                      <img
                        src={product.image}
                        alt=""
                      />
                    </div>
                    <ul key={`list${product.title}`}>
                      {product.ingredients.map((ingredient: any, i: number) => (
                        <li key={i}>{ingredient}</li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </div>
            );
          }
          return ('');
        })}
      </Box>
    </div>
  );

  return (
    <div>
      <div>{title}</div>

      <Tabs
        value={state.selectedTab}
        onChange={handleTabChange}
        variant="scrollable"
        scrollButtons="auto"
      >
        {state.typeList.map((typeName: string, index: number) => (
          <Tab label={typeName} key={`TAB_${index}`} value={index} />
        ))}
      </Tabs>
      {renderTab()}

      <Dialog
        open={state.dialogOpen}
        onClose={() => setState({ ...state, dialogOpen: false })}
      >
        <div>
          <div style={{ marginTop: '20px' }}>
            <img src={state.selectedItem.image} alt="" />
          </div>
          <div>
            <Typography
              variant="body1"
              style={{
                margin: 10,
              }}
            >
              {state.selectedItem.shortDesc}
            </Typography>
            <ul>
              {state.selectedItem.ingredients.map((ingredient, i) => (
                <li key={i}>{ingredient}</li>
              ))}
            </ul>
            <Typography
              variant="body1"
              style={{
                margin: 10,
              }}
            >
              {state.selectedItem.longDesc}
            </Typography>

          </div>
        </div>
      </Dialog>
    </div>
  );
};

export default Products;
