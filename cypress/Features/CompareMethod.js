export class CompareMethod {

    constructor(node) {
        this.node = node;
    }
    static compareEachNames(values, names){
        values.each(($span, i) => {
            expect($span.text()).to.equal(names[i]);
        })
    }
}