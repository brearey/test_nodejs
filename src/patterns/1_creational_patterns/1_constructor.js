// Pattern Constructor

// Old realizations
function ServerOld(name, ip) {
    this.name = name;
    this.ip = ip;
}

ServerOld.prototype.getUrl = function() {
    return `https:// ${this.ip}:80`
}

// New realizations
class ServerNew {
    constructor(name, ip) {
        this.name = name;
        this.ip = ip;
    }

    getUrl() {
        return `https://${this.ip}:80`
    }
}

const aws = new ServerNew('AWS German', '1.1.1.1')
console.log(aws.getUrl())