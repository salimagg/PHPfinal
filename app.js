var map = document.querySelector('#map')
var paths = map.querySelector('.map__image a')
var links = map.querySelector('.map__list a')

//Polyfill du foreach
if (Nodelist.prototype.forEach === undefined) {
	Nodelist.prototype.forEach = function (callback){
		[].forEach.call(this, callback)
	}
}

paths.forEach(function(path){
	path.addEventListener('mouseenter',function(e) {
		var id = this.id.replace('_region','')
		document.querySelector('#list-' + id).classlist.add('is-active')
		document.querySelector('#region-' + id).classlist.add('is-active')
	})
})