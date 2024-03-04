import dbConnect from "../lib/dbConnect";
import seedMeasureUnit from "./measure_unit.seed";

async function seed() {
  await dbConnect();
  await seedMeasureUnit();
}

seed();
