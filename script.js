new Vue({
	el: '#v-for-object',
	data: {
		population: [],
		countGene: 0,
		countChromosome: 0,
		luckyPopulation: [],
		listOfRandoms: [],
		ransomware: Math.floor(Math.random() * 100) + 1,
	},
	methods: {
		colorPixel: function () 
		{
			if ((Math.random()) >= 0.5) 
			{
				return value = "bluePixel";
			}
			else 
			{
				return value = "redPixel";
			}
		},
		fillPopulation: function () {
			for (countGene = 0; countGene < 20; countGene++) {
					gene = [];
				for (countChromosome = 0; countChromosome < 20; countChromosome++)
				{
					let cromosoma =
					{
						color: '',
						chromosomeNumber: 0,
						geneNumber: 0,
						chromosomeValue: 0,
					};
					cromosoma.color = this.colorPixel();
					cromosoma.chromosomeNumber = countChromosome;
					cromosoma.geneNumber = countGene;

					if(cromosoma.color==="bluePixel")
						cromosoma.chromosomeValue = 1;

					gene.push(cromosoma);
				}
				this.population.push(gene);
			};
		},
		emptyPopulation: function () 
		{
			this.population = [];
		},
		selectPopulation: function () 
		{	
			for (let index = 0; index < 20; index++) 
			{		index: 0,
				this.luckyPopulation.push(this.population[this.listOfRandoms[index]]);
			}
		},
		ramdomList: function ()
		{	
			for (let index = 0; index < 20; index++) 
			{	
				this.listOfRandoms.push(Math.floor(Math.random() * 100) + 1);
			}
		},
	},
	mounted() {
	},
})
