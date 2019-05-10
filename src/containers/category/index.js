import React from 'react';
import { connect } from 'react-redux';

import PageWrapper from '../../components/PageWrapper';
import { loadData } from '../../reducer/category';

class CategoryContainer extends React.Component {
  componentDidMount() {
    this.props.loadData();
  }

  render() {

    return (
      <PageWrapper>
        <p>Category list.</p>
      </PageWrapper>
    )
  }
}

const mapDispatchToProps = {
  loadData
};

export default connect(null, mapDispatchToProps)(CategoryContainer);
