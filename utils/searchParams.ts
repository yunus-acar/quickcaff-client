import { parseAsArrayOf, parseAsString } from "nuqs";

const searchParams = {
  density: parseAsString,
  flavors: parseAsArrayOf(parseAsString),
  others: parseAsArrayOf(parseAsString),
  pairing_suggestions: parseAsArrayOf(parseAsString),
  temperature: parseAsString,
};

export default searchParams;
