import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'dva';
import {
  Row,
  Col,
  Icon,
  Card,
  Avatar,
  List,
} from 'antd';
import { AddPost } from '../../components/AddPost';
import { PostCard } from "../../components/PostCard/PostCard";
import styles from './Analysis.less';

const { Meta } = Card;


@connect(({ list, loading }) => ({
  list,
  loading: loading.models.list,
}))
export default class Analysis extends Component {
  state = {

  };

  componentDidMount() {
    this.props.dispatch({
      type: 'list/fetch',
      payload: {
        count: 5,
      },
    });
  }

  componentWillUnmount() {
    const { dispatch } = this.props;
    dispatch({
      type: 'list/fetch',
    });
  }

  render() {
    const topColResponsiveProps = {
      xs: 24,
      sm: 12,
      md: 12,
      lg: 12,
      xl: 6,
      style: { marginBottom: 24 },
    };

    const { list: { list }, loading } = this.props;
    console.log(list);

    return (
      <div>
        <List
          rowKey="id"
          grid={{ gutter: 24, xl: 4, lg: 3, md: 2, sm: 1, xs: 1 }}
          dataSource={['', ...list]}
          renderItem={item => (item ? (
              <List.Item key={item.id}>
                <PostCard post={item} loading={loading} />
              </List.Item>
            ) : (
              <List.Item>
                <Card
                    bordered={false}
                    hoverable
                >
                  <Row align="middle">
                    <Col align="center">
                      <AddPost />
                    </Col>
                  </Row>
                </Card>
              </List.Item>
            )
          )}
        />
      </div>
    );
  }
}
