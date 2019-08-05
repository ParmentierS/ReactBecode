import React from 'react';
import {VerticalTimeline, VerticalTimelineElement} from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import {timelineData} from './data';

class TimelineModule extends React.Component {
  render() {
    return (
      <VerticalTimeline layout={'1-column'}>
        {timelineData.map((v, k) => {
          return (
            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              date={v.date}
              iconStyle={v.icon.style}
              //icon={<WorkIcon/>}
              key={k}
            >
              {v.content}
            </VerticalTimelineElement>
          );
        })}
      </VerticalTimeline>
    );
  }
}

export default TimelineModule;