function removeAgents(employees) {
    return employees.filter((employee) => {
        if (employee.profession !== 'mole') {
            return employee;
        }
    });
};

function makeNameTags(guests) {
    const result = [];
    if (guests.length === 0) return result;

    for (let i = 0; i < guests.length; i++) {
        result.push(`${guests[i].title} ${guests[i].forename} ${guests[i].surname}, ${guests[i].company}`)
    }

    return result

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
