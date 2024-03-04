import MeasureUnit from '@/MeasureUnit';


// Define your seed data
const seedData = [
  { name: 'Liter', abbreviation: 'l' },
  { name: 'Deciliter', abbreviation: 'dl' },
  { name: 'Mililiter', abbreviation: 'ml' },
  { name: 'Kilogram', abbreviation: 'kg' },
  { name: 'Decagram', abbreviation: 'dag' },
  { name: 'Gram', abbreviation: 'g' },
  { name: 'Piece', abbreviation: 'pc' },
  // Add more seed data as needed
];

function seedMeasureUnit() {
  // Insert seed data into the MeasureUnit collection
  MeasureUnit.insertMany(seedData)
    .then(() => {
      console.log('Seed data inserted successfully');
    })
    .catch((err) => {
      console.error('Error seeding data:', err);
    });
}

export default seedMeasureUnit;

