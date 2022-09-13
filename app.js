class Person{
// Encapsulation
    constructor(name, school, course, state, tribe) {
        this.name = name;
        this.school = school;
        this.course = course;
        this.state = state;
        this.tribe = tribe;
    }

    getDetails() {
        // console.log(this.name, `this is his name`);
        return {
            name: this.name,
            school: this.school,
            course: this.course,
            state: this.state,
            tribe: this.tribe,
        }
    
    }

    setFriends(friend1, friend2) {
        this.friend1 = friend1;
        this.friend2 = friend2;
        

    }
    getFriends() {

        return this.friend1 + this.friend2
    }

}


let Hameed = new Person('hameed', 'nile uni', 'computer science', 'Abuja', 'yoruba');
// inheritance
class Seamfix extends Person{

    getApplicantDetails() {
        let details = Hameed.getDetails();
        console.log(details);
    }
    
}
//inheritance
class Zenith extends Person{
    getForAccount() {
        let details = Hameed.getDetails();
        console.log(details)
    }

}


let seamfix = new Seamfix();
seamfix.getApplicantDetails();
let zenith = new Zenith();
zenith.getForAccount();