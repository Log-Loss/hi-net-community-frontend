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

    const postList = [{"postId":"lcRunIU7zH","userId":"licor","title":"add new pos3","topic":null,"keywords":null,"content":"new content3","timeStamp":1513918653},{"postId":"0QN87KxrdD","userId":"licor","title":"add new post4","topic":null,"keywords":null,"content":"new content4","timeStamp":1513918663},{"postId":"In3MPWMTtC","userId":"licor","title":"add new post1","topic":null,"keywords":null,"content":"new content1","timeStamp":1513930066},{"postId":"WsC4pxu56b","userId":"licor","title":"add new post2","topic":null,"keywords":null,"content":"new content2","timeStamp":1513930078}];
    return (
      <div>
        <Row gutter={24}>
          <Col {...topColResponsiveProps}>

            <Card
              bordered={false}
              hoverable
            >
              <Row align="middle">
                <Col align="center">
                  <AddPost/>
                </Col>
              </Row>

            </Card>
          </Col>
          <Col {...topColResponsiveProps}>

            <Card
              bordered={false}
              hoverable
              actions={[<Icon type="like" />,  <Link to="/dashboard/monitor"><Icon type="edit" /></Link>]}
            >
              <Meta
                avatar={<Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />}
                title="Card title">
              </Meta>
              <Link to="/dashboard/monitor">This is the description</Link>
            </Card>
          </Col>
          <Col {...topColResponsiveProps}>
            <Card
              loading
              bordered={false}
              title="Card title"
            >
              Whatever content
              <Meta
                avatar={<Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />}
                title="Card title"
                description="This is the description"
              />
            </Card>
          </Col>
        </Row>
        <List
          rowKey="id"
          grid={{ gutter: 24, xl: 4, lg: 3, md: 2, sm: 1, xs: 1 }}
          dataSource={['', ...postList]}
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
