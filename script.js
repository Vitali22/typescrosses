new Vue({
  el: '#v-for-object',
  data: {

  gene: {
		
    	cromosoma1:"bluePixel",
    	cromosoma2:"redPixel",
    	cromosoma3:"bluePixel",
    	cromosoma4:"redPixel",
    	cromosoma5:"bluePixel",
    	cromosoma6:"redPixel",
    	cromosoma7:"bluePixel",
    	cromosoma8:"redPixel",
    	cromosoma9:"bluePixel",
    	cromosoma10:"redPixel",
    	cromosoma11:"bluePixel",
    	cromosoma12:"redPixel",
    	cromosoma13:"bluePixel",
    	cromosoma14:"redPixel",
    	cromosoma15:"bluePixel",
    	cromosoma16:"redPixel",
    	cromosoma17:"bluePixel",
    	cromosoma18:"redPixel",
    	cromosoma19:"bluePixel",
    	cromosoma20:"redPixel"
		},
/*
        gene: {
    	cromosoma1:colorPixel(),
    	cromosoma2:colorPixel(),
    	cromosoma3:colorPixel(),
    	cromosoma4:colorPixel(),
    	cromosoma5:colorPixel(),
    	cromosoma6:colorPixel(),
    	cromosoma7:colorPixel(),
    	cromosoma8:colorPixel(),
    	cromosoma9:colorPixel(),
    	cromosoma10:colorPixel(),
    	cromosoma11:colorPixel(),
    	cromosoma12:colorPixel(),
    	cromosoma13:colorPixel(),
    	cromosoma14:colorPixel(),
    	cromosoma15:colorPixel(),
    	cromosoma16:colorPixel(),
    	cromosoma17:colorPixel(),
    	cromosoma18:colorPixel(),
    	cromosoma19:colorPixel(),
    	cromosoma20:colorPixel()
		},
*/
	},
	methods: {
		colorPixel : function(){
			if((Math.random())>0){
				return "bluePixel";
			}
			else{
				return "redPixel";
			}
    }
	},
	mounted() {
		//this.colorPixel;
	},
})