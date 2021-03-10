import { LightningElement } from 'lwc';
import * as RESUMEDATA from './myResumeContainerData'
export default class MyResumeContainer extends LightningElement {

    PROFILE_IMAGE = RESUMEDATA.PROFILE_IMAGE
    SOCIAL_LINKS = RESUMEDATA.SOCIAL_LINKS
    RESUME_DATA = RESUMEDATA
 }