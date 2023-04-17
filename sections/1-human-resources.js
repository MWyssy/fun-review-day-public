function removeAgents(employees) {
    const result = [];

    employees.map((employee) => {
        const copyEmployee = {...employee};
        if (copyEmployee.profession !== 'mole') {
            return result.push(copyEmployee);
        };
    });

    return result;
}

function makeNameTags(guests) {
    const result = [];

    if (!guests[0].title) return result;

    guests.map((guest) => {
        return result.push(`${guest.title} ${guest.forename} ${guest.surname}, ${guest.company}`)
    });

    return result;
}

function createPoll(pollResult) {
    const result = {};

    if (pollResult.length === 0) return result;

    pollResult.map((item) => {
        if (!result.hasOwnProperty(item)) {
            return result[item] = 1;
        } else {
            return result[item]++;
        };
    });

    return result;
}

module.exports = { removeAgents, makeNameTags, createPoll };
