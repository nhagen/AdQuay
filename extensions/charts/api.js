module.exports = {
  getNetworks: function() {
    this.method = 'get';
    this.path = 'getDates';
    this.action = function(req, res) {
      res.end('Return max date range to query by');
    };
  }
};
