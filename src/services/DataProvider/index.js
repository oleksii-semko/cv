import data from './data.json';
import {
    SECTION_PROFILE,
    SECTION_COURCES,
    SECTION_EDUCATION,
    SECTION_EMPLOYMENT,
    SECTION_LANGUAGES,
    SECTION_LINKS,
    SECTION_REFERENCES
} from './constants';

const getProfileInfo = () => data[SECTION_PROFILE];
const getEmploymentHistory = () => data[SECTION_EMPLOYMENT];
const getEducationInfo = () => data[SECTION_EDUCATION];
const getCources = () => data[SECTION_COURCES];
const getLanguages = () => data[SECTION_LANGUAGES];
const getReferences = () => data[SECTION_REFERENCES];
const getLinks = () => data[SECTION_LINKS];


export {getProfileInfo};
export {getEmploymentHistory};
export {getEducationInfo};
export {getCources};
export {getLanguages};
export {getReferences};
export {getLinks};
