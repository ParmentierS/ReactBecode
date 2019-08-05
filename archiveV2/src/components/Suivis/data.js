import React from 'react';

export const timelineData = [
  {
    time: '23/12/13',
    title: 'Lorem ipsum',
    subtitle: 'Lorem ipsum doloret',
    icon: {
      element: '',
      style: {background: 'rgb(33, 150, 243)', color: '#fff'}
    },
    content: (
      <React.Fragment>
        <h3 className="vertical-timeline-element-title">Creative Director</h3>
        <h4 className="vertical-timeline-element-subtitle">Miami, FL</h4>
        <p>
          Creative Direction, User Experience, Visual Design, Project Management, Team Leading
        </p>
      </React.Fragment>
    ),
    attachements: [
      {
        type: 'image', // video, pdf, ...
        path: 'http://via.placeholder.com/50'
      }
    ]
  },
  {
    time: '42/03/13',
    title: 'Lorem ipsum 2',
    subtitle: 'Lorem ipsum doloret 2',
    icon: {
      name: '',
      style: {background: 'rgb(33, 150, 243)', color: '#h4h4h4'}
    },
    content: (
      <React.Fragment>
        <h3 className="vertical-timeline-element-title">Art Director</h3>
        <h4 className="vertical-timeline-element-subtitle">San Francisco, CA</h4>
        <p>
          Creative Direction, User Experience, Visual Design, SEO, Online Marketing
        </p>
      </React.Fragment>
    ),
    attachements: [
      {
        type: 'image', // video, pdf, ...
        path: 'http://via.placeholder.com/50'
      }
    ]
  },
];