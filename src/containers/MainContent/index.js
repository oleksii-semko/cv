import React from 'react';
import InfoSection from '../../components/InfoSection';
import InfoBlock from '../../components/InfoBlock';
import LineSeparator from '../../components/LineSeparator';
import {
    getProfileInfo,
    getEmploymentHistory, 
    getEducationInfo, 
    getCources
} from '../../services/DataProvider';

import './index.scss';

class MainContent extends React.Component {
    renderEmploymentHistory() {
        const employment = getEmploymentHistory();
        const renderInFoBlockContent = (job, technoligies) => {
            return <React.Fragment>
                    {job && 
                        <p>
                            <span>JD: </span>{job}
                        </p>
                    }
                    {technoligies && 
                        <p>
                            <span>Technologies: </span>{technoligies}
                        </p>
                    }
                </React.Fragment>;
        }

        return employment.map((entry, i) => {
            const {city, company, jd, period, position, duration, tech} = entry;
            let content = renderInFoBlockContent(jd, tech);

            return <InfoBlock 
                title={position}
                subTitle={`${company} (${duration})`}
                period={period}
                city={city}
                content={content}
                key={i}
            />;
        });
    }

    renderEducation() {
        const education = getEducationInfo();

        return education.map((entry, i) => {
            const {institution, degree, city, period} = entry;

            return <InfoBlock 
                title={institution}
                subTitle={degree}
                period={period}
                city={city}
                key={i}
            />;
        });
    }

    renderCources() {
        const cources = getCources();

        return cources.map((entry, i ) => {
            const {institution, course, period, proof} = entry;

            return <InfoBlock 
                    title={course}
                    subTitle={institution}
                    period={period}
                    city={'Online'}
                    key={i}
                >
                    <p className="proof">
                        <a href={proof} target="_blank" rel="noopener noreferrer">Link</a> to proof completion
                    </p>
                </InfoBlock>;
        });
    }


    render() {
        return (
            <React.Fragment>
                <LineSeparator />
                <InfoSection title="Profile">
                    <p>{getProfileInfo()}</p>
                </InfoSection>
                <LineSeparator />
                <InfoSection title="Employment History" contentAlignment="vertical">
                    {this.renderEmploymentHistory()}
                </InfoSection>
                <LineSeparator />
                <InfoSection title="Education" contentAlignment="vertical">
                    {this.renderEducation()}
                </InfoSection>
                <LineSeparator />
                <InfoSection title="Cources" contentAlignment="vertical">
                    {this.renderCources()}
                </InfoSection>
                <LineSeparator />
                <InfoSection title="Languages">
                    <p class="lang">Ukrainian</p>
                    <p class="lang">English</p>
                    <p class="lang">Russian</p>
                </InfoSection>
            </React.Fragment>
        );
    }

}

export default MainContent;
