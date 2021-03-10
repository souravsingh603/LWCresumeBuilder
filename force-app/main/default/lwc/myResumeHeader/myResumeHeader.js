import { api, LightningElement } from 'lwc';

export default class MyResumeHeader extends LightningElement {

    @api profileImage
    @api socialDetail
    @api userDetail

    get phoneLink(){
        return `tel:${this.userDetail.PHONE}`
    }
    get emailLink(){
        return `mailto:${this.userDetail.EMAIL}`
    }
}