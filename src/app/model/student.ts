import {Clazz} from "./clazz";

export interface Student {
  id? : string;
  name?: string;
  score?: string;
  clazz: Clazz;
}
