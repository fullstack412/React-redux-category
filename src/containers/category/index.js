import React from 'react';
import { connect } from 'react-redux';
import { isEmpty } from 'lodash';

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
        <p>Category list.</p>
        {isLoading && (
          <p> Loading... </p>
        )}
        {!isLoading && isEmpty(path) && (
          <p> No items. </p>
        )}
        {!isLoading && !isEmpty(path) &&
          path.map((p, id) => {
            let curCatItems = items;
            
            for (let i = 0; i <= id; i ++) {
              curCatItems = curCatItems[path[i]].children;
            }

            return <Category key={id} no={id} items={curCatItems} />
          })
        }
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
