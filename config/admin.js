module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', 'c2b7ba073e11e1c47ae43d330cb4b342'),
  },
});
