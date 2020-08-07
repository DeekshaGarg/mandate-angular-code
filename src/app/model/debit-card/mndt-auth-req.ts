import { GrpHdr } from './grp-hdr';
import { Mndt } from './mndt';

export class MndtAuthReq {

    constructor(
        public GrpHdr:GrpHdr,
        public Mndt:Mndt
    ){}
}
