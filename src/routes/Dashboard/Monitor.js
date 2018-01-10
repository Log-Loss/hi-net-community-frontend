import React, { PureComponent } from 'react';
import { connect } from 'dva';
import { Row, Col, Card, Avatar, List, Icon, Input, Button } from 'antd';
import numeral from 'numeral';
import Authorized from '../../utils/Authorized';
import { Pie, WaterWave, Gauge, TagCloud } from '../../components/Charts';
import NumberInfo from '../../components/NumberInfo';
import CountDown from '../../components/CountDown';
import ActiveChart from '../../components/ActiveChart';
import styles from './Monitor.less';

const { Secured } = Authorized;
const { Meta } = Card;
const { TextArea } = Input;


@Secured('admin')
@connect(({ list, loading }) => ({
  list,
  loading: loading.models.list,
}))
export default class Monitor extends PureComponent {
  componentDidMount() {
    this.props.dispatch({
      type: 'list/fetch',
      payload: {
        count: 5,
      },
    });
  }

  render() {
    const { list: { list }, loading } = this.props;

    return (
      <div>
        <Row gutter={24}>
          <Col xl={18} lg={24} md={24} sm={24} xs={24} style={{ marginBottom: 24 }}>
            <Card title="Post Title" bordered={false}>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum in ex ex. Donec a lacinia risus. Nullam quis lorem lobortis, malesuada enim id, accumsan turpis. Integer tincidunt urna ligula, at feugiat libero volutpat a. Integer auctor, eros non ullamcorper porttitor, ex dolor accumsan urna, ut molestie purus felis non ante. Phasellus ac lorem faucibus, condimentum erat ac, fermentum mi. Suspendisse potenti. Fusce convallis scelerisque dolor, id feugiat sem. Maecenas in mi non turpis posuere bibendum non eget ipsum. Praesent blandit, nunc sed efficitur mattis, tellus magna elementum velit, a ullamcorper neque risus quis nibh. Pellentesque ut mollis velit. Maecenas rutrum justo ligula, ac luctus tortor tristique at.

                Fusce nulla diam, pellentesque sit amet fermentum ut, rhoncus varius nisl. Nullam pharetra libero sed egestas accumsan. Etiam rhoncus purus sit amet mollis consectetur. Integer sed libero id sapien rhoncus varius. Nunc felis urna, pharetra ut justo ut, pharetra volutpat ex. Quisque libero lorem, sodales at tincidunt eu, blandit ut est. Duis aliquet nec velit sit amet sodales. Curabitur vel nunc diam. In commodo nulla a massa iaculis pellentesque.

                Integer eget magna pretium, pharetra nisl ac, elementum magna. Phasellus et eros eget nibh fermentum malesuada. Mauris egestas, erat in efficitur gravida, orci tortor laoreet turpis, sed maximus felis erat in eros. Cras id enim id urna suscipit suscipit. Maecenas luctus ac turpis eu tempus. Fusce gravida est id tortor laoreet sollicitudin. Integer venenatis, elit tempus rutrum ultrices, turpis libero egestas leo, ac sagittis nibh tortor in elit. Duis eget ante auctor neque porttitor pulvinar in ut risus. Sed risus nunc, molestie vel elit a, pulvinar porta tortor. In nulla velit, luctus at accumsan ut, dictum non velit. Mauris ornare at arcu ut bibendum. Morbi laoreet ultrices vehicula.

                Nunc at malesuada sem, ut rhoncus massa. Curabitur ut luctus tortor. Nunc sit amet libero ac ligula tincidunt gravida. Donec tristique, erat non pellentesque aliquam, magna est ornare enim, in elementum felis lacus in diam. Nam ut risus ligula. Quisque quis orci eu mauris vulputate consectetur at ullamcorper turpis. Curabitur augue arcu, aliquet in velit at, auctor mollis velit. Suspendisse nec ligula nisl. Pellentesque nec justo eu turpis pharetra cursus. Aenean sit amet vehicula ante. Mauris porta neque sit amet velit tempor, id pulvinar dui maximus. Nam a lorem est. Nunc malesuada, metus non tempus venenatis, eros ligula volutpat eros, sed ultricies augue enim non metus. Maecenas blandit aliquam nibh sit amet bibendum.

                Vestibulum dictum sem id tortor volutpat, nec maximus est luctus. Mauris velit mauris, eleifend in dapibus ac, feugiat ut massa. Praesent vel accumsan neque. Quisque tempor, mi in convallis rhoncus, tortor arcu interdum libero, vitae aliquet dolor ligula non massa. Sed eu urna eget nisi feugiat tincidunt eget ac sem. Maecenas blandit vulputate blandit. Nulla vel fringilla ligula, non consequat mauris. Proin varius ut eros a porta. Vestibulum aliquam bibendum odio. Nunc quis maximus nibh, at dignissim nulla. Mauris nibh dui, vehicula eu dolor venenatis, dignissim iaculis sem. Phasellus vitae mauris maximus, feugiat elit sed, porta erat. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Donec massa tellus, rutrum vitae nisl sit amet, volutpat sagittis felis. Curabitur neque dolor, lobortis faucibus placerat ut, feugiat sit amet quam.
              </p>
            </Card>
          </Col>
        </Row>
        <Row gutter={24}>
          <Col xl={18} lg={24} md={24} sm={24} xs={24} style={{ marginBottom: 24 }}>
            <Card title="Comments" bordered={false}/>
          </Col>
        </Row>
        <Row gutter={24}>
          <Col xl={18} lg={24} md={24} sm={24} xs={24} style={{ marginBottom: 24 }}>
            <Card bordered={false}>
              <Meta
                avatar={<Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />}
                title="Comment title"
                description="This is the description"
              />
            </Card>
          </Col>
          <Col xl={18} lg={24} md={24} sm={24} xs={24} style={{ marginBottom: 24 }}>
            <Card bordered={false}>
              <Meta
                avatar={<Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />}
                title="Comment title"
                description="This is the description"
              />
            </Card>
          </Col>
        </Row>
        <List
          rowKey="id"
          dataSource={['', ...list]}
          split={false}
          grid={{ gutter: 24 }}
          renderItem={item => (
              <List.Item key={item.id} >
                <Col xl={12} lg={16} md={16} sm={16} xs={16} style={{ marginBottom: 10 }}>
                <Card
                  loading={loading}
                  bordered={false}
                >
                  <Meta
                    avatar={<Avatar src={item.avatar} />}
                    title={item.title}
                    description={item.description}
                  />
                </Card>
                </Col>
              </List.Item>
            )}
        />
        <Row gutter={24}>
          <Col xl={10} lg={14} md={14} sm={14} xs={14} style={{ marginBottom: 24 }}>
            <Card title="Add Comments" bordered={false}>
              <TextArea placeholder="Your Comment Here ..." autosize={{ minRows: 2, maxRows: 4 }} />
              <Button style={{ marginTop: 20 }}>Comment</Button>
            </Card>
          </Col>
        </Row>
      </div>
    );
  }
}
