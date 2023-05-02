const admin = require('firebase-admin');

const firebaseAuthMiddleware = async (req, res, next) => {
  try {
    const authToken = req.header('Authorization').replace('Bearer ', '');
    const decodedToken = await admin.auth().verifyIdToken(authToken);
    req.user = decodedToken;
    next();
  } catch (error) {
    console.error(error);
    res.status(401).json({ error: 'Unauthorized' });
  }
};

module.exports = firebaseAuthMiddleware;
