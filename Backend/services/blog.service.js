const adminOnlyActions = ['create', 'update', 'delete'];

const isAuthorized = (action, user) => {
    if (adminOnlyActions.includes(action) && user.role !== 'admin') {
        // return res.status(403).json({ message: 'Forbidden' });

        throw new Error('Forbidden');
    }
};

module.exports = { isAuthorized };