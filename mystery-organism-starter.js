// Returns a random DNA base
const returnRandBase = () => {
  const dnaBases = ['A', 'T', 'C', 'G'];
  return dnaBases[Math.floor(Math.random() * 4)];
};

// Returns a random single strand of DNA containing 15 bases
const mockUpStrand = () => {
  const newStrand = [];
  for (let i = 0; i < 15; i++) {
    newStrand.push(returnRandBase());
  }
  return newStrand;
};

const pAequorFactory = (specimenNum, dna) => {
  return {
    specimenNum: specimenNum,
    dna: dna,
    mutate() {
      const index = Math.floor(Math.random() * 15);
      const newBase = returnRandBase();
      if (newBase !== this.dna[index]) {
        this.dna[index] = newBase;
      } else {
        this.mutate();
      }
    },
    compareDNA(pAequor) {
      let count = 0;
      for (let i = 0; i < 15; i++) {
        if (this.dna[i] === pAequor.dna[i]) {
          count++;
        }
      } 
      console.log(`Specimen #${this.specimenNum} and specimen #${pAequor.specimenNum} have ${100/15*count}% DNA in common.`);
    },
  
    
    willLikelySurvive() {
      let count = 0;
      this.dna.forEach((base) => {
        if (base === 'C' || base === 'G') {
          count++;
        }
      });
     
      return (count >= 9);
    
      }

  };
};
    
  

    const survivingSpecimens = [];  
    let specimenCount = 0;
    let specimenNum = 1;
  
  while (survivingSpecimens.length < 30) {
    const newSpecimen = pAequorFactory(specimenNum, mockUpStrand());
    if (newSpecimen.willLikelySurvive()) {
      survivingSpecimens.push(newSpecimen);
    }
  specimenCount++;
  }
  

  survivingSpecimens.forEach((specimen) => {
  console.log(specimen.dna);
})







