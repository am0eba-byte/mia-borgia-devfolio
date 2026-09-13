import React from "react";
import '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBriefcase } from '@fortawesome/free-solid-svg-icons';
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import '../assets/styles/Timeline.scss'

function Timeline() {
  return (
    <div id="history">
      <div className="items-container">
        <h1>Career History</h1>
        <VerticalTimeline>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="2023 - present"
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">Software Engineer</h3>
            <h4 className="vertical-timeline-element-subtitle">Big Ideas Learning, LLC <span className="subtitle-smalltext"><i>(formerly Larson Texts, Inc.)</i></span></h4>
            <p>
              Full-stack LMS Software Development, AWS Cloud Architecture implementation, Data Engineering, End-to-End Project Technical Leadership
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="2022 - 2023"
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">Junior Software Engineer</h3>
            <h4 className="vertical-timeline-element-subtitle">Big Ideas Learning, LLC </h4>
            <p>
              Project Leadership, Research & Development Data Extraction & Analysis,Frontend Development, Backend Development, Internal Tooling
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="2021 - 2022"
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">Software Development Intern</h3>
            <h4 className="vertical-timeline-element-subtitle">Larson Texts, Inc.</h4>
            <p>
              Database modeling, API Development, Frontend Development
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="2020 - 2022"
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">Web Developer Intern / Creative Director & Animator / Coding Tutor</h3>
            <h4 className="vertical-timeline-element-subtitle">Pennsylvania State University, the Behrend College</h4>
            <p>
              Animation & Video Production, Digital Art Gallery Design & Development, Text Encoding & Web Development Tutoring
            </p>
          </VerticalTimelineElement>
        </VerticalTimeline>
      </div>
    </div>
  );
}

export default Timeline;