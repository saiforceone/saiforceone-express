import type {Prisma} from "@prisma/client";

const LBS_TO_KG = 0.453;

export default class Formatters {
  static formatWeight(weight: Prisma.Decimal): string {
    const weightAsKgs = weight.times(LBS_TO_KG).toFixed(2);
    return `${weight} Lbs (~${weightAsKgs} Kgs)`;
  }
}