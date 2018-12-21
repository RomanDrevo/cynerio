export default class People {
    constructor(data) {
        Object.assign(this, data);
    }

    static reconstituteFrom(json) {

        const state = {
            id: json['id'],
            firstName: json['first_name'],
            lastName: json['last_name'],
            email: json['email'],
            ipAddress: json['ip_address'],
            gender: json['gender']

        };
        return new People(state);
    }
}