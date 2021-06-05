function createObject(props) {
    const resultObj = {};

    props.forEach((elem) => {
        const [ key, value, writable, enumerable, configurable ] = elem;

        Object.defineProperty(resultObj, key, {
            value,
            writable,
            enumerable,
            configurable,
        });
    });

    return resultObj;
}

createObject([['key1', 'value1', true, true, false]]);


function createStudent(firstName, lastName, birthDate) {
    const zero = 0;
    const first = 1;

    const result = {
        firstName,
        lastName,
        birthDate,
        get fullName() {
            return this.firstName + ' ' + this.lastName;
        },
        set fullName(newName) {
            this.firstName = newName.split(' ')[zero];
            this.lastName = newName.split(' ')[first];
        },
        get age () {
            return new Date().getFullYear() - birthDate;
        }
    };
    return result;
}

createStudent();