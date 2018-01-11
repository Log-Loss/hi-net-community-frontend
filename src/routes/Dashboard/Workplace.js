import React, { PureComponent } from 'react';
import moment from 'moment';
import { connect } from 'dva';
import { Link } from 'dva/router';
import { Row, Col, Card, List, Avatar, Button } from 'antd';

import PageHeaderLayout from '../../layouts/PageHeaderLayout';
import BlankLayout from '../../layouts/BlankLayout';
import EditableLinkGroup from '../../components/EditableLinkGroup';
import { Radar } from '../../components/Charts';

import styles from './Workplace.less';

export default class Workplace extends PureComponent {
  componentDidMount() {
  }

  componentWillUnmount() {
  }
  render() {

    return (
      <BlankLayout>
        <Row>
          <Col>
            <div className={styles.topBanner}>
              <Row className={styles.bannerWrapper}>
                <Col span={8} offset={8}>
                  <img className={styles.logo} src="https://raw.githubusercontent.com/Log-Loss/hi-net-community-server/master/logo.png"/>
                </Col>
              </Row>
              <Row>
                <Col span={8} offset={12}>
                  <p style={{ opacity: 1 }}>Your Deep Learning Playground</p>
                </Col>
              </Row>
              <Button ghost>Get Started</Button>
            </div>

          </Col>
        </Row>
        <Row>

        </Row>
        <Row className={styles.detail}>
          <Col span={24} className={styles.detailTitle}>Start Your Deep Learning Journey Here</Col>
            <Col span={8}>
              <div className="icon">
                <img src="https://image.flaticon.com/icons/svg/149/149356.svg" width="100%"/>
              </div>
              <h3 className={styles.featureTitle}>Notebook</h3>
              <p className={styles.featureContent}>Deep Learning Environment on Cloud</p>
            </Col>
            <Col span={8}>
              <div className="icon">
                <img src="https://image.flaticon.com/icons/svg/681/681660.svg&#10;" width="100%"/>
              </div>
              <h3 className={styles.featureTitle}>Model</h3>
              <p className={styles.featureContent}>Build Neural Network in One Minute</p>
            </Col>
            <Col span={8}>
              <div className="icon">
                <img src="https://image.flaticon.com/icons/svg/681/681631.svg&#10;" width="100%"/>
              </div>
              <h3 className={styles.featureTitle}>Community</h3>
              <p className={styles.featureContent}>Inspiration Starts Here</p>
            </Col>
        </Row>
      </BlankLayout>
    );
  }
}
