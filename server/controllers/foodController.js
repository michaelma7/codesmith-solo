const db = require('../models/foodModel');

// helper function to create googleController error objects
// return value will be the object we pass into next, invoking global error handler
const createErr = (errInfo) => {
  const { method, type, err } = errInfo;
  return {
    log: `foodController.${method} ${type}: ERROR: ${
      typeof err === 'object' ? JSON.stringify(err) : err
    }`,
    message: {
      err: `Error occurred in foodController.${method}. Check server logs for more details.`,
    },
  };
};

const foodController = {};

foodController.getFoodItem = async (req, res, next) => {
  try {
    //sanitize location entry
    const array = [req.params.location];
    console.log(req.params);
    const query = `SELECT * FROM food WHERE food.region=$1;`;
    const data = await db.query(query, array);
    //check for no match
    if(data.length === 0) {
      throw {
        log: 'No food for specified location',
        status: 404,
        message: {Error: 'No item found'}
      }
    }
    res.locals.food = data[0];
    return next();
  } catch(err) {
    return next(createErr({
      method: 'getFoodItem',
      type: 'data retrieval',
      err,
    }));
  } 
}

foodController.createFoodItem = async (req, res, next) => {
  try {
    //sanitize data
    const { id, name, region, country, description, history } = req.body;
    console.log({ id, name, region, country, description, history });
    const arrayOfParams = [ id, name, region, country, description, history ];
    //check each param for proper type string
    // for(param of arrayOfParams) {
    //   if(typeof param !== 'string') throw 'Mismatch data type'
    // }
    const insert = `INSERT INTO food 
    (id, name, region, country, description, history)
    VALUES ($1, $2, $3, $4, $5, $6);`;
    const res = await db.query(insert, arrayOfParams);
    res.locals.id = res;
    return next();
  } catch (err) {
    return next(createErr({
      method: 'createFoodItem',
      type: 'entry creation',
      err,
    }));
  }
};

module.exports = foodController;
