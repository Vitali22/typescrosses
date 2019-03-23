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
			for (countGene = 0; countGene < 20; countGene++) {
				gene = [];
				for (countChromosome = 0; countChromosome < 20; countChromosome++) {
					cromosoma = [
						color = "",
						chromosomeNumber = 0,
						geneNumber = 0,
					];
					cromosoma.color = this.colorPixel();
					cromosoma.chromosomeNumber = countChromosome;
					cromosoma.geneNumber = countGene;
					gene.push(cromosoma);
				}
				this.population.push(gene);
			};
		},
		emptyPopulation: function () {
			this.population = [];
		}
	},
	mounted() {
	},
})

//Make a function to know if chromosomeValue is 0 or 1