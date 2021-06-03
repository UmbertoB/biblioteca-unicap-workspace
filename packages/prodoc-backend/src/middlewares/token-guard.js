
const userService = require('../services/auth.service');
const noAuthRoutes = require('../utils/noauth-routes');
const jwt = require('jsonwebtoken');

function getTokenFromHeaders(headers) {
  const header = headers.authorization;

  if (!header) return header

  return header.split(' ')[1]
}

function getTokenFromQueryParams(queryParams) {
  const authorization = queryParams.authorization;

  if (!authorization) return authorization;

  return authorization.split(' ')[1];
}

module.exports = tokenGuard = async (req, res, next) => {
  const token = getTokenFromHeaders(req.headers) || getTokenFromQueryParams(req.query);

  let isNoAuthRoute = noAuthRoutes(req.url);

  const hasAccess = await userService.verifyToken(token);

  if (!hasAccess && !isNoAuthRoute) return res.status(403).send({ message: 'No access' });

  const currentUser = jwt.decode(token).user;

  req.currentUser = currentUser;

  next();

};
