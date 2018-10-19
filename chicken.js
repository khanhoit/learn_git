function chicken(weight = 0;hight=0){
	this.weight = weight;
	this.hight = hight;
	this.stomooth =[]
}
chicken.prototype.eat = function(cat) {
	this.stomooth.push(cat);
};
module.exports = chicken;