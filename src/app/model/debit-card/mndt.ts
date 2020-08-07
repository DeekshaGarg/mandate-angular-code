import { Ocrncs } from './ocrncs';
import { ColltnAmt } from './colltn-amt';
import { MaxAmt } from './max-amt';
import { Dbtr } from './dbtr';
import { CrAccDtl } from './cr-acc-dtl';

export class Mndt {

    constructor(
        public MndtReqId:string,
        public MndtId:string,
        public Mndt_Type:string,
        public Schm_Nm:string,
        public Ocrncs:Ocrncs,
        public ColltnAmt:ColltnAmt,
        public MaxAmt:MaxAmt,
        public Dbtr:Dbtr,
        public CrAccDtl:CrAccDtl
    ){}
    
}
