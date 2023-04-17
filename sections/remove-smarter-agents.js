function removeSmarterAgents(employees) {
    const testRegex = /[m].*[o].*[l].*[e]/i
    return employees.filter((employee) => {
        if (!testRegex.test(employee.aboutMe)) {
            if (!testRegex.test(employee.interests.toString())) {
                return employee;
            };
        };
    });
};

module.exports = removeSmarterAgents;