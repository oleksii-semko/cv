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
        return employment.map(entry => {
            const {city, company, jd, period, position, duration, tech} = entry;
            const renderInFoBlockContent = (job, technoligies) => {
                return (
                    <React.Fragment>
                        {job && 
                            <p>
                                <span>JD:</span>{job}
                            </p>
                        }
                        {technoligies && 
                            <p>
                                <span>Technologies:</span>{technoligies}
                            </p>
                        }
                    </React.Fragment>
                );
            }

            return <InfoBlock 
                title={position}
                subTitle={`${company} (${duration})`}
                period={period}
                city={city}
                content={renderInFoBlockContent(jd, tech)}
            />;
        });
    }

    renderEducation() {
        const education = getEducationInfo();

        return education.map(entry => {
            const {institution, degree, city, period} = entry;

            return <InfoBlock 
                title={institution}
                subTitle={degree}
                period={period}
                city={city}
            />;
        });
    }

    renderCources() {
        const cources = getCources();

        return cources.map(entry => {
            const {institution, cource, period} = entry;
            console.log(entry);
            return <InfoBlock 
                title={cource}
                subTitle={institution}
                period={period}
                city={'Online'}
            />;
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
                <InfoSection title="Employment History">
                    {this.renderEmploymentHistory()}
                </InfoSection>
                <LineSeparator />
                <InfoSection title="Education">
                    {this.renderEducation()}
                </InfoSection>
                <LineSeparator />
                <InfoSection title="Cources">
                    {this.renderCources()}
                </InfoSection>
                <LineSeparator />
                <InfoSection title="Languages">
                    
                </InfoSection>
                <LineSeparator />
                <InfoSection title="References">
                    
                </InfoSection>
            </React.Fragment>
        );
    }

}

export default MainContent;
