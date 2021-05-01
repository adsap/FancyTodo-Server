const errorHandler = (err, req, res, next) => {
    let errorCode;
    let errorMessages = [];
  
    switch (err.name) {
      case 'MISSING_ACCESS_TOKEN':
        errorCode = 401;
        errorMessages.push('Missing access token');
        break;
      case 'INVALID_ACCESS_TOKEN':
        errorCode = 401;
        errorMessages.push('Invalid access token');
        break;
      case 'USER_NOT_FOUND':
        errorCode = 404;
        errorMessages.push('User Not Found');
        break;
      case 'TODO_NOT_FOUND':
        errorCode = 404;
        errorMessages.push('Todo not found');
        break;
      case 'LOGIN_FAILED':
        errorCode = 401;
        errorMessages.push('Wrong email or password');
        break;
      case 'INVALID_EMAIL':
        errorCode = 401;
        errorMessages.push('Email account might be wrong or invalid');
        break;
      case 'ACCOUNT_NOT_FOUND':
        errorCode = 401;
        errorMessages.push('Google account has not been registered');
        break;
      case 'ACCOUNT_ALREADY_REGISTERED':
        errorCode = 401;
        errorMessages.push('Google account is already registered');
        break;
      case 'SequelizeValidationError':
        errorCode = 400;
        errorMessages = err.errors ? err.errors.map((el) => el.message) : [];
        break;
      case 'SequelizeUniqueConstraintError':
        errorCode = 409;
        errorMessages = err.errors ? err.errors.map((el) => el.message) : [];
        break;
      default:
        errorCode = 500;
        errorMessages.push('Internal server error');
    }
  
    res.status(errorCode).json({ errorMessages });
  };
  
  module.exports = errorHandler;