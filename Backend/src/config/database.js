module.exports = {
  dialect: 'postgres',
  host: 'localhost',
  username: 'postgres',
  password: 'docker',
  database: 'healthmedical',
  define: {
    timestamps: true,
    underscored: true,
    underscoredAll: true,
  },
};
