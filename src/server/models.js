const dbHelpers = require('../../db/dbHelpers');

module.exports = {
  menuType: (req, res) => {
    const { meal } = req.params;
    const queryObj = {
      query: `menu.${meal}`,
    };
    dbHelpers.find(queryObj, (err, result) => {
      const resultObj = result[0].toObject();
      res.send(resultObj.menu[meal]);
    });
  },
  filterBy: (req, res) => {
    const { meal, tag } = req.params;
    const queryObj = {
      query: `menu.${meal}`,
    };
    dbHelpers.find(queryObj, (err, result) => {
      const resultObj = result[0].toObject();
      const menu = resultObj.menu[meal];
      const filteredMenu = menu.filter(item => item.tags === tag);
      res.send(filteredMenu);
    });
  },
};
