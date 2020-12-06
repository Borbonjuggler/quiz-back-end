let frameworks = ['angular2','vue','react','grunt','phantomjs','ember','babel','ionic','gulp','meteor','yeoman','yarn','nodejs','bower','browserify'];
let cardBank = [];

frameworks.forEach(i =>
  cardBank.push({
    name: i,
    key: i,
    // close: true,
    // fail: false,
    // complete: false,
    // side:"back",
    framework_img_url:"https://raw.githubusercontent.com/samiheikki/javascript-guessing-game/master/static/logos/"+i+".png",
    id: i,
  }));

module.exports.cardBank = cardBank;
