import React from 'react';
import {VerticalTimeline, VerticalTimelineElement,} from "react-vertical-timeline-component";

import "react-vertical-timeline-component/style.min.css"; 
import { FaGraduationCap, } from "react-icons/fa";

function Experience() {
  return (
    <div className='experience'>
        <VerticalTimeline lineColor="#29335c">
        <VerticalTimelineElement className="vertical-timeline-element--education "
            date="2012/2013"
            iconStyle={{background: "#29335c", color: "#fff"}}
            icon ={<FaGraduationCap/>}
            >
              <h3  className="Vertical-timeline-element-title" >
                G.H.H Kwang-Pinyin, Pinyin Santa-Subdivision
                </h3>
                <p>Ordinary Level Certificate</p>

            </VerticalTimelineElement>
            <VerticalTimelineElement className="vertical-timeline-element--education "
            date="2018-2019"
            iconStyle={{background: "#29335c", color: "#fff"}}
            icon ={<FaGraduationCap/>}
            >
              <h3  className="Vertical-timeline-element-title" >
                G.B.H.S Etoug-Ebe, Yaounde, Cameroon
                </h3>
                <p>Advance Level Certificate</p>

            </VerticalTimelineElement>

            <VerticalTimelineElement className="vertical-timeline-element--education "
            date="2018-2019"
            iconStyle={{background: "#29335c", color: "#fff"}}
            icon ={<FaGraduationCap/>}
            >
              <h3  className="Vertical-timeline-element-title" >
                G.B.H.S Etoug-Ebe, Yaounde, Cameroon
                </h3>
                <p>Advance Level Certificate</p>

            </VerticalTimelineElement>
            <VerticalTimelineElement className="vertical-timeline-element--education "
            date="2020-2022"
            iconStyle={{background: "#29335c", color: "#fff"}}
            icon ={<FaGraduationCap/>}
            >
              <h3  className="Vertical-timeline-element-title" >
                INIESAT, Yaounde Cameroon
                </h3>
                <p>National Higher Diplomat (HND) in software Engineering</p>

            </VerticalTimelineElement>
            

            <VerticalTimelineElement className="vertical-timeline-element--education "
            date="2022/2023"
            iconStyle={{background: "#29335c", color: "#fff"}}
            icon ={<FaGraduationCap/>}
            >
              <h3  className="Vertical-timeline-element-title" >
                LEAD Higher National Institude, Yaounde-Cameroon
                </h3>
                <p>B.Tech in software Engineering </p>

            </VerticalTimelineElement>

            <VerticalTimelineElement className="vertical-timeline-element--education "
            date="2021"
            iconStyle={{background: "#29335c", color: "#fff"}}
            icon ={<FaGraduationCap/>}
            >
              <h3  className="Vertical-timeline-element-title" >
                SAGICAM, Yaounde-Cameroon
                </h3>
                <p>software Engineering Internship for months</p>

            </VerticalTimelineElement>

            <VerticalTimelineElement className="vertical-timeline-element--education "
            date="2022- current"
            iconStyle={{background: "#29335c", color: "#fff"}}
            icon ={<FaGraduationCap/>}
            >
              <h3  className="Vertical-timeline-element-title" >
                Gytec-Africal, Yaounde-Cameroon
                </h3>
                <p> Volunteer as a Back-End developer </p>

            </VerticalTimelineElement>
        </VerticalTimeline>
    </div>
  )
}

export default Experience
