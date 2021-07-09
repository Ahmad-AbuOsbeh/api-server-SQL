'use strict';
module.exports = (req, res, next) => {
  if (req.body.type && req.body.color) {
    // console.log('req.body.color', req.body.color);
    console.log('req.body.type', req.body.type);

    next();
  } else {
    console.log('hello from else');
    res.json({
      error:
        'error from validator, please add the type & color of the food or cloth',
    });
    next('ERROR : please add the type & color of the food or cloth');
  }
};
