import classnames from 'classnames';
import React, {Component} from 'react';
import {Col, Nav, NavItem, NavLink, Row, TabContent, TabPane} from 'reactstrap';
import Carou from './Carousel';
import TimelineModule from './TimelineModule';

class ContentSuivis extends Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      activeTab: '1'
    };
  }

  toggle(tab) {
    if (this.state.activeTab !== tab) {
      this.setState({
        activeTab: tab
      });
    }
  }

  render() {
    return (
      <div>
        <Nav tabs>
          <NavItem>
            <NavLink
              className={classnames({active: this.state.activeTab === '1'})}
              onClick={() => this.toggle('1')}
            >Description
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink
              className={classnames({active: this.state.activeTab === '2'})}
              onClick={() => this.toggle('2')}
            >Suivis
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink
              className={classnames({active: this.state.activeTab === '3'})}
              onClick={() => this.toggle('3')}
            >Timeline
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink
              className={classnames({active: this.state.activeTab === '4'})}
              onClick={() => this.toggle('4')}
            >Photo
            </NavLink>
          </NavItem>
        </Nav>
        <TabContent activeTab={this.state.activeTab}>
          <TabPane tabId="1">
            <Row>
              <Col sm="12">
                <h1 className="titledescription">Description</h1>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur a omnis voluptates repellat eius nostrum sapiente
                ipsum, fuga harum culpa, voluptatum, nam laudantium aperiam porro labore. Totam quisquam placeat incidunt. Error
                eligendi ipsum nulla aspernatur quisquam perferendis. Perspiciatis repudiandae, eveniet fugit adipisci modi ea
                cumque iure voluptatem explicabo quas unde vitae natus quae odit quis mollitia porro saepe eaque totam? Voluptatum
                et magni nesciunt excepturi sit tenetur quo voluptates perspiciatis quia eveniet consectetur dolores dolore
                cupiditate nostrum placeat voluptatem minima aut, consequuntur exercitationem esse quidem perferendis quas?
                Distinctio, odit unde. Eum consequatur totam vero dicta, nihil sed asperiores at quia nulla impedit excepturi
                sequi maxime quas provident accusamus tenetur laboriosam perspiciatis molestiae veritatis cumque vitae a
                minus.Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur a omnis voluptates repellat eius nostrum
                sapiente ipsum, fuga harum culpa, voluptatum, nam laudantium aperiam porro labore. Totam quisquam placeat
                incidunt. Error eligendi ipsum nulla aspernatur quisquam perferendis. Perspiciatis repudiandae, eveniet fugit
                adipisci modi ea cumque iure voluptatem explicabo quas unde vitae natus quae odit quis mollitia porro saepe eaque
                totam? Voluptatum et magni nesciunt excepturi sit tenetur quo voluptates perspiciatis quia eveniet consectetur
                dolores dolore cupiditate nostrum placeat voluptatem minima aut, consequuntur exercitationem esse quidem
                perferendis quas? Distinctio, odit unde. Eum consequatur totam vero dicta, nihil sed asperiores at quia nulla
                impedit excepturi sequi maxime quas provident accusamus tenetur laboriosam perspiciatis molestiae veritatis cumque
                vitae a minus.
              </Col>
            </Row>
          </TabPane>
          <TabPane tabId="2">
            <Row>
              <Col sm="12">
                <h1 className="titledescription">Suivis</h1>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur a omnis voluptates repellat eius nostrum sapiente
                ipsum, fuga harum culpa, voluptatum, nam laudantium aperiam porro labore. Totam quisquam placeat incidunt. Error
                eligendi ipsum nulla aspernatur quisquam perferendis. Perspiciatis repudiandae, eveniet fugit adipisci modi ea
                cumque iure voluptatem explicabo quas unde vitae natus quae odit quis mollitia porro saepe eaque totam? Voluptatum
                et magni nesciunt excepturi sit tenetur quo voluptates perspiciatis quia eveniet consectetur dolores dolore
                cupiditate nostrum placeat voluptatem minima aut, consequuntur exercitationem esse quidem perferendis quas?
                Distinctio, odit unde. Eum consequatur totam vero dicta, nihil sed asperiores at quia nulla impedit excepturi
                sequi maxime quas provident accusamus tenetur laboriosam perspiciatis molestiae veritatis cumque vitae a
                minus.Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur a omnis voluptates repellat eius nostrum
                sapiente ipsum, fuga harum culpa, voluptatum, nam laudantium aperiam porro labore. Totam quisquam placeat
                incidunt. Error eligendi ipsum nulla aspernatur quisquam perferendis. Perspiciatis repudiandae, eveniet fugit
                adipisci modi ea cumque iure voluptatem explicabo quas unde vitae natus quae odit quis mollitia porro saepe eaque
                totam? Voluptatum et magni nesciunt excepturi sit tenetur quo voluptates perspiciatis quia eveniet consectetur
                dolores dolore cupiditate nostrum placeat voluptatem minima aut, consequuntur exercitationem esse quidem
                perferendis quas? Distinctio, odit unde. Eum consequatur totam vero dicta, nihil sed asperiores at quia nulla
                impedit excepturi sequi maxime quas provident accusamus tenetur laboriosam perspiciatis molestiae veritatis cumque
                vitae a minus.
              </Col>
            </Row>
          </TabPane>
          <TabPane tabId="3">`
            <TimelineModule />
          </TabPane>
          <TabPane tabId="4">
            <Row>
              <Col sm="12">
                <Carou/>
              </Col>
            </Row>
          </TabPane>
        </TabContent>
      </div>
    );
  }
}

export default ContentSuivis;


