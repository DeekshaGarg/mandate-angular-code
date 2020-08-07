import { ReqInitPty } from './req-init-pty';

export class GrpHdr {
    constructor(
        public NPCI_RefMsgId:string,
        public CreDtTm:Date,
        public ReqInitPty:ReqInitPty
    ){}
}
