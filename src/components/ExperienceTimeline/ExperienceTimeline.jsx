import * as React from "react";
import Timeline from "@mui/lab/Timeline";
import TimelineItem from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineDot from "@mui/lab/TimelineDot";

export default function ExperienceTimeline() {
  return (
    <Timeline position="alternate">
      <TimelineItem>
        <TimelineSeparator>
          <TimelineDot />
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent>
          <div>
            <h3>Associate Software Engineer</h3>
            <p>
              <i>Rocket Mortgage</i>
            </p>
            <p>June 2021 - Present</p>
          </div>
        </TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineSeparator>
          <TimelineDot />
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent>
          <div>
            <h3>Software Engineer Intern</h3>
            <p>
              <i>Rocket Mortgage</i>
            </p>
            <p>January 2021 - June 2021</p>
          </div>
        </TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineSeparator>
          <TimelineDot />
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent>
          <div>
            <h3>Software Development Intern</h3>
            <p>
              <i>CQL Incorporated</i>
            </p>
            <p>June 2020 - August 2020</p>
          </div>
        </TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineSeparator>
          <TimelineDot />
        </TimelineSeparator>
        <TimelineContent>
          <div>
            <h3>API Developer Intern</h3>
            <p>
              <i>PACCAR</i>
            </p>
            <p>May 2019 - July 2019</p>
          </div>
        </TimelineContent>
      </TimelineItem>
    </Timeline>
  );
}
