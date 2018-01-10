import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link}  from 'dva/router';
import { Avatar, Card, Icon, Modal } from 'antd';

const { Meta } = Card;

export class PostCard extends Component {
  render() {
    const { post, loading } = this.props;
    console.log(post);
    return (
      <Card
        loading={loading}
        bordered={false}
        hoverable
        actions={[<Icon type="like" />,  <Link to="/dashboard/monitor"><Icon type="edit" /></Link>]} >
        <Meta
          avatar={<Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />}
          title={post["title"]}
          description={post.content}
        />
      </Card>
    )
  }
}

