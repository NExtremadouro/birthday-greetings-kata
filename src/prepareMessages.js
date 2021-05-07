const prepareMessages = function(users) {
    let messages = []

    users.forEach(user => {
        const currentDate = new Date()
        const userDate = new Date(user.date)

        if (currentDate.getMonth() === userDate.getMonth() + 1 && currentDate.getDay() === userDate.getDay() + 1) {
            const message = {
                type: 'greeting',
                subject: 'Happy birthday!',
                message: `Happy birthday, dear ${user.first_name}!`
            }

            messages.push(message)
        }
    });

    return messages
}

module.exports = {
    prepareMessages: prepareMessages
};
