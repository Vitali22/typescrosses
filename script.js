new Vue({
	el: '#v-for-object',
	data: {
		population: [],
		countGene: 0,
		countChromosome: 0,
	},
	methods: {
		colorPixel: function () {
			if ((Math.random()) >= 0.5) {
				return value = "bluePixel";
			}
			else {
				return value = "redPixel";
			}
		},
		fillPopulation: function () {
			for (countGene = 0; countGene < 100; countGene++) {
				gene = [];
				for (countChromosome = 0; countChromosome < 20; countChromosome++) {
					cromosoma = '';
					cromosoma = this.colorPixel();
					gene.push(cromosoma)
				}
				this.population.push(gene)
			};
		}
	},
	mounted() {
		//this.colorPixel;
	},
})