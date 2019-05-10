import React from 'react';
import { connect } from 'react-redux';
import { isEmpty } from 'lodash';
import { Grid, Typography } from '@material-ui/core';

import PageWrapper from '../../components/PageWrapper';
import Category from './Category';
import { loadData } from '../../reducer/category';

class CategoryContainer extends React.Component {
  componentDidMount() {
    this.props.loadData();
  }

  render() {
    const { isLoading, path, items } = this.props;

    return (
      <PageWrapper>
        <Typography variant="title">Category List</Typography>
        {isLoading && (
          <Typography> Loading... </Typography>
        )}
        {!isLoading && isEmpty(path) && (
          <Typography> No items. </Typography>
        )}
        {!isLoading && !isEmpty(path) && (
          <Grid container>
          {
            path.map((p, id) => {
              let curCatItems = items;

              for (let i = 0; i <= id; i ++) {
                curCatItems = curCatItems[path[i]].children;
              }

              return <Category key={id} no={id} items={curCatItems} />
            })
          }
          </Grid>          
        )}
      </PageWrapper>
    )
  }
}

const mapDispatchToProps = {
  loadData
};

const mapStateToProps = state => ({
  path: state.category.path,
  items: state.category.items,
  isLoading: state.category.isBusy
});

export default connect(mapStateToProps, mapDispatchToProps)(CategoryContainer);
