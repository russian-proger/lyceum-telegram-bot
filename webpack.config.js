module.exports = ({ dev }) => require(`./webpack.${ dev ? "dev" : "prod" }.js`);